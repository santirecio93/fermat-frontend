import { createContext, useContext, useState, useEffect } from "react";
import translations from "../i18n/translations";

const LanguageContext = createContext();

const getInitialLang = () => {
  const saved = localStorage.getItem("lang");
  return saved === "en" || saved === "es" ? saved : "es";
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  // t("hero.title") → busca la clave anidada; puede devolver strings, arrays u objetos
  const t = (key) =>
    key.split(".").reduce((obj, part) => (obj == null ? obj : obj[part]), translations[lang]) ?? key;

  return (
    <LanguageContext.Provider value={{ lang, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
