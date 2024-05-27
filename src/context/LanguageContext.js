import React from 'react';

if (typeof window === 'undefined') {
  global.window = {
    localStorage: {
      getItem: () => null
    }
  };
}

let chosenLanguage = "rest";
if (typeof window !== 'undefined') {
  chosenLanguage = window.localStorage.getItem("chosenLanguage") || "rest";
}

export const LanguageContext = React.createContext({
  lang: chosenLanguage,
  toggleLanguage: () => {},
});
