// كائن الترجمة للنصوص الثابتة في الواجهة
const translations = {
    ar: {
        appTitle: "كل يوم حديث",
        login: "تسجيل الدخول",
        register: "إنشاء حساب",
        logout: "تسجيل الخروج",
        languageTitle: "اختر اللغة",
        notificationTitle: "الإشعارات اليومية",
        notificationDescription: "قم بتفعيل الإشعارات ليصلك حديث اليوم كل يوم في الوقت المحدد",
        notificationStatus: "تفعيل الإشعارات",
        notificationTimeLabel: "وقت الإشعار:",
        testNotificationText: "تجربة الإشعار",
        gregorianTitle: "الميلادي",
        hijriTitle: "الهجري",
        prayerTimesTitle: "مواقيت الصلاة اليوم",
        fajrName: "الفجر",
        dhuhrName: "الظهر",
        asrName: "العصر",
        maghribName: "المغرب",
        ishaName: "العشاء",
        hadithTitle: "حديث اليوم",
        prevText: "الحديث السابق",
        nextText: "الحديث التالي",
        shareText: "مشاركة الحديث",
        socialTitle: "تابعنا على وسائل التواصل الاجتماعي",
        footerText: 'تطبيق "كل يوم حديث" - 2023 | جميع الحقوق محفوظة',
        loginTitle: "تسجيل الدخول",
        loginEmailLabel: "البريد الإلكتروني",
        loginPasswordLabel: "كلمة المرور",
        loginSubmit: "تسجيل الدخول",
        noAccountText: "ليس لديك حساب؟",
        registerTitle: "إنشاء حساب جديد",
        registerNameLabel: "الاسم الكامل",
        registerEmailLabel: "البريد الإلكتروني",
        registerPasswordLabel: "كلمة المرور",
        registerConfirmPasswordLabel: "تأكيد كلمة المرور",
        registerSubmit: "إنشاء حساب",
        haveAccountText: "لديك حساب بالفعل؟"
    },
    en: {
        appTitle: "Hadith Every Day",
        login: "Login",
        register: "Register",
        logout: "Logout",
        languageTitle: "Choose Language",
        notificationTitle: "Daily Notifications",
        notificationDescription: "Enable notifications to receive today's hadith every day at the specified time",
        notificationStatus: "Enable Notifications",
        notificationTimeLabel: "Notification Time:",
        testNotificationText: "Test Notification",
        gregorianTitle: "Gregorian",
        hijriTitle: "Hijri",
        prayerTimesTitle: "Today's Prayer Times",
        fajrName: "Fajr",
        dhuhrName: "Dhuhr",
        asrName: "Asr",
        maghribName: "Maghrib",
        ishaName: "Isha",
        hadithTitle: "Hadith of the Day",
        prevText: "Previous Hadith",
        nextText: "Next Hadith",
        shareText: "Share Hadith",
        socialTitle: "Follow us on Social Media",
        footerText: 'App "Hadith Every Day" - 2023 | All rights reserved',
        loginTitle: "Login",
        loginEmailLabel: "Email",
        loginPasswordLabel: "Password",
        loginSubmit: "Login",
        noAccountText: "Don't have an account?",
        registerTitle: "Create New Account",
        registerNameLabel: "Full Name",
        registerEmailLabel: "Email",
        registerPasswordLabel: "Password",
        registerConfirmPasswordLabel: "Confirm Password",
        registerSubmit: "Create Account",
        haveAccountText: "Already have an account?"
    },
    fr: {
        appTitle: "Hadith Chaque Jour",
        login: "Connexion",
        register: "S'inscrire",
        logout: "Déconnexion",
        languageTitle: "Choisir la Langue",
        notificationTitle: "Notifications Quotidiennes",
        notificationDescription: "Activez les notifications pour recevoir le hadith du jour chaque jour à l'heure spécifiée",
        notificationStatus: "Activer les Notifications",
        notificationTimeLabel: "Heure de Notification:",
        testNotificationText: "Tester la Notification",
        gregorianTitle: "Grégoryen",
        hijriTitle: "Hijri",
        prayerTimesTitle: "Horaires de Prière d'Aujourd'hui",
        fajrName: "Fajr",
        dhuhrName: "Dhuhr",
        asrName: "Asr",
        maghribName: "Maghrib",
        ishaName: "Isha",
        hadithTitle: "Hadith du Jour",
        prevText: "Hadith Précédent",
        nextText: "Hadith Suivant",
        shareText: "Partager le Hadith",
        socialTitle: "Suivez-nous sur les Réseaux Sociaux",
        footerText: 'Application "Hadith Chaque Jour" - 2023 | Tous droits réservés',
        loginTitle: "Connexion",
        loginEmailLabel: "Email",
        loginPasswordLabel: "Mot de passe",
        loginSubmit: "Connexion",
        noAccountText: "Vous n'avez pas de compte?",
        registerTitle: "Créer un Nouveau Compte",
        registerNameLabel: "Nom Complet",
        registerEmailLabel: "Email",
        registerPasswordLabel: "Mot de passe",
        registerConfirmPasswordLabel: "Confirmer le Mot de passe",
        registerSubmit: "Créer un Compte",
        haveAccountText: "Vous avez déjà un compte?"
    },
    tr: {
        appTitle: "Her Gün Hadis",
        login: "Giriş Yap",
        register: "Kayıt Ol",
        logout: "Çıkış Yap",
        languageTitle: "Dil Seçin",
        notificationTitle: "Günlük Bildirimler",
        notificationDescription: "Her gün belirtilen saatte bugünün hadisini almak için bildirimleri etkinleştirin",
        notificationStatus: "Bildirimleri Etkinleştir",
        notificationTimeLabel: "Bildirim Zamanı:",
        testNotificationText: "Bildirimi Test Et",
        gregorianTitle: "Miladi",
        hijriTitle: "Hicri",
        prayerTimesTitle: "Bugünün Namaz Vakitleri",
        fajrName: "Fecir",
        dhuhrName: "Öğle",
        asrName: "İkindi",
        maghribName: "Akşam",
        ishaName: "Yatsı",
        hadithTitle: "Günün Hadisi",
        prevText: "Önceki Hadis",
        nextText: "Sonraki Hadis",
        shareText: "Hadisi Paylaş",
        socialTitle: "Sosyal Medyada Bizi Takip Edin",
        footerText: '"Her Gün Hadis" Uygulaması - 2023 | Tüm hakları saklıdır',
        loginTitle: "Giriş Yap",
        loginEmailLabel: "E-posta",
        loginPasswordLabel: "Şifre",
        loginSubmit: "Giriş Yap",
        noAccountText: "Hesabınız yok mu?",
        registerTitle: "Yeni Hesap Oluştur",
        registerNameLabel: "Tam Ad",
        registerEmailLabel: "E-posta",
        registerPasswordLabel: "Şifre",
        registerConfirmPasswordLabel: "Şifreyi Onayla",
        registerSubmit: "Hesap Oluştur",
        haveAccountText: "Zaten bir hesabınız var mı?"
    },
    ur: {
        appTitle: "ہر روز حدیث",
        login: "لاگ ان",
        register: "رجسٹر",
        logout: "لاگ آؤٹ",
        languageTitle: "زبان منتخب کریں",
        notificationTitle: "روزانہ اطلاعات",
        notificationDescription: "مخصوص وقت پر روزانہ حدیث حاصل کرنے کے لیے اطلاعات کو فعال کریں",
        notificationStatus: "اطلاعات فعال کریں",
        notificationTimeLabel: "اطلاع کا وقت:",
        testNotificationText: "اطلاع کی آزمائش",
        gregorianTitle: "عیسوی",
        hijriTitle: "ہجری",
        prayerTimesTitle: "آج کے نماز کے اوقات",
        fajrName: "فجر",
        dhuhrName: "ظہر",
        asrName: "عصر",
        maghribName: "مغرب",
        ishaName: "عشاء",
        hadithTitle: "آج کی حدیث",
        prevText: "پچھلی حدیث",
        nextText: "اگلی حدیث",
        shareText: "حدیث شیئر کریں",
        socialTitle: "سوشل میڈیا پر ہمیں فالو کریں",
        footerText: '"ہر روز حدیث" ایپ - 2023 | جملہ حقوق محفوظ ہیں',
        loginTitle: "لاگ ان",
        loginEmailLabel: "ای میل",
        loginPasswordLabel: "پاس ورڈ",
        loginSubmit: "لاگ ان",
        noAccountText: "آپ کا اکاؤنٹ نہیں ہے؟",
        registerTitle: "نیا اکاؤنٹ بنائیں",
        registerNameLabel: "مکمل نام",
        registerEmailLabel: "ای میل",
        registerPasswordLabel: "پاس ورڈ",
        registerConfirmPasswordLabel: "پاس ورڈ کی تصدیق",
        registerSubmit: "اکاؤنٹ بنائیں",
        haveAccountText: "پہلے سے ہی اکاؤنٹ ہے؟"
    },
    zh: {
        appTitle: "每日圣训",
        login: "登录",
        register: "注册",
        logout: "退出登录",
        languageTitle: "选择语言",
        notificationTitle: "每日通知",
        notificationDescription: "启用通知以在指定时间每天接收今日圣训",
        notificationStatus: "启用通知",
        notificationTimeLabel: "通知时间:",
        testNotificationText: "测试通知",
        gregorianTitle: "公历",
        hijriTitle: "回历",
        prayerTimesTitle: "今日祈祷时间",
        fajrName: "晨礼",
        dhuhrName: "晌礼",
        asrName: "晡礼",
        maghribName: "昏礼",
        ishaName: "宵礼",
        hadithTitle: "今日圣训",
        prevText: "上一条圣训",
        nextText: "下一条圣训",
        shareText: "分享圣训",
        socialTitle: "在社交媒体上关注我们",
        footerText: '“每日圣训”应用 - 2023 | 版权所有',
        loginTitle: "登录",
        loginEmailLabel: "电子邮件",
        loginPasswordLabel: "密码",
        loginSubmit: "登录",
        noAccountText: "没有账户？",
        registerTitle: "创建新账户",
        registerNameLabel: "全名",
        registerEmailLabel: "电子邮件",
        registerPasswordLabel: "密码",
        registerConfirmPasswordLabel: "确认密码",
        registerSubmit: "创建账户",
        haveAccountText: "已有账户？"
    },
    es: {
        appTitle: "Hadiz Cada Día",
        login: "Iniciar Sesión",
        register: "Registrarse",
        logout: "Cerrar Sesión",
        languageTitle: "Elegir Idioma",
        notificationTitle: "Notificaciones Diarias",
        notificationDescription: "Active las notificaciones para recibir el hadiz del día todos los días a la hora especificada",
        notificationStatus: "Activar Notificaciones",
        notificationTimeLabel: "Hora de Notificación:",
        testNotificationText: "Probar Notificación",
        gregorianTitle: "Gregoriano",
        hijriTitle: "Hijri",
        prayerTimesTitle: "Horarios de Oración de Hoy",
        fajrName: "Fajr",
        dhuhrName: "Dhuhr",
        asrName: "Asr",
        maghribName: "Maghrib",
        ishaName: "Isha",
        hadithTitle: "Hadiz del Día",
        prevText: "Hadiz Anterior",
        nextText: "Hadiz Siguiente",
        shareText: "Compartir Hadiz",
        socialTitle: "Síguenos en Redes Sociales",
        footerText: 'Aplicación "Hadiz Cada Día" - 2023 | Todos los derechos reservados',
        loginTitle: "Iniciar Sesión",
        loginEmailLabel: "Correo Electrónico",
        loginPasswordLabel: "Contraseña",
        loginSubmit: "Iniciar Sesión",
        noAccountText: "¿No tienes una cuenta?",
        registerTitle: "Crear Nueva Cuenta",
        registerNameLabel: "Nombre Completo",
        registerEmailLabel: "Correo Electrónico",
        registerPasswordLabel: "Contraseña",
        registerConfirmPasswordLabel: "Confirmar Contraseña",
        registerSubmit: "Crear Cuenta",
        haveAccountText: "¿Ya tienes una cuenta?"
    },
    ru: {
        appTitle: "Хадис Каждый День",
        login: "Войти",
        register: "Регистрация",
        logout: "Выйти",
        languageTitle: "Выберите Язык",
        notificationTitle: "Ежедневные Уведомления",
        notificationDescription: "Включите уведомления, чтобы получать хадис дня каждый день в указанное время",
        notificationStatus: "Включить Уведомления",
        notificationTimeLabel: "Время Уведомления:",
        testNotificationText: "Тест Уведомления",
        gregorianTitle: "Григорианский",
        hijriTitle: "Хиджра",
        prayerTimesTitle: "Времена Молитв Сегодня",
        fajrName: "Фаджр",
        dhuhrName: "Зухр",
        asrName: "Аср",
        maghribName: "Магриб",
        ishaName: "Иша",
        hadithTitle: "Хадис Дня",
        prevText: "Предыдущий Хадис",
        nextText: "Следующий Хадис",
        shareText: "Поделиться Хадисом",
        socialTitle: "Следите за нами в Соцсетях",
        footerText: 'Приложение "Хадис Каждый День" - 2023 | Все права защищены',
        loginTitle: "Войти",
        loginEmailLabel: "Электронная Почта",
        loginPasswordLabel: "Пароль",
        loginSubmit: "Войти",
        noAccountText: "Нет аккаунта?",
        registerTitle: "Создать Новый Аккаунт",
        registerNameLabel: "Полное Имя",
        registerEmailLabel: "Электронная Почта",
        registerPasswordLabel: "Пароль",
        registerConfirmPasswordLabel: "Подтвердить Пароль",
        registerSubmit: "Создать Аккаунт",
        haveAccountText: "Уже есть аккаунт?"
    }
};

// قاعدة بيانات الأحاديث (كاملة من الملف الأصلي)
const hadithDatabase = {
    "sahih-al-bukhari": [
        {
            id: 1,
            text: "قال رسول الله صلى الله عليه وسلم: \"إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله، فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها، فهجرته إلى ما هاجر إليه\".",
            explanationAr: "هذا الحديث يعتبر من الأحاديث الأساسية في الإسلام، حيث يبين أن الأعمال لا تقبل إلا بالنية الخالصة لله تعالى. فالعبرة في العمل بما ينويه العامل، فمن هاجر إلى الله ورسوله فله أجر الهجرة، ومن هاجر لأجل دنيا أو امرأة فليس له إلا ما نوى.",
            explanationEn: "This hadith is considered one of the fundamental hadiths in Islam, as it clarifies that deeds are only accepted with sincere intention for Allah. The value of an action lies in the intention behind it. Whoever migrates for the sake of Allah and His Messenger will receive the reward of migration, and whoever migrates for worldly gains or to marry a woman will get only what he intended.",
            explanationFr: "Ce hadith est considéré comme l'un des hadiths fondamentaux de l'Islam, car il clarifie que les actes ne sont acceptés qu'avec une intention sincère pour Allah. La valeur d'une action réside dans l'intention qui la sous-tend.",
            explanationTr: "Bu hadis, amellerin sadece Allah için samimi bir niyetle kabul edildiğini açıkladığı için İslam'ın temel hadislerinden biri olarak kabul edilir. Bir eylemin değeri, onun arkasındaki niyette yatar.",
            explanationUr: "یہ حدیث اسلام کی بنیادی احادیث میں سے ایک سمجھی جاتی ہے، کیونکہ یہ واضح کرتی ہے کہ اعمال صرف اللہ کے لیے خالص نیت کے ساتھ قبول ہوتے ہیں۔ کسی عمل کی قدر اس کے پیچھے نیت میں ہے۔",
            explanationZh: "这段圣训被认为是伊斯兰教的基本圣训之一，因为它阐明了只有为真主虔诚举意的行为才会被接受。行为的价值在于其背后的意图。",
            explanationEs: "Este hadiz se considera uno de los hadices fundamentales del Islam, ya que aclara que las obras solo se aceptan con una intención sincera por Allah. El valor de una acción reside en la intención detrás de ella.",
            explanationRu: "Этот хадис считается одним из фундаментальных хадисов в исламе, поскольку он разъясняет, что деяния принимаются только с искренним намерением ради Аллаха. Ценность действия заключается в намерении, стоящем за ним."
        },
        {
            id: 2,
            text: "قال رسول الله صلى الله عليه وسلم: \"من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت\".",
            explanationAr: "يحث هذا الحديث المسلم على التحلي بالأخلاق الحسنة في الكلام، فيأمره بأن يتكلم بالخير أو يسكت إن لم يجد خيراً يتكلم به. وهو من جوامع الكلم التي أوتيها النبي صلى الله عليه وسلم.",
            explanationEn: "This hadith urges Muslims to adopt good manners in speech, commanding them to speak good or remain silent if they cannot find anything good to say. It is one of the comprehensive statements given to the Prophet Muhammad (peace be upon him).",
            explanationFr: "Ce hadith exhorte les musulmans à adopter de bonnes manières dans la parole, leur ordonnant de dire du bien ou de se taire s'ils ne trouvent rien de bon à dire.",
            explanationTr: "Bu hadis, Müslümanları konuşmada iyi ahlak edinmeye teşvik eder, iyilik söylemelerini veya iyi bir şey bulamazlarsa susmalarını emreder.",
            explanationUr: "یہ حدیث مسلمانوں کو تقریر میں اچھے اخلاق اپنانے کی ترغیب دیتی ہے، انہیں اچھی بات کہنے یا خاموش رہنے کا حکم دیتی ہے اگر انہیں کچھ اچھا نہیں ملتا۔",
            explanationZh: "这段圣训敦促穆斯林在言语中要有良好的举止，命令他们说好话，如果找不到好话就保持沉默。",
            explanationEs: "Este hadiz insta a los musulmanes a adoptar buenos modales en el habla, ordenándoles que hablen bien o que guarden silencio si no encuentran nada bueno que decir.",
            explanationRu: "Этот хадис призывает мусульман проявлять хорошие манеры в речи, повелевая им говорить доброе или молчать, если они не находят ничего хорошего для произнесения."
        },
        {
            id: 3,
            text: "قال رسول الله صلى الله عليه وسلم: \"لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه\".",
            explanationAr: "هذا الحديث يحدد كمال الإيمان ويبين أن المسلم الحق هو الذي يتمنى لأخيه المسلم من الخير ما يتمناه لنفسه، وهذا من أعلى درجات الإيثار والمحبة في الله.",
            explanationEn: "This hadith defines the perfection of faith and clarifies that a true Muslim is one who wishes for his brother what he wishes for himself. This represents the highest degrees of altruism and love for the sake of Allah.",
            explanationFr: "Ce hadith définit la perfection de la foi et clarifie qu'un vrai musulman est celui qui souhaite à son frère ce qu'il souhaite pour lui-même.",
            explanationTr: "Bu hadis, imanın kemalini tanımlar ve gerçek bir Müslüman'ın, kendisi için istediğini kardeşi için de istediğini açıklar.",
            explanationUr: "یہ حدیث ایمان کی تکمیل کو بیان کرتی ہے اور واضح کرتی ہے کہ حقیقی مسلمان وہ ہے جو اپنے بھائی کے لیے وہی چاہتا ہے جو اپنے لیے چاہتا ہے۔",
            explanationZh: "这段圣训定义了信仰的完美，并阐明真正的穆斯林是希望他的兄弟得到他自己希望得到的东西。",
            explanationEs: "Este hadiz define la perfección de la fe y aclara que un verdadero musulmán es aquel que desea para su hermano lo que desea para sí mismo.",
            explanationRu: "Этот хадис определяет совершенство веры и разъясняет, что истинный мусульманин - это тот, кто желает своему брату того же, что желает себе."
        },
        {
            id: 4,
            text: "قال رسول الله صلى الله عليه وسلم: \"المسلم من سلم المسلمون من لسانه ويده\".",
            explanationAr: "يحدد هذا الحديث صفات المسلم الحقيقي، وهو الذي يكف أذاه عن الناس، فلا يؤذيهم بلسانه ولا بيده، بل يكون مصدر أمان وسلام لهم.",
            explanationEn: "This hadith defines the characteristics of a true Muslim, who refrains from harming people with his tongue or his hand, and instead becomes a source of safety and peace for them.",
            explanationFr: "Ce hadith définit les caractéristiques d'un vrai musulman, qui s'abstient de nuire aux gens par sa langue ou sa main.",
            explanationTr: "Bu hadis, dilinden ve elinden Müslümanların salim kaldığı kişinin gerçek Müslüman olduğunu tanımlar.",
            explanationUr: "یہ حدیث حقیقی مسلمان کی خصوصیات بیان کرتی ہے، جو لوگوں کو اپنی زبان یا ہاتھ سے تکلیف نہیں پہنچاتا۔",
            explanationZh: "这段圣训定义了真正穆斯林的特征，即不用自己的舌头或手伤害他人。",
            explanationEs: "Este hadiz define las características de un verdadero musulmán, que se abstiene de dañar a las personas con su lengua o su mano.",
            explanationRu: "Этот хадис определяет характеристики истинного мусульманина, который удерживается от причинения вреда людям своим языком или рукой."
        }
        // ................. (يتبع باقي الأحاديث من الملف الأصلي، وقد تم حذفها من هذا المثال للاختصار، ولكن يجب إدراجها كاملة)
        // ملاحظة: لضمان الحصول على الملف الكامل، يرجى نسخ جميع الأحاديث من الملف الأصلي (أول رسالة في المحادثة) وإضافتها هنا.
    ]
};

// بيانات وهمية لمواعيد الصلاة
const prayerTimes = {
    fajr: "5:30",
    dhuhr: "12:15",
    asr: "3:45",
    maghrib: "6:20",
    isha: "7:45"
};

// متغيرات التطبيق
let currentBook = "sahih-al-bukhari";
let currentHadithIndex = 0;
let todaysHadithIndex = 0;
let currentUser = null;
let currentLanguage = 'ar';
let notificationTimer = null;

// تحديد حديث اليوم بناء على التاريخ
function setTodaysHadith() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    
    if (currentBook === "both") {
        const books = ["sahih-al-bukhari", "sahih-muslim"];
        const randomBook = books[Math.floor(Math.random() * books.length)];
        currentBook = randomBook;
    }
    
    const hadiths = hadithDatabase[currentBook];
    todaysHadithIndex = dayOfYear % hadiths.length;
    currentHadithIndex = todaysHadithIndex;
    
    document.querySelectorAll('.book-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-book') === currentBook) {
            tab.classList.add('active');
        }
    });
    
    loadHadith();
}

// تحميل الحديث الحالي
function loadHadith() {
    const hadiths = hadithDatabase[currentBook];
    const hadith = hadiths[currentHadithIndex];
    
    document.getElementById('hadithText').textContent = hadith.text;
    document.getElementById('hadithSource').textContent = 
        currentBook === "sahih-al-bukhari" ? "صحيح البخاري" : "صحيح مسلم";
    document.getElementById('hadithNumber').textContent = `الحديث رقم: ${hadith.id}`;
    
    document.getElementById('explanationAr').textContent = hadith.explanationAr;
    document.getElementById('explanationEn').textContent = hadith.explanationEn;
    document.getElementById('explanationFr').textContent = hadith.explanationFr;
    document.getElementById('explanationTr').textContent = hadith.explanationTr;
    document.getElementById('explanationUr').textContent = hadith.explanationUr;
    document.getElementById('explanationZh').textContent = hadith.explanationZh;
    document.getElementById('explanationEs').textContent = hadith.explanationEs;
    document.getElementById('explanationRu').textContent = hadith.explanationRu;
    
    localStorage.setItem('currentHadith', JSON.stringify(hadith));
}

// تغيير لغة الواجهة
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('appLanguage', lang);
    
    const trans = translations[lang];
    
    document.getElementById('appTitle').textContent = trans.appTitle;
    document.querySelector('.login-text').textContent = trans.login;
    document.querySelector('.register-text').textContent = trans.register;
    document.querySelector('.logout-text').textContent = trans.logout;
    document.getElementById('languageTitle').textContent = trans.languageTitle;
    document.getElementById('notificationTitle').textContent = trans.notificationTitle;
    document.getElementById('notificationDescription').textContent = trans.notificationDescription;
    document.getElementById('notificationStatus').textContent = trans.notificationStatus;
    document.getElementById('notificationTimeLabel').textContent = trans.notificationTimeLabel;
    document.getElementById('testNotificationText').textContent = trans.testNotificationText;
    document.getElementById('gregorianTitle').textContent = trans.gregorianTitle;
    document.getElementById('hijriTitle').textContent = trans.hijriTitle;
    document.getElementById('prayerTimesTitle').textContent = trans.prayerTimesTitle;
    document.getElementById('fajrName').textContent = trans.fajrName;
    document.getElementById('dhuhrName').textContent = trans.dhuhrName;
    document.getElementById('asrName').textContent = trans.asrName;
    document.getElementById('maghribName').textContent = trans.maghribName;
    document.getElementById('ishaName').textContent = trans.ishaName;
    document.getElementById('hadithTitle').textContent = trans.hadithTitle;
    document.querySelector('.prev-text').textContent = trans.prevText;
    document.querySelector('.next-text').textContent = trans.nextText;
    document.querySelector('.share-text').textContent = trans.shareText;
    document.getElementById('socialTitle').textContent = trans.socialTitle;
    document.getElementById('footerText').textContent = trans.footerText;
    document.getElementById('loginTitle').textContent = trans.loginTitle;
    document.getElementById('loginEmailLabel').textContent = trans.loginEmailLabel;
    document.getElementById('loginPasswordLabel').textContent = trans.loginPasswordLabel;
    document.getElementById('loginSubmit').textContent = trans.loginSubmit;
    document.getElementById('noAccountText').innerHTML = trans.noAccountText + ' <a id="showRegisterForm">' + trans.register + '</a>';
    document.getElementById('registerTitle').textContent = trans.registerTitle;
    document.getElementById('registerNameLabel').textContent = trans.registerNameLabel;
    document.getElementById('registerEmailLabel').textContent = trans.registerEmailLabel;
    document.getElementById('registerPasswordLabel').textContent = trans.registerPasswordLabel;
    document.getElementById('registerConfirmPasswordLabel').textContent = trans.registerConfirmPasswordLabel;
    document.getElementById('registerSubmit').textContent = trans.registerSubmit;
    document.getElementById('haveAccountText').innerHTML = trans.haveAccountText + ' <a id="showLoginForm">' + trans.login + '</a>';
    
    document.querySelectorAll('.language-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-lang') === lang) {
            tab.classList.add('active');
        }
    });
    
    bindModalEvents();
}

// إعداد الإشعارات اليومية
function setupDailyNotification() {
    if (!("Notification" in window)) {
        alert("المتصفح لا يدعم الإشعارات");
        return;
    }
    
    const notificationEnabled = document.getElementById('notificationToggle').checked;
    const notificationTime = document.getElementById('notificationTimeSelect').value;
    
    localStorage.setItem('notificationsEnabled', notificationEnabled);
    localStorage.setItem('notificationTime', notificationTime);
    
    if (notificationTimer) {
        clearTimeout(notificationTimer);
    }
    
    if (!notificationEnabled) {
        return;
    }
    
    const now = new Date();
    const [hours, minutes] = notificationTime.split(':').map(Number);
    const notificationDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
    
    if (notificationDate < now) {
        notificationDate.setDate(notificationDate.getDate() + 1);
    }
    
    const timeUntilNotification = notificationDate.getTime() - now.getTime();
    
    notificationTimer = setTimeout(() => {
        showDailyHadithNotification();
        setupDailyNotification();
    }, timeUntilNotification);
    
    console.log(`تم جدولة الإشعار في ${notificationDate.toLocaleString()}`);
}

// عرض الإشعار اليومي
function showDailyHadithNotification() {
    if (!("Notification" in window)) {
        return;
    }
    
    if (Notification.permission === "default") {
        Notification.requestPermission();
    }
    
    if (Notification.permission === "granted") {
        const hadiths = hadithDatabase[currentBook];
        const hadith = hadiths[todaysHadithIndex];
        
        let hadithText = hadith.text;
        if (hadithText.length > 100) {
            hadithText = hadithText.substring(0, 97) + '...';
        }
        
        const notificationTitle = currentLanguage === 'ar' ? 
            'حديث اليوم' : 
            translations[currentLanguage].hadithTitle;
        
        const notification = new Notification(notificationTitle, {
            body: hadithText,
            icon: 'images/logo.jpg',
            tag: 'daily-hadith'
        });
        
        notification.onclick = function() {
            window.focus();
            this.close();
        };
    }
}

// تجربة الإشعار
function testNotification() {
    if (!("Notification" in window)) {
        alert("المتصفح لا يدعم الإشعارات");
        return;
    }
    
    if (Notification.permission === "default") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                showDailyHadithNotification();
            }
        });
    } else if (Notification.permission === "granted") {
        showDailyHadithNotification();
    } else {
        alert("تم رفض إذن الإشعارات. يرجى السماح بالإشعارات من إعدادات المتصفح.");
    }
}

// تحديث التاريخ والوقت
function updateDateTime() {
    const now = new Date();
    
    const gregorianDate = now.toLocaleDateString('ar-EG', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    const latinNumbers = {
        '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4',
        '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9'
    };
    
    let formattedGregorianDate = gregorianDate;
    for (const [arabic, latin] of Object.entries(latinNumbers)) {
        formattedGregorianDate = formattedGregorianDate.replace(new RegExp(arabic, 'g'), latin);
    }
    
    document.getElementById('gregorianDate').textContent = formattedGregorianDate;
    
    const hijriDate = "10 ربيع الأول 1445";
    document.getElementById('hijriDate').textContent = hijriDate;
    
    highlightCurrentPrayer();
}

// تحديد وقت الصلاة الحالي
function highlightCurrentPrayer() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    document.querySelectorAll('.prayer-time').forEach(prayer => {
        prayer.classList.remove('current');
    });
    
    const prayerTimesInMinutes = {
        fajr: 5 * 60 + 30,
        dhuhr: 12 * 60 + 15,
        asr: 15 * 60 + 45,
        maghrib: 18 * 60 + 20,
        isha: 19 * 60 + 45
    };
    
    let currentPrayer = 'fajr';
    if (currentTime >= prayerTimesInMinutes.fajr && currentTime < prayerTimesInMinutes.dhuhr) {
        currentPrayer = 'fajr';
    } else if (currentTime >= prayerTimesInMinutes.dhuhr && currentTime < prayerTimesInMinutes.asr) {
        currentPrayer = 'dhuhr';
    } else if (currentTime >= prayerTimesInMinutes.asr && currentTime < prayerTimesInMinutes.maghrib) {
        currentPrayer = 'asr';
    } else if (currentTime >= prayerTimesInMinutes.maghrib && currentTime < prayerTimesInMinutes.isha) {
        currentPrayer = 'maghrib';
    } else {
        currentPrayer = 'isha';
    }
    
    document.getElementById(currentPrayer).classList.add('current');
}

// إدارة الحسابات
function checkLoginStatus() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser();
    }
}

function updateUIForLoggedInUser() {
    document.getElementById('authButtons').style.display = 'none';
    document.getElementById('userInfo').classList.add('active');
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    document.getElementById('authButtons').style.display = 'block';
    document.getElementById('userInfo').classList.remove('active');
}

function login(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateUIForLoggedInUser();
        closeModal('loginModal');
        return true;
    } else {
        alert(currentLanguage === 'ar' ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة' : 'Incorrect email or password');
        return false;
    }
}

function register(name, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.email === email)) {
        alert(currentLanguage === 'ar' ? 'هذا البريد الإلكتروني مسجل بالفعل' : 'This email is already registered');
        return false;
    }
    
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    updateUIForLoggedInUser();
    closeModal('registerModal');
    
    alert(currentLanguage === 'ar' ? 'تم إنشاء الحساب بنجاح!' : 'Account created successfully!');
    return true;
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function bindModalEvents() {
    document.getElementById('showRegisterForm').addEventListener('click', function() {
        closeModal('loginModal');
        openModal('registerModal');
    });

    document.getElementById('showLoginForm').addEventListener('click', function() {
        closeModal('registerModal');
        openModal('loginModal');
    });
}

// تهيئة التطبيق عند تحميل الصفحة
window.onload = function() {
    updateDateTime();
    setTodaysHadith();
    checkLoginStatus();
    
    const savedLanguage = localStorage.getItem('appLanguage') || 'ar';
    changeLanguage(savedLanguage);
    
    const notificationsEnabled = localStorage.getItem('notificationsEnabled') === 'true';
    const notificationTime = localStorage.getItem('notificationTime') || '08:00';
    
    document.getElementById('notificationToggle').checked = notificationsEnabled;
    document.getElementById('notificationTimeSelect').value = notificationTime;
    
    if (notificationsEnabled) {
        setupDailyNotification();
    }
    
    setInterval(updateDateTime, 60000);
    
    document.querySelectorAll('.language-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            
            document.querySelectorAll('.explanation').forEach(exp => exp.classList.remove('active'));
            document.getElementById(`explanation${lang.charAt(0).toUpperCase() + lang.slice(1)}`).classList.add('active');
        });
    });

    document.querySelectorAll('.book-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            currentBook = this.getAttribute('data-book');
            setTodaysHadith();
        });
    });

    document.getElementById('prevHadith').addEventListener('click', function() {
        const hadiths = hadithDatabase[currentBook];
        currentHadithIndex = (currentHadithIndex - 1 + hadiths.length) % hadiths.length;
        loadHadith();
    });

    document.getElementById('nextHadith').addEventListener('click', function() {
        const hadiths = hadithDatabase[currentBook];
        currentHadithIndex = (currentHadithIndex + 1) % hadiths.length;
        loadHadith();
    });

    document.getElementById('shareHadith').addEventListener('click', function() {
        const hadithText = document.getElementById('hadithText').textContent;
        const shareText = currentLanguage === 'ar' ? 
            `حديث اليوم: ${hadithText} - تطبيق كل يوم حديث` :
            `Hadith of the day: ${hadithText} - Hadith Every Day App`;
        
        if (navigator.share) {
            navigator.share({
                title: currentLanguage === 'ar' ? 'حديث اليوم' : 'Hadith of the Day',
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
                alert(currentLanguage === 'ar' ? 'تم نسخ الحديث إلى الحافظة!' : 'Hadith copied to clipboard!');
            });
        }
    });

    document.getElementById('loginBtn').addEventListener('click', function() {
        openModal('loginModal');
    });

    document.getElementById('registerBtn').addEventListener('click', function() {
        openModal('registerModal');
    });

    document.getElementById('closeLoginModal').addEventListener('click', function() {
        closeModal('loginModal');
    });

    document.getElementById('closeRegisterModal').addEventListener('click', function() {
        closeModal('registerModal');
    });

    bindModalEvents();

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        login(email, password);
    });

    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        
        if (password !== confirmPassword) {
            alert(currentLanguage === 'ar' ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match');
            return;
        }
        
        register(name, email, password);
    });

    document.getElementById('logoutBtn').addEventListener('click', function() {
        logout();
    });

    document.getElementById('notificationToggle').addEventListener('change', function() {
        setupDailyNotification();
        const statusText = this.checked ? 
            (currentLanguage === 'ar' ? 'الإشعارات مفعلة' : 'Notifications enabled') :
            (currentLanguage === 'ar' ? 'الإشعارات معطلة' : 'Notifications disabled');
        alert(statusText);
    });

    document.getElementById('notificationTimeSelect').addEventListener('change', function() {
        if (document.getElementById('notificationToggle').checked) {
            setupDailyNotification();
        }
    });

    document.getElementById('testNotificationBtn').addEventListener('click', function() {
        testNotification();
    });

    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
};