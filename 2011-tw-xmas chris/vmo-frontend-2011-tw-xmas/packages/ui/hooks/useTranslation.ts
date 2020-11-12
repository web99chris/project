import { useState, useEffect, useCallback } from 'react';

import {
  getTranslation as getTranslationService,
  Translation as translationInterface,
} from '@vmo/share/services/translation.service';
import { PAGE_PATH } from '@vmo/web/constants/config';

const defaultLang = 'zh_TW';

const useTranslation = (startRender: boolean) => {
  const [translation, setTranslation] = useState<Map<string, string>>(
    new Map(),
  );
  const getTranslation = useCallback(async () => {
    // eslint-disable-next-line
    const response: translationInterface[] = require('../../web/constants/translations.json');
    if (response && response.length > 0) {
      const translationTransformed: Map<string, string> = new Map();
      response.forEach(item => {
        const { key } = item;
        const langItem = item.values.find(
          data => data.language === defaultLang,
        )!;
        let langValue = '';
        if (langItem) {
          langValue = langItem.value;
        } else {
          const zhLangItem = item.values.find(
            data => data.language === 'defaultLang',
          )!;
          if (zhLangItem) {
            langValue = zhLangItem.value;
          }
        }
        translationTransformed.set(key, langValue);
      });
      setTranslation(translationTransformed);
    }
  }, []);
  useEffect(() => {
    if (startRender) {
      getTranslation();
    }
  }, [getTranslation, startRender]);
  return translation;
};

export default useTranslation;
