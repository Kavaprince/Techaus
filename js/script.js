// Mobile menu toggle
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("active");
});

// Sticky header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Close mobile menu when clicking a link
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  });
});

// Language Selector Functionality
document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.querySelector(".language-selector");
  const currentLanguage = document.querySelector(".current-language");
  const langDropdown = document.querySelector(".language-dropdown");

  // Toggle dropdown
  currentLanguage.addEventListener("click", (e) => {
    e.stopPropagation();
    languageSelector.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!languageSelector.contains(e.target)) {
      languageSelector.classList.remove("active");
    }
  });

  // Language selection
  langDropdown.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      currentLanguage.querySelector(".lang-code").textContent =
        lang.toUpperCase();
      languageSelector.classList.remove("active");

      // Update page language
      document.documentElement.lang = lang;
      translatePage(lang);

      // Save preference
      localStorage.setItem("language", lang);
    });
  });

  // Initialize language
  function initLanguage() {
    const savedLang =
      localStorage.getItem("language") ||
      (navigator.language.startsWith("fr")
        ? "fr"
        : navigator.language.includes("bi")
        ? "bis"
        : "en");

    document.documentElement.lang = savedLang;
    if (currentLanguage) {
      currentLanguage.querySelector(".lang-code").textContent =
        savedLang.toUpperCase();
    }
    translatePage(savedLang);
  }

  initLanguage();
});

// Translation function
// Translation function
function translatePage(lang) {
  const translations = {
    en: {
      // Header
      title: "TECHAUS Vanuatu | Software Development",
      home: "Home",
      services: "Services",
      team: "Team",
      contact: "Contact",
      "lang-code": "EN",
      english: "English",
      french: "Français",
      bislama: "Bislama",

      // Hero Section
      "emerging-tech": "Emerging Tech Solutions",
      "we-are": "We are",
      techaus: "TECHAUS VANUATU",
      "startup-desc":
        "A fresh startup software development team based in Vanuatu, we are specialized in database design and web/mobile application development.",
      "focus-desc":
        "We focus on creating efficient, practical solutions for local businesses. Our current expertise includes:",
      "custom-db": "Custom database design and implementation",
      "responsive-web": "Responsive web development",
      "mobile-apps": "Mobile-friendly applications",
      "modern-uiux": "Modern UI/UX design",
      "contact-us": "Contact us",

      // Services Section
      "db-design": "Database Design",
      "db-desc":
        "Custom database architecture tailored to your business needs, with efficient data organization and management.",
      "web-dev": "Web Development",
      "web-desc":
        "Responsive, modern websites built with Vanuatu's connectivity in mind, optimized for local conditions.",
      "app-dev": "App Development",
      "app-desc":
        "Lightweight mobile applications designed to work reliably across Vanuatu's network infrastructure.",
      "system-integration": "System Integration",
      "integration-desc":
        "Connecting your existing tools and databases to work together seamlessly.",

      // Team Section
      "samuel-george": "Samuel George",
      "samuel-role": "Founder & Network/Software Engineer",
      "samuel-bio":
        "Network and Security graduate from USP in Fiji with a focus on network security and software development.",
      "david-palavi": "David Palavi",
      "david-role": "Co-Founder & Software Developer",
      "david-bio":
        "Software Engineering graduate from USP Fiji with a passion for creating impactful software solutions.",

      // Contact Section
      "get-in-touch": "Get In Touch",
      "ready-to-start": "Ready to start your project?",
      "love-to-hear":
        "We'd love to hear about your software needs and discuss how we can help bring your ideas to life.",
      email: "hello@techhaus.vu",
      phone: "+678 123 4567",
      location: "Port Vila, Vanuatu",
      "your-name": "Your Name",
      "your-email": "Your Email",
      subject: "Subject",
      "your-message": "Your Message",
      "send-message": "Send Message",

      // Footer
      "footer.techhaus": "TECHHAUS",
      "footer.vanuatu": "VANUATU",
      "footer.description": "Custom software solutions for the Pacific region.",
      "footer.quick_links_title": "Quick Links",
      "footer.link_home": "Home",
      "footer.link_services": "Services",
      "footer.link_team": "Team",
      "footer.link_contact": "Contact",
      "footer.services_title": "Services",
      "footer.service_database_design": "Database Design",
      "footer.service_web_development": "Web Development",
      "footer.service_app_development": "App Development",
      "footer.service_system_integration": "System Integration",
      "footer.follow_us_title": "Follow Us",
      "footer.copyright": "© 2025 TECHHAUS Vanuatu. All rights reserved.",
    },
    fr: {
      // Header
      title: "TECHAUS Vanuatu | Développement Logiciel",
      home: "Accueil",
      services: "Services",
      team: "Équipe",
      contact: "Contact",
      "lang-code": "FR",
      english: "English",
      french: "Français",
      bislama: "Bislama",

      // Hero Section
      "emerging-tech": "Solutions Technologiques Émergentes",
      "we-are": "Nous sommes",
      techaus: "TECHAUS VANUATU",
      "startup-desc":
        "Une nouvelle équipe de développement logiciel basée à Vanuatu, spécialisée dans la conception de bases de données et de développement d'applications web/mobiles.",
      "focus-desc":
        "Nous nous concentrons sur la création de solutions efficaces et pratiques pour les entreprises locales. Notre expertise actuelle comprend:",
      "custom-db":
        "Conception et implémentation de bases de données personnalisées",
      "responsive-web": "Développement web responsive",
      "mobile-apps": "Applications adaptées aux mobiles",
      "modern-uiux": "Design UI/UX moderne",
      "contact-us": "Contactez-nous",

      // Services Section
      "db-design": "Conception de Base de Données",
      "db-desc":
        "Architecture de base de données personnalisée adaptée à vos besoins commerciaux, avec une organisation et une gestion efficaces des données.",
      "web-dev": "Développement Web",
      "web-desc":
        "Sites web modernes et responsifs conçus en tenant compte de la connectivité à Vanuatu, optimisés pour les conditions locales.",
      "app-dev": "Développement d'Applications",
      "app-desc":
        "Applications mobiles légères conçues pour fonctionner de manière fiable sur l'infrastructure réseau de Vanuatu.",
      "system-integration": "Intégration Système",
      "integration-desc":
        "Connecter vos outils et bases de données existants pour qu'ils fonctionnent ensemble de manière transparente.",

      // Team Section
      "samuel-george": "Samuel George",
      "samuel-role": "Fondateur & Ingénieur Réseau/Logiciel",
      "samuel-bio":
        "Diplômé en Réseaux et Sécurité de l'USP aux Fidji avec une spécialisation en sécurité réseau et développement logiciel.",
      "david-palavi": "David Palavi",
      "david-role": "Co-Fondateur & Développeur Logiciel",
      "david-bio":
        "Diplômé en Génie Logiciel de l'USP Fidji avec une passion pour la création de solutions logicielles impactantes.",

      // Contact Section
      "get-in-touch": "Contactez-Nous",
      "ready-to-start": "Prêt à commencer votre projet?",
      "love-to-hear":
        "Nous serions ravis d'entendre parler de vos besoins logiciels et de discuter de la façon dont nous pouvons vous aider à concrétiser vos idées.",
      email: "hello@techhaus.vu",
      phone: "+678 123 4567",
      location: "Port Vila, Vanuatu",
      "your-name": "Votre Nom",
      "your-email": "Votre Email",
      subject: "Sujet",
      "your-message": "Votre Message",
      "send-message": "Envoyer le Message",

      // Footer
      "footer.techhaus": "TECHHAUS",
      "footer.vanuatu": "VANUATU",
      "footer.description":
        "Solutions logicielles personnalisées pour la région Pacifique.",
      "footer.quick_links_title": "Liens Rapides",
      "footer.link_home": "Accueil",
      "footer.link_services": "Services",
      "footer.link_team": "Équipe",
      "footer.link_contact": "Contact",
      "footer.services_title": "Services",
      "footer.service_database_design": "Conception de Base de Données",
      "footer.service_web_development": "Développement Web",
      "footer.service_app_development": "Développement d'Applications",
      "footer.service_system_integration": "Intégration Système",
      "footer.follow_us_title": "Suivez-Nous",
      "footer.copyright": "© 2025 TECHHAUS Vanuatu. Tous droits réservés.",
    },
    bis: {
      // Header
      title: "TECHAUS Vanuatu | Devlopmen Software",
      home: "Home",
      services: "Sevis blong mifala",
      team: "Tim blong mifala",
      contact: "Kontakt",
      "lang-code": "BIS",
      english: "English",
      french: "Français",
      bislama: "Bislama",

      // Hero Section
      "emerging-tech": "Araesing Teknoloji Soluson",
      "we-are": "Mifala i",
      techaus: "TECHAUS VANUATU",
      "startup-desc":
        "Mifala wan niu tim blong Software developmen we i stap long Vanuatu, mifala i spesel long wokem database mo web/mobile aplikesen.",
      "focus-desc":
        "Mifala i fokas long wokem praktikel soluson we i kivim benifit long ol bisnis blong manples. Ol samting mifala i save mekem:",
      "custom-db": "Wokem database we i suitum bisnis blong yu",
      "responsive-web": "Wokem website we i save wok long different divaes",
      "mobile-apps": "Wokem Mobile applikesen",
      "modern-uiux": "Wokem gudfala UI/UX design",
      "contact-us": "Kontaktem Mifala",

      // Services Section
      "db-design": "Wokem Database",
      "db-desc":
        "Wokem database we i stret long nid blong bisnis blong yu, we ol infomesen i stap gud insaed.",
      "web-dev": "Wokem Website",
      "web-desc":
        "Ol website we i save wok gud long different divaes, we i stret long bisnis blong yu.",
      "app-dev": "Wokem Aplikesen",
      "app-desc":
        "Ol aplikesen we i laet mo i save wok gud long bisnis blong you.",
      "system-integration": "System integresen",
      "integration-desc": "Mekem ol system mo database blong yu i wok tugeta.",

      // Team Section
      "samuel-george": "Samuel George",
      "samuel-role": "Faonda mo Enjinia blong Network/Software",
      "samuel-bio":
        "Graduet blong Network mo Sekuriti long USP long Fiji, we i speselize long network Sekuriti mo Software developmen .",
      "david-palavi": "David Palavi",
      "david-role": "Ko-Faonda mo Devlopa blong Software",
      "david-bio":
        "Graduet blong Enjinia blong Software long USP Fiji, we i kat passion blong mekem change wetem software soluson.",

      // Contact Section
      "get-in-touch": "Toktok long Mifala",
      "ready-to-start": "Yu redi blong statem projek blong yu?",
      "love-to-hear":
        "Mifala i laekem blong harem nid blong yu long software we yu nidim and  helpem mekem ol idea blong yu i kam tru.",
      email: "hello@techhaus.vu",
      phone: "+678 123 4567",
      location: "Port Vila, Vanuatu",
      "your-name": "Nem blong Yu",
      "your-email": "Email blong Yu",
      subject: "Subjek",
      "your-message": "Mesej blong Yu",
      "send-message": "Sendem Mesej",

      // Footer
      "footer.techhaus": "TECHHAUS",
      "footer.vanuatu": "VANUATU",
      "footer.description":
        "Ol soluson blong Software we i suitum nid blong Pasifik.",
      "footer.quick_links_title": "Ol Kwik Link",
      "footer.link_home": "Home",
      "footer.link_services": "Sevis",
      "footer.link_team": "Tim",
      "footer.link_contact": "Kontaktem",
      "footer.services_title": "Sevis",
      "footer.service_database_design": "Wokem Database",
      "footer.service_web_development": "Wokem Website",
      "footer.service_app_development": "Wokem Aplikesen",
      "footer.service_system_integration": "System Integresen",
      "footer.follow_us_title": "Folem Mifala",
      "footer.copyright": "© 2025 TECHHAUS Vanuatu. Ol raet olgeta i stap.",
    },
  };

  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update form placeholders if needed
  document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });
}
