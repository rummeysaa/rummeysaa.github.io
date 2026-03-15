const translations = {
    tr: {
        navHome: "Ana Sayfa",
        navAbout: "Hakkımda",
        navEducation: "Eğitim",
        navProjects: "Projeler",
        navSkills: "Yetenekler",
        navContact: "İletişim",
        heroSubtitle: "Yazılım Mühendisi | Veri Bilimi & Veritabanı Sistemleri",
        heroBadge: "Yazılım Mühendisliği 3. Sınıf",
        aboutTitle: "Hakkımda",
        aboutText: "Veri analizi, veri bilimi ve veritabanı sistemleri üzerine çalışan bir öğrenciyim. Veri toplama, veri temizleme, analiz ve görselleştirme süreçlerine odaklanıyorum. Veri analizi araçları ve veritabanı yönetimi konularında projeler geliştirerek pratik deneyim kazanmaya çalışıyorum. Ayrıca veritabanı güvenliği ve veri yönetimi konularına özel ilgi duyuyorum. Hedefim veri analizi ve veri yönetimi alanında uzmanlaşarak veri odaklı çözümler geliştiren bir profesyonel olmaktır.",
        eduTitle: "Eğitim",
        eduUni: "Ankara Üniversitesi",
        eduDegree: "Yazılım Mühendisliği, Mühendislik Fakültesi",
        eduGano: "GANO: 3.10 / 4.00",
        projectsTitle: "Projeler",
        projectInspect: "Projeyi İncele",
        projectGithub: "GitHub'da Gör",
        skillsTitle: "Yetenekler",
        skillFrontend: "Frontend (Ön Yüz) Geliştirme",
        skillBackend: "Backend (Arka Yüz) Geliştirme",
        skillDatabase: "Veritabanı Yönetimi",
        skillDataScience: "Veri Analizi & Bilimi",
        contactTitle: "İletişim",
        contactAddress: "Adres:",
        contactEmail: "E-posta:",
        contactLinkedin: "LinkedIn:",
        footerCopy: "&copy; 2026.",
        projectDescUniMate: "UniMate, üniversite öğrencileri için geliştirilmiş kapsamlı bir yönetim platformudur. Ders programı takibi, etkinlik takvimi, not yönetimi ve sosyal etkileşim özelliklerini tek bir çatı altında birleştirerek öğrenci hayatını kolaylaştırmayı hedefler. Vue.js tabanlı dinamik arayüz, Node.js & Express.js destekli API ve MongoDB veritabanıyla güçlendirilmiştir.",
        projectDescPointCafe: "PointCafe, kafe işletmeleri için geliştirilmiş puan tabanlı bir sadakat ve yönetim sistemidir. Siparişlerin ve menünün yönetilebildiği modern bir web uygulamasıdır. React ve Tailwind CSS ile şık bir arayüz, Node.js & Express.js ile güçlü bir backend ve MySQL veritabanıyla desteklenmektedir.",
        projectDescDoH: "Klasik DNS ile DNS over HTTPS (DoH) çözümleme sürelerini karşılaştırıp performans analizi yapan web tabanlı bir test aracıdır. Python ve Streamlit kullanılarak geliştirilen kullanıcı dostu arayüzü sayesinde, ağ trafiği sonuçları gerçek zamanlı olarak detaylı istatistiklere ve zaman serisi grafiklerine dönüştürülmektedir. Veri analiz kütüphaneleriyle desteklenen bu sistem, anlık ölçüm ve CSV formatında raporlama imkanı sunar."
    },
    en: {
        navHome: "Home",
        navAbout: "About Me",
        navEducation: "Education",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",
        heroSubtitle: "Software Engineer | Data Science & Database Systems",
        heroBadge: "3rd Year Software Engineering",
        aboutTitle: "About Me",
        aboutText: "I am a student working on data analysis, data science, and database systems. I focus on data collection, data cleaning, analysis, and visualization processes. I try to gain practical experience by developing projects in data analysis tools and database management. I also have a special interest in database security and data management. My goal is to become a professional developing data-driven solutions by specializing in the field of data analysis and data management.",
        eduTitle: "Education",
        eduUni: "Ankara University",
        eduDegree: "Software Engineering, Faculty of Engineering",
        eduGano: "GPA: 3.10 / 4.00",
        projectsTitle: "Projects",
        projectInspect: "Inspect Project",
        projectGithub: "View on GitHub",
        skillsTitle: "Skills",
        skillFrontend: "Frontend Development",
        skillBackend: "Backend Development",
        skillDatabase: "Database Management",
        skillDataScience: "Data Analysis & Science",
        contactTitle: "Contact",
        contactAddress: "Address:",
        contactEmail: "Email:",
        contactLinkedin: "LinkedIn:",
        footerCopy: "&copy; 2026.",
        projectDescUniMate: "UniMate is a comprehensive management platform developed for university students. It aims to facilitate student life by combining course schedule tracking, event calendar, grade management, and social interaction features under one roof. It is powered by a Vue.js-based dynamic interface, a Node.js & Express.js supported API, and a MongoDB database.",
        projectDescPointCafe: "PointCafe is a points-based loyalty and management system developed for café businesses. It is a modern web application where orders and the menu can be managed. It is supported by a sleek interface with React and Tailwind CSS, a powerful backend with Node.js & Express.js, and a MySQL database.",
        projectDescDoH: "It is a web-based test tool that compares resolution times of classic DNS and DNS over HTTPS (DoH) and performs performance analysis. Thanks to its user-friendly interface developed using Python and Streamlit, network traffic results are converted into detailed statistics and time series graphs in real-time. Supported by data analysis libraries, this system provides instantaneous measurement and reporting in CSV format."
    }
};

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update custom dropdown label
    const currentLangLabel = document.getElementById('current-lang');
    if (currentLangLabel) {
        currentLangLabel.textContent = lang.toUpperCase();
    }

    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'tr';
    switchLanguage(savedLang);

    const langDropdown = document.querySelector('.lang-custom-dropdown');
    const langBtn = document.getElementById('lang-btn');
    const langMenu = document.getElementById('lang-menu');

    if (langBtn && langMenu) {
        // Toggle menu on button click
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });

        // Switch language on menu item click
        langMenu.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', () => {
                const lang = item.getAttribute('data-value');
                switchLanguage(lang);
                langDropdown.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', () => {
            langDropdown.classList.remove('active');
        });
    }
});
