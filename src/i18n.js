import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import {translationEN} from "./locales/en";
import {translationRU} from "./locales/ru";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            ru: { translation: translationRU}
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    })
