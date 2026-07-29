import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { LESSON_IDS } from '@/content/lessons';
import { supabase } from '@/lib/supabase';

type ProgressState = {
  completedLessonIds: string[];
  xp: number;
  streak: number;
  lastStudyDate: string | null;
  markLessonComplete: (lessonId: string, earnedXp: number) => Promise<void>;
  syncFromCloud: (userId: string) => Promise<void>;
  isLessonComplete: (lessonId: string) => boolean;
  completedCount: () => number;
  resetLocal: () => void;
};

const memoryStorage = {
  getItem: async (name: string) => memory.get(name) ?? null,
  setItem: async (name: string, value: string) => {
    memory.set(name, value);
  },
  removeItem: async (name: string) => {
    memory.delete(name);
  },
};
const memory = new Map<string, string>();

const secureStorage = {
  getItem: async (name: string) => {
    if (Platform.OS === 'web') return memoryStorage.getItem(name);
    return SecureStore.getItemAsync(name);
  },
  setItem: async (name: string, value: string) => {
    if (Platform.OS === 'web') return memoryStorage.setItem(name, value);
    await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name: string) => {
    if (Platform.OS === 'web') return memoryStorage.removeItem(name);
    await SecureStore.deleteItemAsync(name);
  },
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessonIds: [],
      xp: 0,
      streak: 0,
      lastStudyDate: null,

      isLessonComplete: (lessonId) => get().completedLessonIds.includes(lessonId),

      completedCount: () => get().completedLessonIds.length,

      resetLocal: () =>
        set({ completedLessonIds: [], xp: 0, streak: 0, lastStudyDate: null }),

      markLessonComplete: async (lessonId, earnedXp) => {
        const state = get();
        const already = state.completedLessonIds.includes(lessonId);
        const today = todayKey();
        let streak = state.streak;

        if (state.lastStudyDate === today) {
          // same day
        } else if (state.lastStudyDate === yesterdayKey()) {
          streak += 1;
        } else {
          streak = 1;
        }

        const completedLessonIds = already
          ? state.completedLessonIds
          : [...state.completedLessonIds, lessonId];
        const xp = already ? state.xp : state.xp + earnedXp;

        set({ completedLessonIds, xp, streak, lastStudyDate: today });

        if (supabase) {
          const {
            data: { user },
          } = await supabase.auth.getUser();
          if (user) {
            await supabase.from('profiles').upsert({
              id: user.id,
              xp,
              streak,
              last_study_date: today,
              updated_at: new Date().toISOString(),
            });
            await supabase.from('lesson_progress').upsert(
              {
                user_id: user.id,
                lesson_id: lessonId,
                completed: true,
                completed_at: new Date().toISOString(),
              },
              { onConflict: 'user_id,lesson_id' },
            );
          }
        }
      },

      syncFromCloud: async (userId) => {
        if (!supabase) return;
        const [{ data: profile }, { data: progress }] = await Promise.all([
          supabase.from('profiles').select('xp, streak, last_study_date').eq('id', userId).maybeSingle(),
          supabase.from('lesson_progress').select('lesson_id').eq('user_id', userId).eq('completed', true),
        ]);

        const completedLessonIds = (progress ?? [])
          .map((p) => p.lesson_id as string)
          .filter((id) => (LESSON_IDS as readonly string[]).includes(id));

        set({
          completedLessonIds:
            completedLessonIds.length > 0 ? completedLessonIds : get().completedLessonIds,
          xp: profile?.xp ?? get().xp,
          streak: profile?.streak ?? get().streak,
          lastStudyDate: profile?.last_study_date ?? get().lastStudyDate,
        });
      },
    }),
    {
      name: 'pocostart-progress',
      storage: createJSONStorage(() => secureStorage),
      partialize: (s) => ({
        completedLessonIds: s.completedLessonIds,
        xp: s.xp,
        streak: s.streak,
        lastStudyDate: s.lastStudyDate,
      }),
    },
  ),
);
