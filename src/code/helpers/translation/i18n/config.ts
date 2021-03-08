import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import coreEn from './en/core.json';
import menuEn from './en/menu.json';
import personalEn from './en/personal.json';

import corePT from './pt-br/core.json';
import menuPT from './pt-br/menu.json';
import personalPT from './pt-br/personal.json';

export const resources = {
    en: {
        core: coreEn,
        menu: menuEn,
        personal: personalEn,
    },
    pt: {
        core: corePT,
        menu: menuPT,
        personal: personalPT,
    }
} as const;

i18n.use(initReactI18next).init({
    lng: 'pt-br',
    ns: ['core', 'menu', 'personal'],
    resources,
});
