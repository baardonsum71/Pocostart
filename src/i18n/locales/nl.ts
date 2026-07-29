import type { TranslationTree } from '../types';
import en from './en';

/** UI in nl; lesson content falls back to English until fully localized. */
const nl: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Terug",
    "close": "Sluiten",
    "continue": "Doorgaan",
    "next": "Volgende",
    "loading": "Laden…",
    "tryAgain": "Opnieuw proberen",
    "free": "Gratis",
    "pro": "Pro",
    "cancel": "Annuleren"
  },
  "welcome": {
    "tagline": "Spaans voor beginners — snel, duidelijk en leuk.",
    "getStarted": "Aan de slag",
    "haveAccount": "Ik heb al een account",
    "tryGuest": "Probeer zonder account",
    "legal": "Tegen lokale maand- of jaarpijs. Altijd opzegbaar via de App Store.",
    "chooseLanguage": "App-taal"
  },
  "auth": {
    "signInTitle": "Welkom terug",
    "signInSubtitle": "Log in om Spaans te blijven leren.",
    "signUpTitle": "Start met poco start",
    "signUpSubtitle": "Maak in minder dan een minuut een account. Twee lessen gratis.",
    "name": "Naam",
    "email": "E-mail",
    "password": "Wachtwoord",
    "createAccount": "Account maken",
    "signIn": "Inloggen",
    "continueApple": "Doorgaan met Apple",
    "switchToSignUp": "Nieuw hier? Account maken",
    "switchToSignIn": "Al een account? Inloggen",
    "passwordShort": "Minimaal 6 tekens.",
    "signUpFailed": "Account aanmaken mislukt",
    "signInFailed": "Inloggen mislukt",
    "appleFailed": "Apple-login mislukt",
    "languageLabel": "Ik wil de app in"
  },
  "tabs": {
    "home": "Home",
    "learn": "Leren",
    "practice": "Oefenen",
    "speak": "Spreken",
    "profile": "Profiel"
  },
  "speak": {
    "title": "Uitspraak",
    "subtitle": "Tik op de microfoon en zeg de Spaanse zin.",
    "listen": "Beluisteren",
    "tapToSpeak": "Tik mic & spreek",
    "stop": "Stop",
    "listening": "Luistert… spreek duidelijk",
    "youSaid": "Je zei",
    "perfect": "Perfect!",
    "great": "Goede uitspraak",
    "close": "Bijna — probeer opnieuw",
    "tryAgain": "Nog niet — luister en probeer weer",
    "nextWord": "Volgend woord",
    "unavailable": "Spraakherkenning vereist een native build (niet Expo Go).",
    "permissionDenied": "Microfoon-/spraaktoestemming nodig.",
    "errorGeneric": "Niet verstaan. Probeer op een stillere plek.",
    "practiceInLesson": "Oefen de uitspraak"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Volgende les",
    "continueCta": "Doorgaan",
    "streak": "Reeks",
    "xp": "XP",
    "done": "Klaar",
    "progress": "Jouw voortgang",
    "courseCompletion": "Cursusvoortgang",
    "unlockTitle": "Ontgrendel de hele cursus",
    "unlockBody": "Maandelijks of jaarlijks — gemaakt voor beginners."
  },
  "learn": {
    "title": "Leerplan",
    "subtitle": "A1 voor beginners — vocabulaire stap voor stap.",
    "unit": "Eenheid {n}"
  },
  "practice": {
    "title": "Snel oefenen",
    "score": "Score: {score} · {lesson}",
    "emptyTitle": "Nog geen oefeningen",
    "emptyBody": "Rond eerst een gratis les af.",
    "goLearn": "Naar leerplan",
    "next": "Volgende"
  },
  "profile": {
    "title": "Profiel",
    "student": "Leerling",
    "noEmail": "Geen e-mail",
    "free": "Gratis",
    "subscription": "Abonnement",
    "hasPro": "Je hebt poco start Pro.",
    "noPro": "Maandelijks of jaarlijks via App Store / Google Play met RevenueCat.",
    "seePlans": "Bekijk Pro-plannen",
    "restore": "Aankopen herstellen",
    "restored": "Hersteld",
    "restoredBody": "Pro is weer actief.",
    "noPurchases": "Geen aankopen",
    "noPurchasesBody": "Geen eerdere aankopen voor dit account.",
    "signOut": "Uitloggen",
    "signOutConfirm": "Weet je het zeker?",
    "language": "App-taal",
    "days": "dagen",
    "deleteAccount": "Account verwijderen",
    "deleteAccountConfirm": "Dit verwijdert je account en voortgang permanent. Zeg abonnement apart op in de App Store.",
    "deleteAccountForever": "Definitief verwijderen",
    "deleteAccountFinal": "Dit kan niet ongedaan worden gemaakt. Account nu verwijderen?",
    "deleteGuestBody": "Gastmodus — geen cloudaccount om te verwijderen.",
    "deletedTitle": "Account verwijderd",
    "deletedBody": "Account en gesynchroniseerde voortgang zijn verwijderd.",
    "deleteFailed": "Account kon niet worden verwijderd"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Leer Spaans snel — zonder afleiding.",
    "features": [
      "Volledig A1-leerplan",
      "Onbeperkt oefenen",
      "Voortgang gesynchroniseerd",
      "Nieuwe lessen"
    ],
    "yearly": "Jaarlijks",
    "monthly": "Maandelijks",
    "flexible": "Flexibel",
    "continuePrice": "Doorgaan · {price}",
    "restore": "Aankopen herstellen",
    "legal": "Betaling via Apple/Google. Abonnement verlengt automatisch tenzij 24 uur van tevoren opgezegd. Beheer in App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "Je abonnement is actief.",
    "continue": "Doorgaan",
    "missingProduct": "Product ontbreekt",
    "missingProductBody": "Aanbieding niet gevonden in RevenueCat.",
    "devMode": "Dev-modus",
    "devModeBody": "RevenueCat is niet geconfigureerd.",
    "savings": "Beste prijs"
  },
  "lesson": {
    "notFound": "Les niet gevonden",
    "proTitle": "Pro-les",
    "proBody": "Ontgrendel met abonnement om door te gaan.",
    "seePlans": "Bekijk plannen",
    "startExercises": "Start oefeningen",
    "question": "Vraag {n} / {total}",
    "finish": "Afronden",
    "nextLesson": "Volgende les",
    "unlockNext": "Volgende ontgrendelen",
    "backHome": "Terug naar home",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} goed · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Eerste stappen",
      "description": "Begroetingen, cijfers en jezelf"
    },
    "u2": {
      "title": "In de stad",
      "description": "Eten, plekken en dagelijks leven"
    },
    "u3": {
      "title": "Gesprek",
      "description": "Vragen, tijd en voorkeuren"
    }
  }
}),
  lessons: en.lessons,
};

export default nl;
