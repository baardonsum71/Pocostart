/** Normalize Spanish for forgiving pronunciation comparison. */
export function normalizeSpanish(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip accents for scoring
    .toLowerCase()
    .replace(/[¿¡?!"'.,;:…—–-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Keep accents for display / strict match bonus. */
export function normalizeSpanishKeepAccents(input: string): string {
  return input
    .toLowerCase()
    .replace(/[¿¡?!"'.,;:…—–-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}

export type PronunciationGrade = 'perfect' | 'great' | 'close' | 'try_again';

export type PronunciationResult = {
  score: number; // 0–100
  grade: PronunciationGrade;
  heard: string;
  target: string;
};

export function scorePronunciation(target: string, heard: string): PronunciationResult {
  const targetNorm = normalizeSpanish(target);
  const heardNorm = normalizeSpanish(heard);

  if (!heardNorm) {
    return { score: 0, grade: 'try_again', heard, target };
  }

  if (normalizeSpanishKeepAccents(target) === normalizeSpanishKeepAccents(heard)) {
    return { score: 100, grade: 'perfect', heard, target };
  }

  if (targetNorm === heardNorm) {
    return { score: 96, grade: 'perfect', heard, target };
  }

  const distance = levenshtein(targetNorm, heardNorm);
  const maxLen = Math.max(targetNorm.length, heardNorm.length, 1);
  const similarity = 1 - distance / maxLen;

  // Containment bonus for short phrases (“hola” inside longer ASR)
  const contains =
    targetNorm.length >= 2 &&
    (heardNorm.includes(targetNorm) || targetNorm.includes(heardNorm));
  const score = Math.round(Math.min(100, (contains ? Math.max(similarity, 0.82) : similarity) * 100));

  let grade: PronunciationGrade = 'try_again';
  if (score >= 92) grade = 'perfect';
  else if (score >= 78) grade = 'great';
  else if (score >= 58) grade = 'close';

  return { score, grade, heard, target };
}
