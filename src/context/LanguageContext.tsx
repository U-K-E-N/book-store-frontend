/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

type Lang = 'en' | 'uk';

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
