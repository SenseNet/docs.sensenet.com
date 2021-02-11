
import React from 'react'

let params = new URLSearchParams(location.search);

export const LanguageContext = React.createContext({
  lang: params.get("chosenLanguage") ? params.get("chosenLanguage") : `rest`,
  toggleLanguage: () => {},
});
