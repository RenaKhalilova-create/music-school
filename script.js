// Тексты для переключения языка
const translations = {
    "ru": {
        "title": "Музыкальная школа",
        "about": "О школе",
        "aboutText":"Информация о школе и её создателе...",
        "teachers": "Преподаватели",
        "courses": "Курсы",
        "coursesText":"Мы предлагаем следующие уроки: пиано, вокал и другие...",
        "pricing": "Цены",
        "contacts": "Контакты",
        "footer": "© 2025 Музыкальная школа. Все права защищены.",
        "button": "Связаться с нами",
        "lesson1": "Пробный урок: 300 AED",
        "lesson2": "8 уроков: 2000 AED",
        "lesson3": "12 уроков: 3000 AED",
        "lesson4": "24 урока: 6000 AED (плюс 2 бесплатных)"
    },
    "en": {
        "title": "Music School",
        "about": "About Us",
        "aboutText":"Information about the school and its creator...",
        "teachers": "Teachers",
        "courses": "Courses",
        "coursesText":"We offer the following lessons: piano, vocal and others...",
        "pricing": "Pricing",
        "contacts": "Contact Us",
        "footer": "© 2025 Music School. All rights reserved.",
        "button": "Contact Us",
        "lesson1": "Trial lesson: 300 AED",
        "lesson2": "8 lessons: 2000 AED",
        "lesson3": "12 lessons: 3000 AED",
        "lesson4": "24 lessons: 6000 AED (plus 2 free)"
    }
};

let currentLanguage = "ru"; // Стартовый язык

// Функция для переключения языка
function switchLanguage() {
    currentLanguage = currentLanguage === "ru" ? "en" : "ru"; // Переключаем язык
    updateText();
}

// Обновление текста на странице
function updateText() {
    // Перебираем все элементы с data-key
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // Изменяем текст на кнопке для смены языка
    const languageButton = document.querySelector("header button");
    languageButton.textContent = currentLanguage === "ru" ? "🌍 EN" : "🌍 RU";
}

// Инициализация страницы с нужным языком
updateText();

