import type { TranslationTree } from '../types';
import en from './en';

/** UI in id; lesson content falls back to English until fully localized. */
const id: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Kembali",
    "close": "Tutup",
    "continue": "Lanjut",
    "next": "Berikutnya",
    "loading": "Memuat…",
    "tryAgain": "Coba lagi",
    "free": "Gratis",
    "pro": "Pro",
    "cancel": "Batal"
  },
  "welcome": {
    "tagline": "Spanyol untuk pemula — cepat, jelas, dan menyenangkan.",
    "getStarted": "Mulai",
    "haveAccount": "Saya sudah punya akun",
    "tryGuest": "Coba tanpa akun",
    "legal": "Dengan harga lokal per bulan atau tahun. Batalkan kapan saja di App Store.",
    "chooseLanguage": "Bahasa aplikasi"
  },
  "auth": {
    "signInTitle": "Selamat datang kembali",
    "signInSubtitle": "Masuk untuk terus belajar bahasa Spanyol.",
    "signUpTitle": "Mulai dengan poco start",
    "signUpSubtitle": "Buat akun dalam waktu kurang dari satu menit. Dua pelajaran gratis.",
    "name": "Nama",
    "email": "Email",
    "password": "Kata sandi",
    "createAccount": "Buat akun",
    "signIn": "Masuk",
    "continueApple": "Lanjutkan dengan Apple",
    "switchToSignUp": "Baru di sini? Buat akun",
    "switchToSignIn": "Sudah punya akun? Masuk",
    "passwordShort": "Gunakan minimal 6 karakter.",
    "signUpFailed": "Tidak dapat membuat akun",
    "signInFailed": "Gagal masuk",
    "appleFailed": "Masuk dengan Apple gagal",
    "languageLabel": "Saya ingin aplikasi dalam",
    "checkEmailTitle": "Periksa email Anda",
    "checkEmailBody": "Kami mengirim tautan konfirmasi. Buka di perangkat ini untuk menyelesaikan pendaftaran, lalu masuk.",
    "confirmingEmail": "Mengonfirmasi email…",
    "confirmSuccess": "Email dikonfirmasi. Selamat datang!",
    "confirmFailed": "Tidak dapat mengonfirmasi email. Buka tautan lagi atau minta yang baru."
  },
  "tabs": {
    "home": "Beranda",
    "learn": "Belajar",
    "practice": "Latihan",
    "speak": "Bicara",
    "profile": "Profil"
  },
  "speak": {
    "title": "Pelafalan",
    "subtitle": "Ketuk mikrofon dan ucapkan frasa bahasa Spanyol.",
    "listen": "Dengar",
    "tapToSpeak": "Ketuk mic & bicara",
    "stop": "Stop",
    "listening": "Mendengarkan… bicara dengan jelas",
    "youSaid": "Anda bilang",
    "perfect": "Sempurna!",
    "great": "Pelafalan bagus",
    "close": "Hampir — coba lagi",
    "tryAgain": "Belum tepat — dengar dan coba lagi",
    "nextWord": "Kata berikutnya",
    "unavailable": "Pengenalan suara membutuhkan build native (bukan Expo Go).",
    "permissionDenied": "Izin mikrofon/suara diperlukan.",
    "errorGeneric": "Tidak terdengar. Coba di tempat yang lebih tenang.",
    "practiceInLesson": "Latih pengucapannya"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Pelajaran berikutnya",
    "continueCta": "Lanjut",
    "streak": "Streak",
    "xp": "XP",
    "done": "Selesai",
    "progress": "Kemajuan Anda",
    "courseCompletion": "Penyelesaian kursus",
    "unlockTitle": "Buka seluruh kursus",
    "unlockBody": "Bulanan atau tahunan — dibuat untuk pemula."
  },
  "learn": {
    "title": "Kurikulum",
    "subtitle": "A1 untuk pemula — bangun kosakata langkah demi langkah.",
    "unit": "Unit {n}"
  },
  "practice": {
    "title": "Latihan cepat",
    "score": "Skor: {score} · {lesson}",
    "emptyTitle": "Belum ada latihan",
    "emptyBody": "Selesaikan pelajaran gratis dulu.",
    "goLearn": "Ke kurikulum",
    "next": "Berikutnya"
  },
  "profile": {
    "title": "Profil",
    "student": "Pembelajar",
    "noEmail": "Tidak ada email",
    "free": "Gratis",
    "subscription": "Langganan",
    "hasPro": "Anda punya poco start Pro.",
    "noPro": "Bulanan atau tahunan via App Store / Google Play dengan RevenueCat.",
    "seePlans": "Lihat paket Pro",
    "restore": "Pulihkan pembelian",
    "restored": "Dipulihkan",
    "restoredBody": "Pro aktif lagi.",
    "noPurchases": "Tidak ada pembelian",
    "noPurchasesBody": "Tidak ada pembelian sebelumnya untuk akun ini.",
    "signOut": "Keluar",
    "signOutConfirm": "Yakin?",
    "language": "Bahasa aplikasi",
    "days": "hari",
    "deleteAccount": "Hapus akun",
    "deleteAccountConfirm": "Ini menghapus permanen akun dan kemajuan belajar dari server kami. Langganan harus dibatalkan terpisah di App Store.",
    "deleteAccountForever": "Hapus selamanya",
    "deleteAccountFinal": "Ini tidak bisa dibatalkan. Hapus akun poco start sekarang?",
    "deleteGuestBody": "Anda mode tamu — tidak ada akun cloud untuk dihapus. Daftar dulu jika Anda membuat akun.",
    "deletedTitle": "Akun dihapus",
    "deletedBody": "Akun dan kemajuan tersinkron telah dihapus.",
    "deleteFailed": "Tidak dapat menghapus akun"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Belajar Spanyol cepat — tanpa gangguan.",
    "features": [
      "Kurikulum A1 lengkap",
      "Latihan tanpa batas",
      "Kemajuan tersinkron",
      "Pelajaran baru seiring waktu"
    ],
    "yearly": "Tahunan",
    "monthly": "Bulanan",
    "flexible": "Fleksibel",
    "continuePrice": "Lanjut · {price}",
    "restore": "Pulihkan pembelian",
    "legal": "Pembayaran dibebankan ke akun Apple/Google Anda. Langganan diperpanjang otomatis kecuali dibatalkan minimal 24 jam sebelumnya. Kelola di App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "Langganan Anda aktif.",
    "continue": "Lanjut",
    "missingProduct": "Produk tidak ada",
    "missingProductBody": "Penawaran tidak ditemukan di RevenueCat.",
    "purchaseFailed": "Pembelian gagal",
    "restoreNone": "Tidak ada pembelian",
    "restoreNoneBody": "Tidak ada pembelian sebelumnya untuk akun Apple/Google ini.",
    "devMode": "Mode dev",
    "devModeBody": "RevenueCat belum dikonfigurasi.",
    "savings": "Nilai terbaik"
  },
  "lesson": {
    "notFound": "Pelajaran tidak ditemukan",
    "proTitle": "Pelajaran Pro",
    "proBody": "Buka dengan langganan untuk lanjut.",
    "seePlans": "Lihat paket",
    "startExercises": "Mulai latihan",
    "question": "Soal {n} / {total}",
    "finish": "Selesai",
    "nextLesson": "Pelajaran berikutnya",
    "unlockNext": "Buka berikutnya",
    "backHome": "Kembali ke beranda",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} benar · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Langkah pertama",
      "description": "Salam, angka, dan diri Anda"
    },
    "u2": {
      "title": "Di kota",
      "description": "Makanan, tempat, dan kehidupan sehari-hari"
    },
    "u3": {
      "title": "Percakapan",
      "description": "Pertanyaan, waktu, dan preferensi"
    }
  }
}),
  lessons: en.lessons,
};

export default id;
