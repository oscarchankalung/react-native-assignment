import 'react-i18next';
import { resources } from '../src/Translations';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources.tc;
  }
}
