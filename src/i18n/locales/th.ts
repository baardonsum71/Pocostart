import type { TranslationTree } from '../types';
import en from './en';

/** UI in th; lesson content falls back to English until fully localized. */
const th: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "กลับ",
    "close": "ปิด",
    "continue": "ดำเนินการต่อ",
    "next": "ถัดไป",
    "loading": "กำลังโหลด…",
    "tryAgain": "ลองอีกครั้ง",
    "free": "ฟรี",
    "pro": "Pro",
    "cancel": "ยกเลิก"
  },
  "welcome": {
    "tagline": "สเปนสำหรับผู้เริ่มต้น — เร็ว ชัด และสนุก",
    "getStarted": "เริ่มต้น",
    "haveAccount": "ฉันมีบัญชีแล้ว",
    "tryGuest": "ลองโดยไม่มีบัญชี",
    "legal": "ราคาท้องถิ่นรายเดือนหรือรายปี ยกเลิกได้ทุกเมื่อใน App Store",
    "chooseLanguage": "ภาษาของแอป"
  },
  "auth": {
    "signInTitle": "ยินดีต้อนรับกลับ",
    "signInSubtitle": "ลงชื่อเข้าใช้เพื่อเรียนสเปนต่อ",
    "signUpTitle": "เริ่มกับ poco start",
    "signUpSubtitle": "สร้างบัญชีในไม่ถึงนาที สองบทเรียนฟรี",
    "name": "ชื่อ",
    "email": "อีเมล",
    "password": "รหัสผ่าน",
    "createAccount": "สร้างบัญชี",
    "signIn": "เข้าสู่ระบบ",
    "continueApple": "ดำเนินการต่อด้วย Apple",
    "switchToSignUp": "ใหม่ที่นี่? สร้างบัญชี",
    "switchToSignIn": "มีบัญชีแล้ว? เข้าสู่ระบบ",
    "passwordShort": "ใช้อย่างน้อย 6 ตัวอักษร",
    "signUpFailed": "สร้างบัญชีไม่ได้",
    "signInFailed": "เข้าสู่ระบบล้มเหลว",
    "appleFailed": "เข้าสู่ระบบด้วย Apple ล้มเหลว",
    "languageLabel": "ฉันต้องการแอปเป็นภาษา",
    "checkEmailTitle": "ตรวจสอบอีเมลของคุณ",
    "checkEmailBody": "เราส่งลิงก์ยืนยันแล้ว เปิดบนอุปกรณ์นี้เพื่อทำการสมัครให้เสร็จ แล้วเข้าสู่ระบบ",
    "confirmingEmail": "กำลังยืนยันอีเมล…",
    "confirmSuccess": "ยืนยันอีเมลแล้ว ยินดีต้อนรับ!",
    "confirmFailed": "ยืนยันอีเมลไม่ได้ เปิดลิงก์อีกครั้งหรือขอใหม่"
  },
  "tabs": {
    "home": "หน้าแรก",
    "learn": "เรียน",
    "practice": "ฝึก",
    "speak": "พูด",
    "profile": "โปรไฟล์"
  },
  "speak": {
    "title": "การออกเสียง",
    "subtitle": "แตะไมค์แล้วพูดวลีภาษาสเปน",
    "listen": "ฟัง",
    "tapToSpeak": "แตะไมค์แล้วพูด",
    "stop": "หยุด",
    "listening": "กำลังฟัง… พูดให้ชัด",
    "youSaid": "คุณพูด",
    "perfect": "สมบูรณ์แบบ!",
    "great": "ออกเสียงดีมาก",
    "close": "เกือบแล้ว — ลองอีกครั้ง",
    "tryAgain": "ยังไม่ถูก — ฟังแล้วลองใหม่",
    "nextWord": "คำถัดไป",
    "unavailable": "การรู้จำเสียงต้องใช้ native build (ไม่ใช่ Expo Go)",
    "permissionDenied": "ต้องอนุญาตไมโครโฟน/เสียงพูด",
    "errorGeneric": "ไม่ได้ยิน ลองในที่เงียบกว่า",
    "practiceInLesson": "ฝึกพูด"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "บทเรียนถัดไป",
    "continueCta": "ดำเนินการต่อ",
    "streak": "สตรีค",
    "xp": "XP",
    "done": "เสร็จ",
    "progress": "ความคืบหน้าของคุณ",
    "courseCompletion": "ความคืบหน้าของคอร์ส",
    "unlockTitle": "ปลดล็อกคอร์สทั้งหมด",
    "unlockBody": "รายเดือนหรือรายปี — สำหรับผู้เริ่มต้น"
  },
  "learn": {
    "title": "หลักสูตร",
    "subtitle": "A1 สำหรับผู้เริ่มต้น — สร้างคำศัพท์ทีละขั้น",
    "unit": "หน่วยที่ {n}"
  },
  "practice": {
    "title": "ฝึกเร็ว",
    "score": "คะแนน: {score} · {lesson}",
    "emptyTitle": "ยังไม่มีแบบฝึก",
    "emptyBody": "จบบทเรียนฟรีก่อน",
    "goLearn": "ไปที่หลักสูตร",
    "next": "ถัดไป"
  },
  "profile": {
    "title": "โปรไฟล์",
    "student": "ผู้เรียน",
    "noEmail": "ไม่มีอีเมล",
    "free": "ฟรี",
    "subscription": "การสมัครสมาชิก",
    "hasPro": "คุณมี poco start Pro",
    "noPro": "รายเดือนหรือรายปีผ่าน App Store / Google Play ด้วย RevenueCat",
    "seePlans": "ดูแพ็กเกจ Pro",
    "restore": "กู้คืนการซื้อ",
    "restored": "กู้คืนแล้ว",
    "restoredBody": "Pro ใช้งานได้อีกครั้ง",
    "noPurchases": "ไม่พบการซื้อ",
    "noPurchasesBody": "ไม่มีการซื้อก่อนหน้าสำหรับบัญชีนี้",
    "signOut": "ออกจากระบบ",
    "signOutConfirm": "แน่ใจหรือไม่?",
    "language": "ภาษาของแอป",
    "days": "วัน",
    "deleteAccount": "ลบบัญชี",
    "deleteAccountConfirm": "การดำเนินการนี้จะลบบัญชีและความคืบหน้าออกจากเซิร์ฟเวอร์ถาวร ต้องยกเลิกการสมัครแยกใน App Store",
    "deleteAccountForever": "ลบถาวร",
    "deleteAccountFinal": "ย้อนกลับไม่ได้ ลบบัญชี poco start ตอนนี้?",
    "deleteGuestBody": "คุณอยู่ในโหมดแขก — ไม่มีบัญชีคลาวด์ให้ลบ สมัครก่อนหากคุณสร้างไว้",
    "deletedTitle": "ลบบัญชีแล้ว",
    "deletedBody": "บัญชีและความคืบหน้าที่ซิงก์ถูกลบแล้ว",
    "deleteFailed": "ลบบัญชีไม่ได้"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "เรียนสเปนเร็ว — ไม่มีสิ่งรบกวน",
    "features": [
      "หลักสูตร A1 ครบ",
      "ฝึกไม่จำกัด",
      "ความคืบหน้าซิงก์",
      "บทเรียนใหม่ตลอดทาง"
    ],
    "yearly": "รายปี",
    "monthly": "รายเดือน",
    "flexible": "ยืดหยุ่น",
    "continuePrice": "ดำเนินการต่อ · {price}",
    "restore": "กู้คืนการซื้อ",
    "legal": "การชำระเงินหักจากบัญชี Apple/Google การสมัครต่ออายุอัตโนมัติเว้นแต่ยกเลิกอย่างน้อย 24 ชั่วโมงก่อน จัดการใน App Store / Play Store",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "การสมัครของคุณใช้งานอยู่",
    "continue": "ดำเนินการต่อ",
    "missingProduct": "ไม่พบสินค้า",
    "missingProductBody": "ไม่พบข้อเสนอใน RevenueCat",
    "purchaseFailed": "ซื้อไม่สำเร็จ",
    "restoreNone": "ไม่พบการซื้อ",
    "restoreNoneBody": "ไม่มีการซื้อก่อนหน้าสำหรับบัญชี Apple/Google นี้",
    "devMode": "โหมด dev",
    "devModeBody": "ยังไม่ได้ตั้งค่า RevenueCat",
    "savings": "คุ้มที่สุด"
  },
  "lesson": {
    "notFound": "ไม่พบบทเรียน",
    "proTitle": "บทเรียน Pro",
    "proBody": "ปลดล็อกด้วยการสมัครเพื่อไปต่อ",
    "seePlans": "ดูแพ็กเกจ",
    "startExercises": "เริ่มแบบฝึก",
    "question": "คำถาม {n} / {total}",
    "finish": "เสร็จสิ้น",
    "nextLesson": "บทเรียนถัดไป",
    "unlockNext": "ปลดล็อกถัดไป",
    "backHome": "กลับหน้าแรก",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} ถูก · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "ก้าวแรก",
      "description": "การทักทาย ตัวเลข และตัวคุณ"
    },
    "u2": {
      "title": "ในเมือง",
      "description": "อาหาร สถานที่ และชีวิตประจำวัน"
    },
    "u3": {
      "title": "บทสนทนา",
      "description": "คำถาม เวลา และความชอบ"
    }
  }
}),
  lessons: en.lessons,
};

export default th;
