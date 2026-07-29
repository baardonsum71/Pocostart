import type { TranslationTree } from '../types';
import en from './en';

/** UI in pl; lesson content falls back to English until fully localized. */
const pl: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Wstecz",
    "close": "Zamknij",
    "continue": "Kontynuuj",
    "next": "Dalej",
    "loading": "Ładowanie…",
    "tryAgain": "Spróbuj ponownie",
    "free": "Za darmo",
    "pro": "Pro",
    "cancel": "Anuluj"
  },
  "welcome": {
    "tagline": "Hiszpański dla początkujących — szybko, jasno i przyjemnie.",
    "getStarted": "Zaczynamy",
    "haveAccount": "Mam już konto",
    "tryGuest": "Wypróbuj bez konta",
    "legal": "W lokalnej cenie miesięcznej lub rocznej. Anuluj kiedy chcesz w App Store.",
    "chooseLanguage": "Język aplikacji"
  },
  "auth": {
    "signInTitle": "Witaj ponownie",
    "signInSubtitle": "Zaloguj się, by dalej uczyć się hiszpańskiego.",
    "signUpTitle": "Zacznij z poco start",
    "signUpSubtitle": "Załóż konto w mniej niż minutę. Dwie lekcje za darmo.",
    "name": "Imię",
    "email": "E-mail",
    "password": "Hasło",
    "createAccount": "Utwórz konto",
    "signIn": "Zaloguj się",
    "continueApple": "Kontynuuj z Apple",
    "switchToSignUp": "Nowy? Utwórz konto",
    "switchToSignIn": "Masz konto? Zaloguj się",
    "passwordShort": "Co najmniej 6 znaków.",
    "signUpFailed": "Nie udało się utworzyć konta",
    "signInFailed": "Logowanie nie powiodło się",
    "appleFailed": "Logowanie Apple nie powiodło się",
    "languageLabel": "Chcę aplikację po"
  },
  "tabs": {
    "home": "Start",
    "learn": "Nauka",
    "practice": "Ćwiczenia",
    "speak": "Mów",
    "profile": "Profil"
  },
  "speak": {
    "title": "Wymowa",
    "subtitle": "Dotknij mikrofonu i powiedz hiszpańską frazę.",
    "listen": "Posłuchaj",
    "tapToSpeak": "Mic i mów",
    "stop": "Stop",
    "listening": "Słucham… mów wyraźnie",
    "youSaid": "Powiedziałeś",
    "perfect": "Idealnie!",
    "great": "Świetna wymowa",
    "close": "Prawie — spróbuj ponownie",
    "tryAgain": "Nie do końca — posłuchaj i spróbuj",
    "nextWord": "Następne słowo",
    "unavailable": "Rozpoznawanie mowy wymaga natywnego builda (nie Expo Go).",
    "permissionDenied": "Wymagane uprawnienie do mikrofonu/mowy.",
    "errorGeneric": "Nie usłyszano. Spróbuj w cichszym miejscu.",
    "practiceInLesson": "Ćwicz wymowę"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Następna lekcja",
    "continueCta": "Kontynuuj",
    "streak": "Seria",
    "xp": "XP",
    "done": "Gotowe",
    "progress": "Twój postęp",
    "courseCompletion": "Ukończenie kursu",
    "unlockTitle": "Odblokuj cały kurs",
    "unlockBody": "Miesięcznie lub rocznie — stworzone dla początkujących."
  },
  "learn": {
    "title": "Program",
    "subtitle": "A1 dla początkujących — słownictwo krok po kroku.",
    "unit": "Jednostka {n}"
  },
  "practice": {
    "title": "Szybkie ćwiczenia",
    "score": "Punkty: {score} · {lesson}",
    "emptyTitle": "Brak ćwiczeń",
    "emptyBody": "Najpierw ukończ darmową lekcję.",
    "goLearn": "Przejdź do programu",
    "next": "Dalej"
  },
  "profile": {
    "title": "Profil",
    "student": "Uczeń",
    "noEmail": "Brak e-maila",
    "free": "Za darmo",
    "subscription": "Subskrypcja",
    "hasPro": "Masz poco start Pro.",
    "noPro": "Miesięcznie lub rocznie przez App Store / Google Play z RevenueCat.",
    "seePlans": "Zobacz plany Pro",
    "restore": "Przywróć zakupy",
    "restored": "Przywrócono",
    "restoredBody": "Pro jest znowu aktywne.",
    "noPurchases": "Brak zakupów",
    "noPurchasesBody": "Brak wcześniejszych zakupów dla tego konta.",
    "signOut": "Wyloguj",
    "signOutConfirm": "Na pewno?",
    "language": "Język aplikacji",
    "days": "dni",
    "deleteAccount": "Usuń konto",
    "deleteAccountConfirm": "To trwale usuwa konto i postępy. Anuluj subskrypcję osobno w App Store.",
    "deleteAccountForever": "Usuń na zawsze",
    "deleteAccountFinal": "Tego nie można cofnąć. Usunąć konto poco start teraz?",
    "deleteGuestBody": "Tryb gościa — brak konta w chmurze do usunięcia.",
    "deletedTitle": "Konto usunięte",
    "deletedBody": "Konto i zsynchronizowane postępy zostały usunięte.",
    "deleteFailed": "Nie udało się usunąć konta"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Ucz się hiszpańskiego szybko — bez rozpraszaczy.",
    "features": [
      "Pełny program A1",
      "Ćwiczenia bez limitu",
      "Postęp zsynchronizowany",
      "Nowe lekcje"
    ],
    "yearly": "Rocznie",
    "monthly": "Miesięcznie",
    "flexible": "Elastycznie",
    "continuePrice": "Kontynuuj · {price}",
    "restore": "Przywróć zakupy",
    "legal": "Płatność obciąża konto Apple/Google. Subskrypcja odnawia się automatycznie, chyba że anulujesz na 24 h wcześniej. Zarządzaj w App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "Twoja subskrypcja jest aktywna.",
    "continue": "Kontynuuj",
    "missingProduct": "Brak produktu",
    "missingProductBody": "Nie znaleziono oferty w RevenueCat.",
    "devMode": "Tryb dev",
    "devModeBody": "RevenueCat nie jest skonfigurowany.",
    "savings": "Najlepsza cena"
  },
  "lesson": {
    "notFound": "Nie znaleziono lekcji",
    "proTitle": "Lekcja Pro",
    "proBody": "Odblokuj subskrypcją, by kontynuować.",
    "seePlans": "Zobacz plany",
    "startExercises": "Zacznij ćwiczenia",
    "question": "Pytanie {n} / {total}",
    "finish": "Zakończ",
    "nextLesson": "Następna lekcja",
    "unlockNext": "Odblokuj następną",
    "backHome": "Wróć do startu",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} poprawnych · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Pierwsze kroki",
      "description": "Powitania, liczby i Ty"
    },
    "u2": {
      "title": "W mieście",
      "description": "Jedzenie, miejsca i codzienność"
    },
    "u3": {
      "title": "Rozmowa",
      "description": "Pytania, czas i preferencje"
    }
  }
}),
  lessons: en.lessons,
};

export default pl;
