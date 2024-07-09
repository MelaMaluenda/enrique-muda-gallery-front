//import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "EN" },
  { code: "es", lang: "ES" },
];

const Language = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="button__container">
      {languages.map((lng) => (
        <button
          key={lng.code}
          className="button--lang"
          onClick={() => changeLanguage(lng.code)}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
};

export default Language;

/* <div className="button__container">
    <button className="button--lang" onClick={() => i18n.changeLanguage("es")}>
      ESP
    </button>
    <button className="button--lang" onClick={() => i18n.changeLanguage("en")}>
      ENG
    </button>
  </div>; */
