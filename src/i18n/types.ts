export type LocaleCode =
  | 'en'
  | 'no'
  | 'es'
  | 'de'
  | 'fr'
  | 'pt'
  | 'it'
  | 'nl'
  | 'sv'
  | 'da'
  | 'pl';

export type TranslationTree = {
  common: {
    back: string;
    close: string;
    continue: string;
    next: string;
    loading: string;
    tryAgain: string;
    free: string;
    pro: string;
    cancel: string;
  };
  welcome: {
    tagline: string;
    getStarted: string;
    haveAccount: string;
    tryGuest: string;
    legal: string;
    chooseLanguage: string;
  };
  auth: {
    signInTitle: string;
    signInSubtitle: string;
    signUpTitle: string;
    signUpSubtitle: string;
    name: string;
    email: string;
    password: string;
    createAccount: string;
    signIn: string;
    continueApple: string;
    switchToSignUp: string;
    switchToSignIn: string;
    passwordShort: string;
    signUpFailed: string;
    signInFailed: string;
    appleFailed: string;
    languageLabel: string;
  };
  tabs: {
    home: string;
    learn: string;
    practice: string;
    speak: string;
    profile: string;
  };
  speak: {
    title: string;
    subtitle: string;
    listen: string;
    tapToSpeak: string;
    stop: string;
    listening: string;
    youSaid: string;
    perfect: string;
    great: string;
    close: string;
    tryAgain: string;
    nextWord: string;
    unavailable: string;
    permissionDenied: string;
    errorGeneric: string;
    practiceInLesson: string;
  };
  home: {
    greeting: string;
    greetingNamed: string;
    nextLesson: string;
    continueCta: string;
    streak: string;
    xp: string;
    done: string;
    progress: string;
    courseCompletion: string;
    unlockTitle: string;
    unlockBody: string;
  };
  learn: {
    title: string;
    subtitle: string;
    unit: string;
  };
  practice: {
    title: string;
    score: string;
    emptyTitle: string;
    emptyBody: string;
    goLearn: string;
    next: string;
  };
  profile: {
    title: string;
    student: string;
    noEmail: string;
    free: string;
    subscription: string;
    hasPro: string;
    noPro: string;
    seePlans: string;
    restore: string;
    restored: string;
    restoredBody: string;
    noPurchases: string;
    noPurchasesBody: string;
    signOut: string;
    signOutConfirm: string;
    language: string;
    days: string;
    deleteAccount: string;
    deleteAccountConfirm: string;
    deleteAccountForever: string;
    deleteAccountFinal: string;
    deleteGuestBody: string;
    deletedTitle: string;
    deletedBody: string;
    deleteFailed: string;
  };
  paywall: {
    title: string;
    subtitle: string;
    features: string[];
    yearly: string;
    monthly: string;
    flexible: string;
    continuePrice: string;
    restore: string;
    legal: string;
    welcomePro: string;
    welcomeProBody: string;
    continue: string;
    missingProduct: string;
    missingProductBody: string;
    devMode: string;
    devModeBody: string;
    savings: string;
  };
  lesson: {
    notFound: string;
    proTitle: string;
    proBody: string;
    seePlans: string;
    startExercises: string;
    question: string;
    finish: string;
    nextLesson: string;
    unlockNext: string;
    backHome: string;
    great: string;
    correctXp: string;
  };
  units: Record<string, { title: string; description: string }>;
  lessons: Record<
    string,
    {
      title: string;
      description: string;
      words: Record<string, string>;
      exercises: Record<string, { prompt: string; options?: string[]; answer: string }>;
    }
  >;
};

export type LocaleOption = {
  code: LocaleCode;
  nativeName: string;
  englishName: string;
  flag: string;
};
