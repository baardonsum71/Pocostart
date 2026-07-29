import { catalogs } from '@/i18n/locales';
import type { LocaleCode } from '@/i18n/types';

export type ExerciseType = 'multiple_choice' | 'translate' | 'listen_pick';

export type Exercise = {
  id: string;
  type: ExerciseType;
  prompt: string;
  options?: string[];
  answer: string;
  hint?: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  order: number;
  titleEs: string;
  title: string;
  description: string;
  emoji: string;
  xp: number;
  isFree: boolean;
  words: { es: string; meaning: string; phonetic?: string }[];
  exercises: Exercise[];
};

export type Unit = {
  id: string;
  order: number;
  titleEs: string;
  title: string;
  description: string;
  color: string;
};

const BASE_UNITS = [
  { id: 'u1', order: 1, titleEs: 'Primeros pasos', color: '#FF8A00' },
  { id: 'u2', order: 2, titleEs: 'En la ciudad', color: '#E53935' },
  { id: 'u3', order: 3, titleEs: 'Conversación', color: '#1A2744' },
] as const;

const BASE_LESSONS = [
  {
    id: 'l1',
    unitId: 'u1',
    order: 1,
    titleEs: 'Hola',
    emoji: '👋',
    xp: 20,
    isFree: true,
    wordKeys: ['Hola', 'Adiós', 'Buenos días', 'Buenas noches', 'Gracias', 'Por favor'] as const,
    phonetics: {
      Hola: 'O-la',
      Adiós: 'a-DI-os',
      'Buenos días': 'BWE-nos DI-as',
      'Buenas noches': 'BWE-nas NO-tsjes',
      Gracias: 'GRA-sias',
      'Por favor': 'por fa-VOR',
    } as Record<string, string>,
    exerciseIds: ['l1e1', 'l1e2', 'l1e3', 'l1e4'] as const,
  },
  {
    id: 'l2',
    unitId: 'u1',
    order: 2,
    titleEs: 'Presentarse',
    emoji: '🪪',
    xp: 25,
    isFree: true,
    wordKeys: ['Me llamo…', 'Soy…', '¿Cómo te llamas?', 'Mucho gusto', 'De Noruega', '¿Y tú?'] as const,
    phonetics: {
      'Me llamo…': 'me JA-mo',
      'Soy…': 'soj',
      '¿Cómo te llamas?': 'KO-mo te JA-mas',
      'Mucho gusto': 'MU-tjo GUS-to',
      'De Noruega': 'de no-RWE-ga',
      '¿Y tú?': 'i tu',
    } as Record<string, string>,
    exerciseIds: ['l2e1', 'l2e2', 'l2e3'] as const,
  },
  {
    id: 'l3',
    unitId: 'u1',
    order: 3,
    titleEs: 'Números',
    emoji: '🔢',
    xp: 25,
    isFree: false,
    wordKeys: ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'] as const,
    phonetics: {} as Record<string, string>,
    exerciseIds: ['l3e1', 'l3e2', 'l3e3'] as const,
  },
  {
    id: 'l4',
    unitId: 'u2',
    order: 4,
    titleEs: 'Café',
    emoji: '☕',
    xp: 30,
    isFree: false,
    wordKeys: ['Un café, por favor', 'Agua', 'La cuenta', 'Quiero…', 'Pan', '¿Cuánto cuesta?'] as const,
    phonetics: {} as Record<string, string>,
    exerciseIds: ['l4e1', 'l4e2', 'l4e3'] as const,
  },
  {
    id: 'l5',
    unitId: 'u2',
    order: 5,
    titleEs: 'Direcciones',
    emoji: '🗺️',
    xp: 30,
    isFree: false,
    wordKeys: ['izquierda', 'derecha', 'recto', 'aquí', 'allí', '¿Dónde está…?'] as const,
    phonetics: {} as Record<string, string>,
    exerciseIds: ['l5e1', 'l5e2', 'l5e3'] as const,
  },
  {
    id: 'l6',
    unitId: 'u3',
    order: 6,
    titleEs: '¿Cómo estás?',
    emoji: '😊',
    xp: 30,
    isFree: false,
    wordKeys: ['Bien', 'Mal', 'Regular', 'Cansado/a', 'Feliz', '¿Qué tal?'] as const,
    phonetics: {} as Record<string, string>,
    exerciseIds: ['l6e1', 'l6e2'] as const,
  },
] as const;

export function getUnits(locale: LocaleCode): Unit[] {
  const t = catalogs[locale] ?? catalogs.en;
  return BASE_UNITS.map((unit) => ({
    id: unit.id,
    order: unit.order,
    titleEs: unit.titleEs,
    title: t.units[unit.id]?.title ?? unit.titleEs,
    description: t.units[unit.id]?.description ?? '',
    color: unit.color,
  }));
}

export function getLessons(locale: LocaleCode): Lesson[] {
  const t = catalogs[locale] ?? catalogs.en;
  const en = catalogs.en;

  return BASE_LESSONS.map((base) => {
    const localized = t.lessons[base.id] ?? en.lessons[base.id];
    const fallback = en.lessons[base.id];

    return {
      id: base.id,
      unitId: base.unitId,
      order: base.order,
      titleEs: base.titleEs,
      title: localized.title,
      description: localized.description,
      emoji: base.emoji,
      xp: base.xp,
      isFree: base.isFree,
      words: base.wordKeys.map((es) => ({
        es,
        meaning: localized.words[es] ?? fallback.words[es] ?? es,
        phonetic: base.phonetics[es],
      })),
      exercises: base.exerciseIds.map((id) => {
        const ex = localized.exercises[id] ?? fallback.exercises[id];
        return {
          id,
          type: 'multiple_choice' as const,
          prompt: ex.prompt,
          options: ex.options,
          answer: ex.answer,
        };
      }),
    };
  });
}

export function getLesson(id: string, locale: LocaleCode) {
  return getLessons(locale).find((l) => l.id === id);
}

export function getUnitLessons(unitId: string, locale: LocaleCode) {
  return getLessons(locale)
    .filter((l) => l.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getNextLesson(currentId: string, locale: LocaleCode) {
  const sorted = getLessons(locale).sort((a, b) => a.order - b.order);
  const idx = sorted.findIndex((l) => l.id === currentId);
  return idx >= 0 ? sorted[idx + 1] : undefined;
}

/** Stable list of lesson ids for progress syncing. */
export const LESSON_IDS = BASE_LESSONS.map((l) => l.id);
