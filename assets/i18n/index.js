import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en/translation_en.json';
import ar from './ar/translation_ar.json';
import fr from './fr/translation_fr.json';
import { NativeModules, Platform } from 'react-native';


let deviceLanguage = Platform.OS === 'ios' ?
    NativeModules.SettingsManager.settings.AppleLocale:
    NativeModules.I18nManager.localeIdentifier;

const phoneLanguage = deviceLanguage.substring(0, 2);
const languages = ['en','fr','ar'];


const resources = {
    en: {
        translation: en
    },
    ar: {
        translation: ar
    },
    fr: {
        translation: fr
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next

    .init({
        resources,
        lng: languages.includes(phoneLanguage) ? phoneLanguage : "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        compatibilityJSON: 'v3',
    });

export default i18n;