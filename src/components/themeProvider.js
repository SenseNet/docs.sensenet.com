import * as React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { default as defaultTheme } from "./theme";
import Header from './Header';
import Footer from './Footer'
import MainPage from '../pages/MainPage'
import './styles.css';

export default function ThemeProvider({ children, theme={}, location }) {
  let container
  if(location.pathname === '/'){
    container = <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <MainPage />
    </EmotionThemeProvider>
  } else {
    container = <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>
                {children}
              </EmotionThemeProvider>
  }
	return (
  	<div>
  		<Header location={location} />
	    {container}
      <Footer />
    </div>
  );
}
