import type { TranslationTree } from '../types';
import en from './en';

/** UI in da; lesson content falls back to English until fully localized. */
const da: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Tilbage",
    "close": "Luk",
    "continue": "Fortsæt",
    "next": "Næste",
    "loading": "Indlæser…",
    "tryAgain": "Prøv igen",
    "free": "Gratis",
    "pro": "Pro",
    "cancel": "Annuller"
  },
  "welcome": {
    "tagline": "Spansk for begyndere — hurtigt, klart og sjovt.",
    "getStarted": "Kom i gang",
    "haveAccount": "Jeg har allerede en konto",
    "tryGuest": "Prøv uden konto",
    "legal": "Til lokal måneds- eller årspris. Opsig når som helst via App Store.",
    "chooseLanguage": "Appsprog"
  },
  "auth": {
    "signInTitle": "Velkommen tilbage",
    "signInSubtitle": "Log ind for at fortsætte med spansk.",
    "signUpTitle": "Start med poco start",
    "signUpSubtitle": "Opret konto på under et minut. To lektioner er gratis.",
    "name": "Navn",
    "email": "E-mail",
    "password": "Adgangskode",
    "createAccount": "Opret konto",
    "signIn": "Log ind",
    "continueApple": "Fortsæt med Apple",
    "switchToSignUp": "Ny her? Opret konto",
    "switchToSignIn": "Har du konto? Log ind",
    "passwordShort": "Mindst 6 tegn.",
    "signUpFailed": "Kunne ikke oprette konto",
    "signInFailed": "Login mislykkedes",
    "appleFailed": "Apple-login mislykkedes",
    "languageLabel": "Jeg vil have appen på"
  },
  "tabs": {
    "home": "Hjem",
    "learn": "Lær",
    "practice": "Øv",
    "speak": "Tal",
    "profile": "Profil"
  },
  "speak": {
    "title": "Udtale",
    "subtitle": "Tryk på mikrofonen og sig den spanske sætning.",
    "listen": "Lyt",
    "tapToSpeak": "Tryk mic & tal",
    "stop": "Stop",
    "listening": "Lytter… tal tydeligt",
    "youSaid": "Du sagde",
    "perfect": "Perfekt!",
    "great": "God udtale",
    "close": "Næsten — prøv igen",
    "tryAgain": "Ikke helt — lyt og prøv igen",
    "nextWord": "Næste ord",
    "unavailable": "Talegenkendelse kræver native build (ikke Expo Go).",
    "permissionDenied": "Mikrofon-/taletilladelse kræves.",
    "errorGeneric": "Hørte det ikke. Prøv et roligere sted.",
    "practiceInLesson": "Øv udtalen"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Næste lektion",
    "continueCta": "Fortsæt",
    "streak": "Streak",
    "xp": "XP",
    "done": "Færdig",
    "progress": "Din fremgang",
    "courseCompletion": "Kursusfremskridt",
    "unlockTitle": "Lås hele kurset op",
    "unlockBody": "Månedligt eller årligt — lavet til begyndere."
  },
  "learn": {
    "title": "Læreplan",
    "subtitle": "A1 for begyndere — ordforråd trin for trin.",
    "unit": "Enhed {n}"
  },
  "practice": {
    "title": "Hurtig øvelse",
    "score": "Point: {score} · {lesson}",
    "emptyTitle": "Ingen øvelser endnu",
    "emptyBody": "Fuldfør først en gratis lektion.",
    "goLearn": "Gå til læreplan",
    "next": "Næste"
  },
  "profile": {
    "title": "Profil",
    "student": "Elev",
    "noEmail": "Ingen e-mail",
    "free": "Gratis",
    "subscription": "Abonnement",
    "hasPro": "Du har poco start Pro.",
    "noPro": "Månedligt eller årligt via App Store / Google Play med RevenueCat.",
    "seePlans": "Se Pro-planer",
    "restore": "Gendan køb",
    "restored": "Gendannet",
    "restoredBody": "Pro er aktiv igen.",
    "noPurchases": "Ingen køb",
    "noPurchasesBody": "Ingen tidligere køb for denne konto.",
    "signOut": "Log ud",
    "signOutConfirm": "Er du sikker?",
    "language": "Appsprog",
    "days": "dage",
    "deleteAccount": "Slet konto",
    "deleteAccountConfirm": "Dette sletter konto og fremskridt permanent. Opsig abonnement separat i App Store.",
    "deleteAccountForever": "Slet for godt",
    "deleteAccountFinal": "Dette kan ikke fortrydes. Slet poco start-kontoen nu?",
    "deleteGuestBody": "Gæstetilstand — ingen cloudkonto at slette.",
    "deletedTitle": "Konto slettet",
    "deletedBody": "Konto og synkroniseret fremskridt er fjernet.",
    "deleteFailed": "Kunne ikke slette konto"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Lær spansk hurtigt — uden distraktioner.",
    "features": [
      "Hele A1-læreplanen",
      "Ubegrænset øvelse",
      "Fremgang synkroniseret",
      "Nye lektioner"
    ],
    "yearly": "Årligt",
    "monthly": "Månedligt",
    "flexible": "Fleksibelt",
    "continuePrice": "Fortsæt · {price}",
    "restore": "Gendan køb",
    "legal": "Betaling trækkes fra din Apple-/Google-konto. Abonnement fornyes automatisk, medmindre det opsiges senest 24 timer før. Administrer i App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "Dit abonnement er aktivt.",
    "continue": "Fortsæt",
    "missingProduct": "Produkt mangler",
    "missingProductBody": "Tilbud ikke fundet i RevenueCat.",
    "devMode": "Dev-tilstand",
    "devModeBody": "RevenueCat er ikke konfigureret.",
    "savings": "Bedste pris"
  },
  "lesson": {
    "notFound": "Lektion ikke fundet",
    "proTitle": "Pro-lektion",
    "proBody": "Lås op med abonnement for at fortsætte.",
    "seePlans": "Se planer",
    "startExercises": "Start øvelser",
    "question": "Spørgsmål {n} / {total}",
    "finish": "Afslut",
    "nextLesson": "Næste lektion",
    "unlockNext": "Lås næste op",
    "backHome": "Tilbage til hjem",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} rigtige · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Første skridt",
      "description": "Hilsner, tal og dig selv"
    },
    "u2": {
      "title": "I byen",
      "description": "Mad, steder og hverdag"
    },
    "u3": {
      "title": "Samtale",
      "description": "Spørgsmål, tid og præferencer"
    }
  }
}),
  lessons: en.lessons,
};

export default da;
