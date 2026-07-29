import type { TranslationTree } from '../types';
import en from './en';

/** UI in pt; lesson content falls back to English until fully localized. */
const pt: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Voltar",
    "close": "Fechar",
    "continue": "Continuar",
    "next": "Seguinte",
    "loading": "A carregar…",
    "tryAgain": "Tentar de novo",
    "free": "Grátis",
    "pro": "Pro",
    "cancel": "Cancelar"
  },
  "welcome": {
    "tagline": "Espanhol para iniciantes — rápido, claro e divertido.",
    "getStarted": "Começar",
    "haveAccount": "Já tenho conta",
    "tryGuest": "Experimentar sem conta",
    "legal": "Ao preço local mensal ou anual. Cancele quando quiser na App Store.",
    "chooseLanguage": "Idioma da app"
  },
  "auth": {
    "signInTitle": "Bem-vindo de volta",
    "signInSubtitle": "Inicie sessão para continuar a aprender espanhol.",
    "signUpTitle": "Comece com poco start",
    "signUpSubtitle": "Crie uma conta em menos de um minuto. Duas lições grátis.",
    "name": "Nome",
    "email": "E-mail",
    "password": "Palavra-passe",
    "createAccount": "Criar conta",
    "signIn": "Iniciar sessão",
    "continueApple": "Continuar com Apple",
    "switchToSignUp": "Novo aqui? Criar conta",
    "switchToSignIn": "Já tem conta? Iniciar sessão",
    "passwordShort": "Use pelo menos 6 caracteres.",
    "signUpFailed": "Não foi possível criar a conta",
    "signInFailed": "Falha no início de sessão",
    "appleFailed": "Falha no Apple",
    "languageLabel": "Quero a app em"
  },
  "tabs": {
    "home": "Início",
    "learn": "Aprender",
    "practice": "Praticar",
    "speak": "Falar",
    "profile": "Perfil"
  },
  "speak": {
    "title": "Pronúncia",
    "subtitle": "Toque no microfone e diga a frase em espanhol.",
    "listen": "Ouvir",
    "tapToSpeak": "Toque no mic e fale",
    "stop": "Parar",
    "listening": "A ouvir… fale claramente",
    "youSaid": "Disse",
    "perfect": "Perfeito!",
    "great": "Ótima pronúncia",
    "close": "Quase — tente de novo",
    "tryAgain": "Ainda não — ouça e tente outra vez",
    "nextWord": "Próxima palavra",
    "unavailable": "O reconhecimento de voz precisa de build nativa (não Expo Go).",
    "permissionDenied": "É preciso permissão de microfone/voz.",
    "errorGeneric": "Não ouvi bem. Tente num sítio mais calmo.",
    "practiceInLesson": "Praticar a pronúncia"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Próxima lição",
    "continueCta": "Continuar",
    "streak": "Sequência",
    "xp": "XP",
    "done": "Feito",
    "progress": "O seu progresso",
    "courseCompletion": "Conclusão do curso",
    "unlockTitle": "Desbloqueie o curso completo",
    "unlockBody": "Mensal ou anual — feito para iniciantes."
  },
  "learn": {
    "title": "Plano de estudos",
    "subtitle": "A1 para iniciantes — vocabulário passo a passo.",
    "unit": "Unidade {n}"
  },
  "practice": {
    "title": "Prática rápida",
    "score": "Pontos: {score} · {lesson}",
    "emptyTitle": "Ainda sem exercícios",
    "emptyBody": "Termine primeiro uma lição grátis.",
    "goLearn": "Ir ao plano",
    "next": "Seguinte"
  },
  "profile": {
    "title": "Perfil",
    "student": "Aluno",
    "noEmail": "Sem e-mail",
    "free": "Grátis",
    "subscription": "Subscrição",
    "hasPro": "Tem poco start Pro.",
    "noPro": "Mensal ou anual via App Store / Google Play com RevenueCat.",
    "seePlans": "Ver planos Pro",
    "restore": "Restaurar compras",
    "restored": "Restaurado",
    "restoredBody": "Pro está ativo novamente.",
    "noPurchases": "Sem compras",
    "noPurchasesBody": "Sem compras anteriores nesta conta.",
    "signOut": "Terminar sessão",
    "signOutConfirm": "Tem a certeza?",
    "language": "Idioma da app",
    "days": "dias",
    "deleteAccount": "Eliminar conta",
    "deleteAccountConfirm": "Isto elimina permanentemente a conta e o progresso. Cancele a subscrição na App Store.",
    "deleteAccountForever": "Eliminar para sempre",
    "deleteAccountFinal": "Não pode ser anulado. Eliminar a conta poco start agora?",
    "deleteGuestBody": "Modo convidado — não há conta na nuvem para eliminar.",
    "deletedTitle": "Conta eliminada",
    "deletedBody": "Conta e progresso sincronizado removidos.",
    "deleteFailed": "Não foi possível eliminar a conta"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Aprenda espanhol depressa — sem distrações.",
    "features": [
      "Currículo A1 completo",
      "Prática ilimitada",
      "Progresso sincronizado",
      "Novas lições"
    ],
    "yearly": "Anual",
    "monthly": "Mensal",
    "flexible": "Flexível",
    "continuePrice": "Continuar · {price}",
    "restore": "Restaurar compras",
    "legal": "O pagamento é cobrado na conta Apple/Google. A subscrição renova-se automaticamente salvo cancelamento 24 h antes. Faça a gestão na App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "A sua subscrição está ativa.",
    "continue": "Continuar",
    "missingProduct": "Produto em falta",
    "missingProductBody": "Oferta não encontrada no RevenueCat.",
    "devMode": "Modo dev",
    "devModeBody": "RevenueCat não está configurado.",
    "savings": "Melhor preço"
  },
  "lesson": {
    "notFound": "Lição não encontrada",
    "proTitle": "Lição Pro",
    "proBody": "Desbloqueie com subscrição para continuar.",
    "seePlans": "Ver planos",
    "startExercises": "Começar exercícios",
    "question": "Pergunta {n} / {total}",
    "finish": "Concluir",
    "nextLesson": "Próxima lição",
    "unlockNext": "Desbloquear seguinte",
    "backHome": "Voltar ao início",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} corretas · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Primeiros passos",
      "description": "Saudações, números e você"
    },
    "u2": {
      "title": "Na cidade",
      "description": "Comida, lugares e dia a dia"
    },
    "u3": {
      "title": "Conversação",
      "description": "Perguntas, tempo e preferências"
    }
  }
}),
  lessons: en.lessons,
};

export default pt;
