import { useCallback, useEffect, useRef, useState } from 'react';
import * as Speech from 'expo-speech';
import { scorePronunciation, type PronunciationResult } from '@/lib/pronunciation';

type SpeechModule = typeof import('expo-speech-recognition');

async function loadSpeechModule(): Promise<SpeechModule | null> {
  try {
    return await import('expo-speech-recognition');
  } catch {
    return null;
  }
}

export function useSpanishPronunciation() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [result, setResult] = useState<PronunciationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [available, setAvailable] = useState<boolean | null>(null);
  const targetRef = useRef('');
  const moduleRef = useRef<SpeechModule | null>(null);

  useEffect(() => {
    let mounted = true;
    const subs: { remove: () => void }[] = [];

    void (async () => {
      const mod = await loadSpeechModule();
      if (!mounted) return;
      moduleRef.current = mod;

      if (!mod?.ExpoSpeechRecognitionModule) {
        setAvailable(false);
        return;
      }

      try {
        const supported = mod.ExpoSpeechRecognitionModule.isRecognitionAvailable();
        setAvailable(supported);
      } catch {
        setAvailable(false);
        return;
      }

      subs.push(
        mod.ExpoSpeechRecognitionModule.addListener('start', () => {
          setListening(true);
          setError(null);
        }),
      );
      let latest = '';
      subs.push(
        mod.ExpoSpeechRecognitionModule.addListener('end', () => {
          setListening(false);
          if (latest) {
            setResult(scorePronunciation(targetRef.current, latest));
          }
        }),
      );
      subs.push(
        mod.ExpoSpeechRecognitionModule.addListener('result', (event) => {
          const text = event.results?.[0]?.transcript?.trim() ?? '';
          if (!text) return;
          latest = text;
          setTranscript(text);
          if (event.isFinal) {
            setResult(scorePronunciation(targetRef.current, text));
          }
        }),
      );
      subs.push(
        mod.ExpoSpeechRecognitionModule.addListener('error', (event) => {
          setListening(false);
          if (event.error === 'aborted' || event.error === 'no-speech') return;
          setError(event.message || event.error || 'Speech error');
        }),
      );
    })();

    return () => {
      mounted = false;
      subs.forEach((s) => s.remove());
      try {
        moduleRef.current?.ExpoSpeechRecognitionModule.stop();
      } catch {
        // ignore
      }
      Speech.stop();
    };
  }, []);

  const playModel = useCallback((phrase: string) => {
    Speech.stop();
    Speech.speak(phrase, {
      language: 'es-ES',
      rate: 0.88,
      pitch: 1,
    });
  }, []);

  const startListening = useCallback(async (targetPhrase: string) => {
    const mod = moduleRef.current;
    setResult(null);
    setTranscript('');
    setError(null);
    targetRef.current = targetPhrase;

    if (!mod?.ExpoSpeechRecognitionModule) {
      setError('unavailable');
      setAvailable(false);
      return false;
    }

    const permission = await mod.ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!permission.granted) {
      setError('permission');
      return false;
    }

    try {
      mod.ExpoSpeechRecognitionModule.stop();
    } catch {
      // ignore
    }

    mod.ExpoSpeechRecognitionModule.start({
      lang: 'es-ES',
      interimResults: true,
      continuous: false,
      addsPunctuation: false,
      contextualStrings: [targetPhrase],
    });
    return true;
  }, []);

  const stopListening = useCallback(() => {
    try {
      moduleRef.current?.ExpoSpeechRecognitionModule.stop();
    } catch {
      // ignore
    }
    setListening(false);
  }, []);

  const reset = useCallback(() => {
    setResult(null);
    setTranscript('');
    setError(null);
  }, []);

  return {
    available,
    listening,
    transcript,
    result,
    error,
    playModel,
    startListening,
    stopListening,
    reset,
  };
}
