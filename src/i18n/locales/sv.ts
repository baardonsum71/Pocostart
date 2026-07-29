import type { TranslationTree } from '../types';
import en from './en';

/** UI in sv; lesson content falls back to English until fully localized. */
const sv: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Tillbaka",
    "close": "Stäng",
    "continue": "Fortsätt",
    "next": "Nästa",
    "loading": "Laddar…",
    "tryAgain": "Försök igen",
    "free": "Gratis",
    "pro": "Pro",
    "cancel": "Avbryt"
  },
  "welcome": {
    "tagline": "Spanska för nybörjare — snabbt, tydligt och kul.",
    "getStarted": "Kom igång",
    "haveAccount": "Jag har redan konto",
    "tryGuest": "Prova utan konto",
    "legal": "Till lokalt månads- eller årspris. Avsluta när som helst via App Store.",
    "chooseLanguage": "Appspråk"
  },
  "auth": {
    "signInTitle": "Välkommen tillbaka",
    "signInSubtitle": "Logga in för att fortsätta lära dig spanska.",
    "signUpTitle": "Börja med poco start",
    "signUpSubtitle": "Skapa konto på under en minut. Två lektioner är gratis.",
    "name": "Namn",
    "email": "E-post",
    "password": "Lösenord",
    "createAccount": "Skapa konto",
    "signIn": "Logga in",
    "continueApple": "Fortsätt med Apple",
    "switchToSignUp": "Ny här? Skapa konto",
    "switchToSignIn": "Har du konto? Logga in",
    "passwordShort": "Minst 6 tecken.",
    "signUpFailed": "Kunde inte skapa konto",
    "signInFailed": "Inloggning misslyckades",
    "appleFailed": "Apple-inloggning misslyckades",
    "languageLabel": "Jag vill ha appen på"
  },
  "tabs": {
    "home": "Hem",
    "learn": "Lär",
    "practice": "Öva",
    "speak": "Tala",
    "profile": "Profil"
  },
  "speak": {
    "title": "Uttal",
    "subtitle": "Tryck på mikrofonen och säg den spanska frasen.",
    "listen": "Lyssna",
    "tapToSpeak": "Tryck mic & tala",
    "stop": "Stopp",
    "listening": "Lyssnar… tala tydligt",
    "youSaid": "Du sa",
    "perfect": "Perfekt!",
    "great": "Bra uttal",
    "close": "Nästan — försök igen",
    "tryAgain": "Inte riktigt — lyssna och försök igen",
    "nextWord": "Nästa ord",
    "unavailable": "Taligenkänning kräver native build (inte Expo Go).",
    "permissionDenied": "Mikrofon-/taletillstånd krävs.",
    "errorGeneric": "Hörde inte. Försök på en tystare plats.",
    "practiceInLesson": "Öva uttalet"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Nästa lektion",
    "continueCta": "Fortsätt",
    "streak": "Streak",
    "xp": "XP",
    "done": "Klar",
    "progress": "Din progress",
    "courseCompletion": "Kurskomplettering",
    "unlockTitle": "Lås upp hela kursen",
    "unlockBody": "Månads- eller årspris — gjord för nybörjare."
  },
  "learn": {
    "title": "Läroplan",
    "subtitle": "A1 för nybörjare — bygg ordförråd steg för steg.",
    "unit": "Enhet {n}"
  },
  "practice": {
    "title": "Snabbövning",
    "score": "Poäng: {score} · {lesson}",
    "emptyTitle": "Inga övningar än",
    "emptyBody": "Slutför en gratis lektion först.",
    "goLearn": "Gå till läroplan",
    "next": "Nästa"
  },
  "profile": {
    "title": "Profil",
    "student": "Elev",
    "noEmail": "Ingen e-post",
    "free": "Gratis",
    "subscription": "Prenumeration",
    "hasPro": "Du har poco start Pro.",
    "noPro": "Månads- eller årsvis via App Store / Google Play med RevenueCat.",
    "seePlans": "Se Pro-planer",
    "restore": "Återställ köp",
    "restored": "Återställt",
    "restoredBody": "Pro är aktivt igen.",
    "noPurchases": "Inga köp",
    "noPurchasesBody": "Inga tidigare köp för det här kontot.",
    "signOut": "Logga ut",
    "signOutConfirm": "Är du säker?",
    "language": "Appspråk",
    "days": "dagar",
    "deleteAccount": "Radera konto",
    "deleteAccountConfirm": "Detta raderar kontot och framsteg permanent. Säg upp prenumerationen separat i App Store.",
    "deleteAccountForever": "Radera för alltid",
    "deleteAccountFinal": "Detta kan inte ångras. Radera poco start-kontot nu?",
    "deleteGuestBody": "Gästläge — det finns inget molnkonto att radera.",
    "deletedTitle": "Konto raderat",
    "deletedBody": "Konto och synkad progress har tagits bort.",
    "deleteFailed": "Kunde inte radera kontot"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Lär dig spanska snabbt — utan distraktioner.",
    "features": [
      "Hela A1-läroplanen",
      "Obegränsad övning",
      "Progress synkad",
      "Nya lektioner"
    ],
    "yearly": "Årlig",
    "monthly": "Månadsvis",
    "flexible": "Flexibelt",
    "continuePrice": "Fortsätt · {price}",
    "restore": "Återställ köp",
    "legal": "Betalning debiteras ditt Apple-/Google-konto. Prenumerationen förnyas automatiskt om den inte sägs upp senast 24 timmar innan. Hantera i App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "Din prenumeration är aktiv.",
    "continue": "Fortsätt",
    "missingProduct": "Produkt saknas",
    "missingProductBody": "Erbjudandet hittades inte i RevenueCat.",
    "devMode": "Dev-läge",
    "devModeBody": "RevenueCat är inte konfigurerat.",
    "savings": "Bästa pris"
  },
  "lesson": {
    "notFound": "Lektion hittades inte",
    "proTitle": "Pro-lektion",
    "proBody": "Lås upp med prenumeration för att fortsätta.",
    "seePlans": "Se planer",
    "startExercises": "Starta övningar",
    "question": "Fråga {n} / {total}",
    "finish": "Slutför",
    "nextLesson": "Nästa lektion",
    "unlockNext": "Lås upp nästa",
    "backHome": "Tillbaka till hem",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} rätt · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Första stegen",
      "description": "Hälsningar, siffror och dig själv"
    },
    "u2": {
      "title": "I staden",
      "description": "Mat, platser och vardag"
    },
    "u3": {
      "title": "Samtal",
      "description": "Frågor, tid och preferenser"
    }
  }
}),
  lessons: en.lessons,
};

export default sv;
