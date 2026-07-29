import type { TranslationTree } from '../types';
import en from './en';

/** UI in fr; lesson content falls back to English until fully localized. */
const fr: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Retour",
    "close": "Fermer",
    "continue": "Continuer",
    "next": "Suivant",
    "loading": "Chargement…",
    "tryAgain": "Réessayer",
    "free": "Gratuit",
    "pro": "Pro",
    "cancel": "Annuler"
  },
  "welcome": {
    "tagline": "L’espagnol pour débutants — rapide, clair et fun.",
    "getStarted": "Commencer",
    "haveAccount": "J’ai déjà un compte",
    "tryGuest": "Essayer sans compte",
    "legal": "Au prix local mensuel ou annuel. Annulez quand vous voulez dans l’App Store.",
    "chooseLanguage": "Langue de l’app"
  },
  "auth": {
    "signInTitle": "Bon retour",
    "signInSubtitle": "Connectez-vous pour continuer l’espagnol.",
    "signUpTitle": "Commencez avec poco start",
    "signUpSubtitle": "Créez un compte en moins d’une minute. Deux leçons gratuites.",
    "name": "Nom",
    "email": "E-mail",
    "password": "Mot de passe",
    "createAccount": "Créer un compte",
    "signIn": "Se connecter",
    "continueApple": "Continuer avec Apple",
    "switchToSignUp": "Nouveau ? Créez un compte",
    "switchToSignIn": "Déjà un compte ? Connectez-vous",
    "passwordShort": "Au moins 6 caractères.",
    "signUpFailed": "Impossible de créer le compte",
    "signInFailed": "Connexion échouée",
    "appleFailed": "Connexion Apple échouée",
    "languageLabel": "Je veux l’app en"
  },
  "tabs": {
    "home": "Accueil",
    "learn": "Apprendre",
    "practice": "Pratiquer",
    "speak": "Parler",
    "profile": "Profil"
  },
  "speak": {
    "title": "Prononciation",
    "subtitle": "Appuyez sur le micro et dites la phrase en espagnol.",
    "listen": "Écouter",
    "tapToSpeak": "Micro puis parlez",
    "stop": "Stop",
    "listening": "Écoute… parlez clairement",
    "youSaid": "Vous avez dit",
    "perfect": "Parfait !",
    "great": "Très bonne prononciation",
    "close": "Presque — réessayez",
    "tryAgain": "Pas tout à fait — écoutez et réessayez",
    "nextWord": "Mot suivant",
    "unavailable": "La reconnaissance vocale nécessite un build natif (pas Expo Go).",
    "permissionDenied": "Permission micro/voix requise.",
    "errorGeneric": "Pas entendu. Réessayez dans un endroit plus calme.",
    "practiceInLesson": "Pratiquer la prononciation"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Prochaine leçon",
    "continueCta": "Continuer",
    "streak": "Série",
    "xp": "XP",
    "done": "Fait",
    "progress": "Votre progression",
    "courseCompletion": "Avancement du cours",
    "unlockTitle": "Débloquez tout le cours",
    "unlockBody": "Mensuel ou annuel — pensé pour débutants."
  },
  "learn": {
    "title": "Programme",
    "subtitle": "A1 pour débutants — vocabulaire pas à pas.",
    "unit": "Unité {n}"
  },
  "practice": {
    "title": "Pratique rapide",
    "score": "Score : {score} · {lesson}",
    "emptyTitle": "Pas encore d’exercices",
    "emptyBody": "Terminez d’abord une leçon gratuite.",
    "goLearn": "Voir le programme",
    "next": "Suivant"
  },
  "profile": {
    "title": "Profil",
    "student": "Apprenant",
    "noEmail": "Pas d’e-mail",
    "free": "Gratuit",
    "subscription": "Abonnement",
    "hasPro": "Vous avez poco start Pro.",
    "noPro": "Mensuel ou annuel via App Store / Google Play avec RevenueCat.",
    "seePlans": "Voir les offres Pro",
    "restore": "Restaurer les achats",
    "restored": "Restauré",
    "restoredBody": "Pro est de nouveau actif.",
    "noPurchases": "Aucun achat",
    "noPurchasesBody": "Aucun achat précédent pour ce compte.",
    "signOut": "Se déconnecter",
    "signOutConfirm": "Êtes-vous sûr ?",
    "language": "Langue de l’app",
    "days": "jours",
    "deleteAccount": "Supprimer le compte",
    "deleteAccountConfirm": "Cela supprime définitivement votre compte et vos progrès. Annulez l’abonnement séparément dans l’App Store.",
    "deleteAccountForever": "Supprimer définitivement",
    "deleteAccountFinal": "Irréversible. Supprimer le compte poco start maintenant ?",
    "deleteGuestBody": "Mode invité — aucun compte cloud à supprimer.",
    "deletedTitle": "Compte supprimé",
    "deletedBody": "Compte et progrès synchronisés supprimés.",
    "deleteFailed": "Impossible de supprimer le compte"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Apprenez l’espagnol vite — sans distractions.",
    "features": [
      "Programme A1 complet",
      "Pratique illimitée",
      "Progression synchronisée",
      "Nouvelles leçons"
    ],
    "yearly": "Annuel",
    "monthly": "Mensuel",
    "flexible": "Flexible",
    "continuePrice": "Continuer · {price}",
    "restore": "Restaurer les achats",
    "legal": "Le paiement est débité sur votre compte Apple/Google. L’abonnement se renouvelle sauf annulation 24 h avant. Gérez dans l’App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "Votre abonnement est actif.",
    "continue": "Continuer",
    "missingProduct": "Produit manquant",
    "missingProductBody": "Offre introuvable dans RevenueCat.",
    "devMode": "Mode dev",
    "devModeBody": "RevenueCat n’est pas configuré.",
    "savings": "Meilleur prix"
  },
  "lesson": {
    "notFound": "Leçon introuvable",
    "proTitle": "Leçon Pro",
    "proBody": "Débloquez avec un abonnement pour continuer.",
    "seePlans": "Voir les offres",
    "startExercises": "Commencer les exercices",
    "question": "Question {n} / {total}",
    "finish": "Terminer",
    "nextLesson": "Leçon suivante",
    "unlockNext": "Débloquer la suivante",
    "backHome": "Retour à l’accueil",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} correctes · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Premiers pas",
      "description": "Salutations, chiffres et soi"
    },
    "u2": {
      "title": "En ville",
      "description": "Nourriture, lieux et quotidien"
    },
    "u3": {
      "title": "Conversation",
      "description": "Questions, temps et préférences"
    }
  }
}),
  lessons: en.lessons,
};

export default fr;
