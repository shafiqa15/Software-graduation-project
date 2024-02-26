// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en:{
    translation: {
      title: "Hello World",
      description: "This is a sample text in English.",
    },
  },
  ar:{
    translation: {
      title: "مرحبا بالعالم",
      description: "هذا نص تجريبي باللغة العربية.",
    },
  },
};

i18n
  .use(LanguageDetector) // Detects language from the browser
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng:"en", // Use English if detected lang is not available
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
  });

export default i18n;
