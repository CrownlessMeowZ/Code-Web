import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from './app-context';
import { readStorage, writeStorage } from '../utils/storage';

function normalizeLang(language) {
  return language?.startsWith('vi') ? 'vi' : 'en';
}

export function AppProvider({ children }) {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(() => readStorage('diva-theme', 'dark'));

  const lang = useMemo(() => normalizeLang(i18n.language), [i18n.language]);

  const setLang = useCallback((code) => {
    void i18n.changeLanguage(code);
  }, [i18n]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    writeStorage('diva-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    writeStorage('diva-lang', lang);
  }, [lang]);

  const value = useMemo(
    () => ({ theme, setTheme, lang, setLang, t }),
    [theme, lang, setLang, t],
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
