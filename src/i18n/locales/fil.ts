import type { TranslationTree } from '../types';
import en from './en';

/** UI in fil; lesson content falls back to English until fully localized. */
const fil: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Bumalik",
    "close": "Isara",
    "continue": "Magpatuloy",
    "next": "Susunod",
    "loading": "Naglo-load…",
    "tryAgain": "Subukan ulit",
    "free": "Libre",
    "pro": "Pro",
    "cancel": "Kanselahin"
  },
  "welcome": {
    "tagline": "Spanish para sa mga baguhan — mabilis, malinaw, at masaya.",
    "getStarted": "Magsimula",
    "haveAccount": "May account na ako",
    "tryGuest": "Subukan nang walang account",
    "legal": "Sa lokal na buwanan o taunang presyo. Kanselahin anytime sa App Store.",
    "chooseLanguage": "Wika ng app"
  },
  "auth": {
    "signInTitle": "Maligayang pagbabalik",
    "signInSubtitle": "Mag-sign in para magpatuloy sa Spanish.",
    "signUpTitle": "Magsimula sa poco start",
    "signUpSubtitle": "Gumawa ng account sa loob ng isang minuto. Dalawang aralin ang libre.",
    "name": "Pangalan",
    "email": "Email",
    "password": "Password",
    "createAccount": "Gumawa ng account",
    "signIn": "Mag-sign in",
    "continueApple": "Magpatuloy sa Apple",
    "switchToSignUp": "Bago dito? Gumawa ng account",
    "switchToSignIn": "May account? Mag-sign in",
    "passwordShort": "Gumamit ng kahit 6 na character.",
    "signUpFailed": "Hindi magawa ang account",
    "signInFailed": "Hindi nakapag-sign in",
    "appleFailed": "Hindi gumana ang Apple sign-in",
    "languageLabel": "Gusto ko ang app sa",
    "checkEmailTitle": "Tingnan ang email mo",
    "checkEmailBody": "Nagpadala kami ng confirmation link. Buksan ito sa device na ito para matapos ang paggawa ng account, tapos mag-sign in.",
    "confirmingEmail": "Kino-confirm ang email…",
    "confirmSuccess": "Na-confirm ang email. Welcome!",
    "confirmFailed": "Hindi ma-confirm ang email. Buksan ulit ang link o humingi ng bago."
  },
  "tabs": {
    "home": "Home",
    "learn": "Matuto",
    "practice": "Mag-practice",
    "speak": "Magsalita",
    "profile": "Profile"
  },
  "speak": {
    "title": "Pagbigkas",
    "subtitle": "I-tap ang mic at sabihin ang Spanish na parirala.",
    "listen": "Makinig",
    "tapToSpeak": "I-tap ang mic at magsalita",
    "stop": "Stop",
    "listening": "Nakikinig… magsalita nang malinaw",
    "youSaid": "Sinabi mo",
    "perfect": "Perpekto!",
    "great": "Magandang bigkas",
    "close": "Malapit — subukan ulit",
    "tryAgain": "Hindi pa — makinig at subukan ulit",
    "nextWord": "Susunod na salita",
    "unavailable": "Kailangan ng native build ang speech recognition (hindi Expo Go).",
    "permissionDenied": "Kailangan ang microphone / speech permission.",
    "errorGeneric": "Hindi marinig. Subukan sa mas tahimik na lugar.",
    "practiceInLesson": "I-practice ang pagbigkas"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Susunod na aralin",
    "continueCta": "Magpatuloy",
    "streak": "Streak",
    "xp": "XP",
    "done": "Tapos",
    "progress": "Ang progreso mo",
    "courseCompletion": "Pagkumpleto ng kurso",
    "unlockTitle": "I-unlock ang buong kurso",
    "unlockBody": "Buwanan o taunan — para sa mga baguhan."
  },
  "learn": {
    "title": "Kurikulum",
    "subtitle": "A1 para sa baguhan — bumuo ng bokabularyo nang paunti-unti.",
    "unit": "Yunit {n}"
  },
  "practice": {
    "title": "Mabilisang practice",
    "score": "Score: {score} · {lesson}",
    "emptyTitle": "Wala pang ehersisyo",
    "emptyBody": "Tapusin muna ang libreng aralin.",
    "goLearn": "Pumunta sa kurikulum",
    "next": "Susunod"
  },
  "profile": {
    "title": "Profile",
    "student": "Mag-aaral",
    "noEmail": "Walang email",
    "free": "Libre",
    "subscription": "Subscription",
    "hasPro": "May poco start Pro ka.",
    "noPro": "Buwanan o taunan via App Store / Google Play gamit ang RevenueCat.",
    "seePlans": "Tingnan ang Pro plans",
    "restore": "I-restore ang mga binili",
    "restored": "Na-restore",
    "restoredBody": "Aktibo ulit ang Pro.",
    "noPurchases": "Walang nahanap na binili",
    "noPurchasesBody": "Walang dating binili para sa account na ito.",
    "signOut": "Mag-sign out",
    "signOutConfirm": "Sigurado ka?",
    "language": "Wika ng app",
    "days": "araw",
    "deleteAccount": "I-delete ang account",
    "deleteAccountConfirm": "Permanenteng tinatanggal nito ang account at progreso sa aming servers. Kanselahin ang subscription nang hiwalay sa App Store.",
    "deleteAccountForever": "I-delete nang tuluyan",
    "deleteAccountFinal": "Hindi na ito mababawi. I-delete ang poco start account ngayon?",
    "deleteGuestBody": "Guest mode ka — walang cloud account na ide-delete. Mag-sign up muna kung gumawa ka.",
    "deletedTitle": "Na-delete ang account",
    "deletedBody": "Tinanggal na ang account at naka-sync na progreso.",
    "deleteFailed": "Hindi ma-delete ang account"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Matuto ng Spanish nang mabilis — walang distraksyon.",
    "features": [
      "Buong A1 kurikulum",
      "Walang limitasyong practice",
      "Naka-sync ang progreso",
      "Mga bagong aralin sa daan"
    ],
    "yearly": "Taunan",
    "monthly": "Buwanan",
    "flexible": "Flexible",
    "continuePrice": "Magpatuloy · {price}",
    "restore": "I-restore ang mga binili",
    "legal": "Sisingilin ang Apple/Google account mo. Awtomatikong magre-renew ang subscription maliban kung kakanselahin nang hindi bababa sa 24 oras bago. I-manage sa App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "Aktibo ang subscription mo.",
    "continue": "Magpatuloy",
    "missingProduct": "Walang produkto",
    "missingProductBody": "Hindi nahanap ang offering sa RevenueCat.",
    "purchaseFailed": "Hindi naging successful ang pagbili",
    "restoreNone": "Walang nahanap na binili",
    "restoreNoneBody": "Walang dating binili para sa Apple/Google account na ito.",
    "devMode": "Dev mode",
    "devModeBody": "Hindi pa naka-configure ang RevenueCat.",
    "savings": "Pinakamahusay na halaga"
  },
  "lesson": {
    "notFound": "Hindi nahanap ang aralin",
    "proTitle": "Pro aralin",
    "proBody": "I-unlock gamit ang subscription para magpatuloy.",
    "seePlans": "Tingnan ang plans",
    "startExercises": "Simulan ang ehersisyo",
    "question": "Tanong {n} / {total}",
    "finish": "Tapusin",
    "nextLesson": "Susunod na aralin",
    "unlockNext": "I-unlock ang susunod",
    "backHome": "Bumalik sa home",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} tama · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Unang hakbang",
      "description": "Pagbati, numero, at ikaw"
    },
    "u2": {
      "title": "Sa lungsod",
      "description": "Pagkain, lugar, at pang-araw-araw"
    },
    "u3": {
      "title": "Usapan",
      "description": "Tanong, oras, at preferensiya"
    }
  }
}),
  lessons: en.lessons,
};

export default fil;
