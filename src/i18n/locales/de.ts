import type { TranslationTree } from '../types';
import en from './en';

/** UI in de; lesson content falls back to English until fully localized. */
const de: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Zurück",
    "close": "Schließen",
    "continue": "Weiter",
    "next": "Weiter",
    "loading": "Lädt…",
    "tryAgain": "Erneut versuchen",
    "free": "Gratis",
    "pro": "Pro",
    "cancel": "Abbrechen"
  },
  "welcome": {
    "tagline": "Spanisch für Anfänger — schnell, klar und spaßig.",
    "getStarted": "Loslegen",
    "haveAccount": "Ich habe schon ein Konto",
    "tryGuest": "Ohne Konto testen",
    "legal": "Zum lokalen Monats- oder Jahrespreis. Jederzeit im App Store kündbar.",
    "chooseLanguage": "App-Sprache"
  },
  "auth": {
    "signInTitle": "Willkommen zurück",
    "signInSubtitle": "Melde dich an, um weiter Spanisch zu lernen.",
    "signUpTitle": "Starte mit poco start",
    "signUpSubtitle": "Konto in unter einer Minute. Zwei Lektionen gratis.",
    "name": "Name",
    "email": "E-Mail",
    "password": "Passwort",
    "createAccount": "Konto erstellen",
    "signIn": "Anmelden",
    "continueApple": "Mit Apple fortfahren",
    "switchToSignUp": "Neu hier? Konto erstellen",
    "switchToSignIn": "Schon ein Konto? Anmelden",
    "passwordShort": "Mindestens 6 Zeichen.",
    "signUpFailed": "Konto konnte nicht erstellt werden",
    "signInFailed": "Anmeldung fehlgeschlagen",
    "appleFailed": "Apple-Anmeldung fehlgeschlagen",
    "languageLabel": "Ich möchte die App auf"
  },
  "tabs": {
    "home": "Start",
    "learn": "Lernen",
    "practice": "Üben",
    "speak": "Sprechen",
    "profile": "Profil"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Nächste Lektion",
    "continueCta": "Weiter",
    "streak": "Serie",
    "xp": "XP",
    "done": "Fertig",
    "progress": "Dein Fortschritt",
    "courseCompletion": "Kursfortschritt",
    "unlockTitle": "Ganzen Kurs freischalten",
    "unlockBody": "Monatlich oder jährlich — für Anfänger gemacht."
  },
  "learn": {
    "title": "Lehrplan",
    "subtitle": "A1 für Anfänger — Wortschatz Schritt für Schritt.",
    "unit": "Einheit {n}"
  },
  "practice": {
    "title": "Schnelles Üben",
    "score": "Punkte: {score} · {lesson}",
    "emptyTitle": "Noch keine Übungen",
    "emptyBody": "Schließe zuerst eine gratis Lektion ab.",
    "goLearn": "Zum Lehrplan",
    "next": "Weiter"
  },
  "profile": {
    "title": "Profil",
    "student": "Lernende/r",
    "noEmail": "Keine E-Mail",
    "free": "Gratis",
    "subscription": "Abo",
    "hasPro": "Du hast poco start Pro.",
    "noPro": "Monatlich oder jährlich über App Store / Google Play mit RevenueCat.",
    "seePlans": "Pro-Pläne ansehen",
    "restore": "Käufe wiederherstellen",
    "restored": "Wiederhergestellt",
    "restoredBody": "Pro ist wieder aktiv.",
    "noPurchases": "Keine Käufe",
    "noPurchasesBody": "Keine früheren Käufe für dieses Konto.",
    "signOut": "Abmelden",
    "signOutConfirm": "Sicher?",
    "language": "App-Sprache",
    "days": "Tage",
    "deleteAccount": "Konto löschen",
    "deleteAccountConfirm": "Dadurch werden Konto und Fortschritt dauerhaft gelöscht. Abos separat im App Store kündigen.",
    "deleteAccountForever": "Endgültig löschen",
    "deleteAccountFinal": "Das kann nicht rückgängig gemacht werden. Konto jetzt löschen?",
    "deleteGuestBody": "Du bist im Gastmodus — es gibt kein Cloud-Konto zum Löschen.",
    "deletedTitle": "Konto gelöscht",
    "deletedBody": "Konto und synchronisierter Fortschritt wurden entfernt.",
    "deleteFailed": "Konto konnte nicht gelöscht werden"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Spanisch schnell lernen — ohne Ablenkung.",
    "features": [
      "Kompletter A1-Lehrplan",
      "Unbegrenztes Üben",
      "Fortschritt synchronisiert",
      "Neue Lektionen"
    ],
    "yearly": "Jährlich",
    "monthly": "Monatlich",
    "flexible": "Flexibel",
    "continuePrice": "Weiter · {price}",
    "restore": "Käufe wiederherstellen",
    "legal": "Zahlung erfolgt über Apple/Google. Abo verlängert sich automatisch, außer 24 Std. vorher gekündigt. Verwalten im App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "Dein Abo ist aktiv.",
    "continue": "Weiter",
    "missingProduct": "Produkt fehlt",
    "missingProductBody": "Angebot in RevenueCat nicht gefunden.",
    "devMode": "Dev-Modus",
    "devModeBody": "RevenueCat ist nicht konfiguriert.",
    "savings": "Bester Preis"
  },
  "lesson": {
    "notFound": "Lektion nicht gefunden",
    "proTitle": "Pro-Lektion",
    "proBody": "Mit Abo freischalten, um weiterzumachen.",
    "seePlans": "Pläne ansehen",
    "startExercises": "Übungen starten",
    "question": "Frage {n} / {total}",
    "finish": "Fertig",
    "nextLesson": "Nächste Lektion",
    "unlockNext": "Nächste freischalten",
    "backHome": "Zur Startseite",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} richtig · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Erste Schritte",
      "description": "Begrüßung, Zahlen und du selbst"
    },
    "u2": {
      "title": "In der Stadt",
      "description": "Essen, Orte und Alltag"
    },
    "u3": {
      "title": "Gespräch",
      "description": "Fragen, Zeit und Vorlieben"
    }
  }
}),
  lessons: en.lessons,
};

export default de;
