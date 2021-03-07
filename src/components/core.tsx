import React from 'react';

import { Main } from './main/Main';
import '../code/helpers/translation/i18n/config';
import { useTranslation } from 'react-i18next';

export function Core() {
    const { t } = useTranslation(['core']);

    document.title = t('core:title');

    return (
        <>
            <noscript>{t('core:javascript-advise')}</noscript>
            <Main />
        </>
    );
}
