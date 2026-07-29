import type { TranslationTree } from '../types';
import en from './en';

/** UI in it; lesson content falls back to English until fully localized. */
const it: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Indietro",
    "close": "Chiudi",
    "continue": "Continua",
    "next": "Avanti",
    "loading": "Caricamento…",
    "tryAgain": "Riprova",
    "free": "Gratis",
    "pro": "Pro",
    "cancel": "Annulla"
  },
  "welcome": {
    "tagline": "Spagnolo per principianti — veloce, chiaro e divertente.",
    "getStarted": "Inizia",
    "haveAccount": "Ho già un account",
    "tryGuest": "Prova senza account",
    "legal": "Al prezzo locale mensile o annuale. Annulla quando vuoi dall’App Store.",
    "chooseLanguage": "Lingua dell’app"
  },
  "auth": {
    "signInTitle": "Bentornato",
    "signInSubtitle": "Accedi per continuare a imparare lo spagnolo.",
    "signUpTitle": "Inizia con poco start",
    "signUpSubtitle": "Crea un account in meno di un minuto. Due lezioni gratis.",
    "name": "Nome",
    "email": "Email",
    "password": "Password",
    "createAccount": "Crea account",
    "signIn": "Accedi",
    "continueApple": "Continua con Apple",
    "switchToSignUp": "Nuovo? Crea un account",
    "switchToSignIn": "Hai già un account? Accedi",
    "passwordShort": "Almeno 6 caratteri.",
    "signUpFailed": "Impossibile creare l’account",
    "signInFailed": "Accesso non riuscito",
    "appleFailed": "Accesso Apple non riuscito",
    "languageLabel": "Voglio l’app in"
  },
  "tabs": {
    "home": "Home",
    "learn": "Impara",
    "practice": "Pratica",
    "speak": "Parla",
    "profile": "Profilo"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Prossima lezione",
    "continueCta": "Continua",
    "streak": "Serie",
    "xp": "XP",
    "done": "Fatto",
    "progress": "I tuoi progressi",
    "courseCompletion": "Completamento corso",
    "unlockTitle": "Sblocca tutto il corso",
    "unlockBody": "Mensile o annuale — pensato per principianti."
  },
  "learn": {
    "title": "Programma",
    "subtitle": "A1 per principianti — vocabolario passo dopo passo.",
    "unit": "Unità {n}"
  },
  "practice": {
    "title": "Pratica veloce",
    "score": "Punteggio: {score} · {lesson}",
    "emptyTitle": "Nessun esercizio ancora",
    "emptyBody": "Completa prima una lezione gratis.",
    "goLearn": "Vai al programma",
    "next": "Avanti"
  },
  "profile": {
    "title": "Profilo",
    "student": "Studente",
    "noEmail": "Nessuna email",
    "free": "Gratis",
    "subscription": "Abbonamento",
    "hasPro": "Hai poco start Pro.",
    "noPro": "Mensile o annuale via App Store / Google Play con RevenueCat.",
    "seePlans": "Vedi piani Pro",
    "restore": "Ripristina acquisti",
    "restored": "Ripristinato",
    "restoredBody": "Pro è di nuovo attivo.",
    "noPurchases": "Nessun acquisto",
    "noPurchasesBody": "Nessun acquisto precedente per questo account.",
    "signOut": "Esci",
    "signOutConfirm": "Sei sicuro?",
    "language": "Lingua dell’app",
    "days": "giorni",
    "deleteAccount": "Elimina account",
    "deleteAccountConfirm": "Questo elimina definitivamente account e progressi. Annulla l’abbonamento separatamente nell’App Store.",
    "deleteAccountForever": "Elimina per sempre",
    "deleteAccountFinal": "Irreversibile. Eliminare l’account poco start ora?",
    "deleteGuestBody": "Modalità ospite — nessun account cloud da eliminare.",
    "deletedTitle": "Account eliminato",
    "deletedBody": "Account e progressi sincronizzati rimossi.",
    "deleteFailed": "Impossibile eliminare l’account"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Impara lo spagnolo in fretta — senza distrazioni.",
    "features": [
      "Curriculum A1 completo",
      "Pratica illimitata",
      "Progressi sincronizzati",
      "Nuove lezioni"
    ],
    "yearly": "Annuale",
    "monthly": "Mensile",
    "flexible": "Flessibile",
    "continuePrice": "Continua · {price}",
    "restore": "Ripristina acquisti",
    "legal": "Il pagamento viene addebitato sull’account Apple/Google. L’abbonamento si rinnova automaticamente salvo disdetta 24 ore prima. Gestisci in App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "Il tuo abbonamento è attivo.",
    "continue": "Continua",
    "missingProduct": "Prodotto mancante",
    "missingProductBody": "Offerta non trovata in RevenueCat.",
    "devMode": "Modalità dev",
    "devModeBody": "RevenueCat non è configurato.",
    "savings": "Miglior prezzo"
  },
  "lesson": {
    "notFound": "Lezione non trovata",
    "proTitle": "Lezione Pro",
    "proBody": "Sblocca con abbonamento per continuare.",
    "seePlans": "Vedi piani",
    "startExercises": "Inizia esercizi",
    "question": "Domanda {n} / {total}",
    "finish": "Finisci",
    "nextLesson": "Lezione successiva",
    "unlockNext": "Sblocca successiva",
    "backHome": "Torna alla home",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} corrette · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Primi passi",
      "description": "Saluti, numeri e te stesso"
    },
    "u2": {
      "title": "In città",
      "description": "Cibo, luoghi e quotidianità"
    },
    "u3": {
      "title": "Conversazione",
      "description": "Domande, tempo e preferenze"
    }
  }
}),
  lessons: en.lessons,
};

export default it;
