
import React from 'react'

if (typeof window === 'undefined') {
  global.window = {
    location: {
      href: ''
    }
  }
}

let params = new URLSearchParams(window.location.search);

export const LanguageContext = React.createContext({
  lang: params.get("chosenLanguage") ? params.get("chosenLanguage") : `rest`,
  toggleLanguage: () => {},
});
