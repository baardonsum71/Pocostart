import type { TranslationTree } from '../types';
import en from './en';

/** UI in vi; lesson content falls back to English until fully localized. */
const vi: TranslationTree = {
  ...en,
  ...({
  "common": {
    "back": "Quay lại",
    "close": "Đóng",
    "continue": "Tiếp tục",
    "next": "Tiếp",
    "loading": "Đang tải…",
    "tryAgain": "Thử lại",
    "free": "Miễn phí",
    "pro": "Pro",
    "cancel": "Hủy"
  },
  "welcome": {
    "tagline": "Tiếng Tây Ban Nha cho người mới — nhanh, rõ ràng và vui.",
    "getStarted": "Bắt đầu",
    "haveAccount": "Tôi đã có tài khoản",
    "tryGuest": "Dùng thử không cần tài khoản",
    "legal": "Theo giá địa phương theo tháng hoặc năm. Hủy bất cứ lúc nào trong App Store.",
    "chooseLanguage": "Ngôn ngữ ứng dụng"
  },
  "auth": {
    "signInTitle": "Chào mừng trở lại",
    "signInSubtitle": "Đăng nhập để tiếp tục học tiếng Tây Ban Nha.",
    "signUpTitle": "Bắt đầu với poco start",
    "signUpSubtitle": "Tạo tài khoản trong chưa đầy một phút. Hai bài học miễn phí.",
    "name": "Tên",
    "email": "Email",
    "password": "Mật khẩu",
    "createAccount": "Tạo tài khoản",
    "signIn": "Đăng nhập",
    "continueApple": "Tiếp tục với Apple",
    "switchToSignUp": "Mới? Tạo tài khoản",
    "switchToSignIn": "Đã có tài khoản? Đăng nhập",
    "passwordShort": "Dùng ít nhất 6 ký tự.",
    "signUpFailed": "Không thể tạo tài khoản",
    "signInFailed": "Đăng nhập thất bại",
    "appleFailed": "Đăng nhập Apple thất bại",
    "languageLabel": "Tôi muốn ứng dụng bằng",
    "checkEmailTitle": "Kiểm tra email",
    "checkEmailBody": "Chúng tôi đã gửi liên kết xác nhận. Mở trên thiết bị này để hoàn tất, rồi đăng nhập.",
    "confirmingEmail": "Đang xác nhận email…",
    "confirmSuccess": "Email đã xác nhận. Chào mừng!",
    "confirmFailed": "Không thể xác nhận email. Mở lại liên kết hoặc yêu cầu cái mới."
  },
  "tabs": {
    "home": "Trang chủ",
    "learn": "Học",
    "practice": "Luyện",
    "speak": "Nói",
    "profile": "Hồ sơ"
  },
  "speak": {
    "title": "Phát âm",
    "subtitle": "Chạm micro và nói cụm tiếng Tây Ban Nha.",
    "listen": "Nghe",
    "tapToSpeak": "Chạm mic & nói",
    "stop": "Dừng",
    "listening": "Đang nghe… nói rõ",
    "youSaid": "Bạn nói",
    "perfect": "Hoàn hảo!",
    "great": "Phát âm tốt",
    "close": "Gần đúng — thử lại",
    "tryAgain": "Chưa đúng — nghe và thử lại",
    "nextWord": "Từ tiếp theo",
    "unavailable": "Nhận dạng giọng nói cần bản native (không phải Expo Go).",
    "permissionDenied": "Cần quyền micro/giọng nói.",
    "errorGeneric": "Không nghe rõ. Thử ở nơi yên tĩnh hơn.",
    "practiceInLesson": "Luyện nói"
  },
  "home": {
    "greeting": "¡Hola!",
    "greetingNamed": "¡Hola, {name}!",
    "nextLesson": "Bài tiếp theo",
    "continueCta": "Tiếp tục",
    "streak": "Chuỗi",
    "xp": "XP",
    "done": "Xong",
    "progress": "Tiến độ của bạn",
    "courseCompletion": "Hoàn thành khóa học",
    "unlockTitle": "Mở toàn bộ khóa học",
    "unlockBody": "Theo tháng hoặc năm — dành cho người mới."
  },
  "learn": {
    "title": "Chương trình",
    "subtitle": "A1 cho người mới — xây từ vựng từng bước.",
    "unit": "Đơn vị {n}"
  },
  "practice": {
    "title": "Luyện nhanh",
    "score": "Điểm: {score} · {lesson}",
    "emptyTitle": "Chưa có bài luyện",
    "emptyBody": "Hãy hoàn thành một bài miễn phí trước.",
    "goLearn": "Đến chương trình",
    "next": "Tiếp"
  },
  "profile": {
    "title": "Hồ sơ",
    "student": "Người học",
    "noEmail": "Chưa có email",
    "free": "Miễn phí",
    "subscription": "Gói đăng ký",
    "hasPro": "Bạn có poco start Pro.",
    "noPro": "Theo tháng hoặc năm qua App Store / Google Play với RevenueCat.",
    "seePlans": "Xem gói Pro",
    "restore": "Khôi phục mua hàng",
    "restored": "Đã khôi phục",
    "restoredBody": "Pro đang hoạt động lại.",
    "noPurchases": "Không có mua hàng",
    "noPurchasesBody": "Không có mua hàng trước cho tài khoản này.",
    "signOut": "Đăng xuất",
    "signOutConfirm": "Bạn chắc chứ?",
    "language": "Ngôn ngữ ứng dụng",
    "days": "ngày",
    "deleteAccount": "Xóa tài khoản",
    "deleteAccountConfirm": "Thao tác này xóa vĩnh viễn tài khoản và tiến độ trên máy chủ. Gói đăng ký phải hủy riêng trong App Store.",
    "deleteAccountForever": "Xóa vĩnh viễn",
    "deleteAccountFinal": "Không thể hoàn tác. Xóa tài khoản poco start ngay?",
    "deleteGuestBody": "Bạn đang chế độ khách — không có tài khoản đám mây để xóa. Hãy đăng ký nếu bạn đã tạo.",
    "deletedTitle": "Đã xóa tài khoản",
    "deletedBody": "Tài khoản và tiến độ đồng bộ đã được xóa.",
    "deleteFailed": "Không thể xóa tài khoản"
  },
  "paywall": {
    "title": "poco start Pro",
    "subtitle": "Học tiếng Tây Ban Nha nhanh — không phân tâm.",
    "features": [
      "Chương trình A1 đầy đủ",
      "Luyện không giới hạn",
      "Tiến độ đồng bộ",
      "Bài học mới theo thời gian"
    ],
    "yearly": "Hàng năm",
    "monthly": "Hàng tháng",
    "flexible": "Linh hoạt",
    "continuePrice": "Tiếp tục · {price}",
    "restore": "Khôi phục mua hàng",
    "legal": "Thanh toán trừ vào tài khoản Apple/Google. Gói tự gia hạn trừ khi hủy trước ít nhất 24 giờ. Quản lý trong App Store / Play Store.",
    "welcomePro": "¡Bienvenido a Pro!",
    "welcomeProBody": "Gói đăng ký đang hoạt động.",
    "continue": "Tiếp tục",
    "missingProduct": "Thiếu sản phẩm",
    "missingProductBody": "Không tìm thấy gói trong RevenueCat.",
    "purchaseFailed": "Mua thất bại",
    "restoreNone": "Không có mua hàng",
    "restoreNoneBody": "Không có mua hàng trước cho tài khoản Apple/Google này.",
    "devMode": "Chế độ dev",
    "devModeBody": "RevenueCat chưa được cấu hình.",
    "savings": "Giá tốt nhất"
  },
  "lesson": {
    "notFound": "Không tìm thấy bài học",
    "proTitle": "Bài Pro",
    "proBody": "Mở khóa bằng gói đăng ký để tiếp tục.",
    "seePlans": "Xem gói",
    "startExercises": "Bắt đầu bài tập",
    "question": "Câu {n} / {total}",
    "finish": "Hoàn thành",
    "nextLesson": "Bài tiếp theo",
    "unlockNext": "Mở bài tiếp",
    "backHome": "Về trang chủ",
    "great": "¡Muy bien!",
    "correctXp": "{correct}/{total} đúng · +{xp} XP"
  },
  "units": {
    "u1": {
      "title": "Bước đầu",
      "description": "Chào hỏi, số đếm và bản thân"
    },
    "u2": {
      "title": "Trong thành phố",
      "description": "Đồ ăn, địa điểm và đời sống hàng ngày"
    },
    "u3": {
      "title": "Hội thoại",
      "description": "Câu hỏi, thời gian và sở thích"
    }
  }
}),
  lessons: en.lessons,
};

export default vi;
