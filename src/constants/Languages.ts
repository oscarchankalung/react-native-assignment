export type LanguageKey = 'tc' | 'sc' | 'en';
export type LanguageName = '繁體中文' | '簡体中文' | 'English';
export type LanguageLabel = '繁' | '簡' | 'EN';
export type i18nLanguage = LanguageKey;

export type LanguageType = {
  name: LanguageName;
  label: LanguageLabel;
  i18n: i18nLanguage;
};

export const LANGUAGES: { [key in LanguageKey]: LanguageType } = {
  tc: {
    name: '繁體中文',
    label: '繁',
    i18n: 'tc',
  },
  sc: {
    name: '簡体中文',
    label: '簡',
    i18n: 'sc',
  },
  en: {
    name: 'English',
    label: 'EN',
    i18n: 'en',
  },
};
