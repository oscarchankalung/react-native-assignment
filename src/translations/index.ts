import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// resources
import tc from './resources/tc';
import sc from './resources/sc';
import en from './resources/en';

export const resources = {
  tc: { translation: tc },
  sc: { translation: sc },
  en: { translation: en },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'tc',
});

export default i18n;
