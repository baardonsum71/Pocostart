import type { TranslationTree } from '../types';
import en from './en';

/** UI in es; lesson content falls back to English until fully localized. */
const es: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Atrás",
    "close": "Cerrar",
    "continue": "Continuar",
    "next": "Siguiente",
    "loading": "Cargando…",
    "tryAgain": "Inténtalo de nuevo",
    "free": "Gratis",
    "pro": "Pro",
    "cancel": "Cancelar"
  },
  "welcome": {
    "tagline": "Español para principiantes — rápido, claro y divertido.",
    "getStarted": "Empezar",
    "haveAccount": "Ya tengo cuenta",
    "tryGuest": "Probar sin cuenta",
    "legal": "Desde precio local al mes o al año. Cancela cuando quieras en App Store.",
    "chooseLanguage": "Idioma de la app"
  },
  "auth": {
    "signInTitle": "Bienvenido de nuevo",
    "signInSubtitle": "Inicia sesión para seguir aprendiendo español.",
    "signUpTitle": "Empieza con poco start",
    "signUpSubtitle": "Crea una cuenta en menos de un minuto. Dos lecciones son gratis.",
    "name": "Nombre",
    "email": "Correo",
    "password": "Contraseña",
    "createAccount": "Crear cuenta",
    "signIn": "Iniciar sesión",
    "continueApple": "Continuar con Apple",
    "switchToSignUp": "¿Nuevo? Crea una cuenta",
    "switchToSignIn": "¿Ya tienes cuenta? Inicia sesión",
    "passwordShort": "Usa al menos 6 caracteres.",
    "signUpFailed": "No se pudo crear la cuenta",
    "signInFailed": "Error al iniciar sesión",
    "appleFailed": "Falló el inicio con Apple",
    "languageLabel": "Quiero la app en"
  },
  "tabs": {
    "home": "Inicio",
    "learn": "Aprender",
    "practice": "Practicar",
    "speak": "Hablar",
    "profile": "Perfil"
  },
  "speak": {
    "title": "Pronunciación",
    "subtitle": "Toca el micrófono y di la frase en español.",
    "listen": "Escuchar",
    "tapToSpeak": "Toca el mic y habla",
    "stop": "Parar",
    "listening": "Escuchando… habla claro",
    "youSaid": "Dijiste",
    "perfect": "¡Perfecto!",
    "great": "Muy buena pronunciación",
    "close": "Casi — inténtalo de nuevo",
    "tryAgain": "No del todo — escucha y reintenta",
    "nextWord": "Siguiente palabra",
    "unavailable": "El reconocimiento de voz requiere una build nativa (no Expo Go).",
    "permissionDenied": "Se necesita permiso de micrófono/voz.",
    "errorGeneric": "No se escuchó bien. Prueba en un lugar más silencioso.",
    "practiceInLesson": "Practica decirlo"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Siguiente lección",
    "continueCta": "Continuar",
    "streak": "Racha",
    "xp": "XP",
    "done": "Hecho",
    "progress": "Tu progreso",
    "courseCompletion": "Progreso del curso",
    "unlockTitle": "Desbloquea el curso completo",
    "unlockBody": "Mensual o anual — pensado para principiantes."
  },
  "learn": {
    "title": "Temario",
    "subtitle": "A1 para principiantes — vocabulario paso a paso.",
    "unit": "Unidad {n}"
  },
  "practice": {
    "title": "Práctica rápida",
    "score": "Puntos: {score} · {lesson}",
    "emptyTitle": "Aún no hay ejercicios",
    "emptyBody": "Termina primero una lección gratis.",
    "goLearn": "Ir al temario",
    "next": "Siguiente"
  },
  "profile": {
    "title": "Perfil",
    "student": "Alumno",
    "noEmail": "Sin correo",
    "free": "Gratis",
    "subscription": "Suscripción",
    "hasPro": "Tienes poco start Pro.",
    "noPro": "Mensual o anual vía App Store / Google Play con RevenueCat.",
    "seePlans": "Ver planes Pro",
    "restore": "Restaurar compras",
    "restored": "Restaurado",
    "restoredBody": "Pro está activo de nuevo.",
    "noPurchases": "No hay compras",
    "noPurchasesBody": "No hay compras anteriores en esta cuenta.",
    "signOut": "Cerrar sesión",
    "signOutConfirm": "¿Seguro?",
    "language": "Idioma de la app",
    "days": "días",
    "deleteAccount": "Eliminar cuenta",
    "deleteAccountConfirm": "Esto elimina permanentemente tu cuenta y progreso de nuestros servidores. Cancela la suscripción por separado en App Store.",
    "deleteAccountForever": "Eliminar para siempre",
    "deleteAccountFinal": "No se puede deshacer. ¿Eliminar tu cuenta de poco start ahora?",
    "deleteGuestBody": "Estás en modo invitado — no hay cuenta en la nube que eliminar.",
    "deletedTitle": "Cuenta eliminada",
    "deletedBody": "Tu cuenta y progreso sincronizado se han eliminado.",
    "deleteFailed": "No se pudo eliminar la cuenta"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Aprende español rápido — sin distracciones.",
    "features": [
      "Temario A1 completo",
      "Práctica ilimitada",
      "Progreso sincronizado",
      "Nuevas lecciones"
    ],
    "yearly": "Anual",
    "monthly": "Mensual",
    "flexible": "Flexible",
    "continuePrice": "Continuar · {price}",
    "restore": "Restaurar compras",
    "legal": "El pago se carga a tu cuenta de Apple/Google. La suscripción se renueva automáticamente salvo cancelación 24 h antes. Gestiona en App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "Tu suscripción está activa.",
    "continue": "Continuar",
    "missingProduct": "Falta el producto",
    "missingProductBody": "No se encontró la oferta en RevenueCat.",
    "devMode": "Modo dev",
    "devModeBody": "RevenueCat no está configurado. Añade claves en .env.",
    "savings": "Mejor precio"
  },
  "lesson": {
    "notFound": "Lección no encontrada",
    "proTitle": "Lección Pro",
    "proBody": "Desbloquea con suscripción para continuar.",
    "seePlans": "Ver planes",
    "startExercises": "Empezar ejercicios",
    "question": "Pregunta {n} / {total}",
    "finish": "Terminar",
    "nextLesson": "Siguiente lección",
    "unlockNext": "Desbloquear siguiente",
    "backHome": "Volver al inicio",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} correctas · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Primeros pasos",
      "description": "Saludos, números y tú"
    },
    "u2": {
      "title": "En la ciudad",
      "description": "Comida, lugares y día a día"
    },
    "u3": {
      "title": "Conversación",
      "description": "Preguntas, tiempo y preferencias"
    }
  }
}),
  lessons: en.lessons,
};

export default es;
