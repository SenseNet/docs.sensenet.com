import React from "react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import ThemeProvider from "./themeProvider";
import mdxComponents from "./mdxComponents";
import Sidebar from "./sidebar";
import RightSidebar from "./rightSidebar";
import LanguageMenu from './languageMenu';
import {LanguageContext} from '../context/LanguageContext'
import langs from './mdxComponents/langs';

if (typeof window === 'undefined') {
  global.window = {
    location: {
      href: ''
    }
  }
}

if (typeof localStorage === 'undefined') {
  global.localStorage = {
    setItem: () => {},
    getItem: () => {}
  }
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  margin: 0px 88px;
  margin-top: 3rem;

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    margin-top: 3rem;
  }
`;

const MaxWidth = styled('div')`

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

const LeftSideBarWidth = styled('div')`
  width: 298px;
  min-width: 298px;
`;
const RightSideBarWidth = styled('div')`
  width: 224px;
  min-width: 224px;
`;
const Layout = ({ children, location }) => {

  const toggleLanguage = (lang) => {

    if (typeof window != 'undefined') {
      localStorage.setItem('chosenLanguage', lang)
     }

    setState(state => ({
      lang: lang,
      toggleLanguage
    }));
  };

  const language = () => {
    const params = new URLSearchParams(window.location.search);
    let l = 'rest';
    if(typeof window != 'undefined'){
      if(params.get("chosenLanguage") && langs.findIndex(lang => lang.name === params.get("chosenLanguage")) > -1){
        l = params.get("chosenLanguage")
        localStorage.setItem('chosenLanguage', l)
      } else {
        if(localStorage.getItem('chosenLanguage')){
          l = localStorage.getItem('chosenLanguage')
        }
      }
    }
    return l
  }

  const [state, setState] = React.useState({
    lang: language(),
    toggleLanguage: toggleLanguage,
  });

  let container

  if(location.pathname.includes('api-docs')){
    container = <MDXProvider components={mdxComponents}>
    <LanguageContext.Provider value={state}>
      <LanguageMenu />
      <Wrapper>
        <LeftSideBarWidth className={'hiddenMobile leftSideBar'}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <RightSideBarWidth className={'hiddenMobile'}>
          <RightSidebar location={location} />
        </RightSideBarWidth>
      </Wrapper>
      </LanguageContext.Provider>

    </MDXProvider>
  }
  else if(location.pathname.includes('restapi')) {
    container = <MDXProvider components={mdxComponents}>
    <Wrapper>
    <LeftSideBarWidth className={'hiddenMobile leftSideBar restapi'}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
      <Content>
        <MaxWidth>{children}</MaxWidth>
      </Content>
    </Wrapper>
  </MDXProvider>
  } else {
    container = <MDXProvider components={mdxComponents}>
      <Wrapper>
        <LeftSideBarWidth className={'hiddenMobile leftSideBar'}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <RightSideBarWidth className={'hiddenMobile'}>
          <RightSidebar location={location} />
        </RightSideBarWidth>
      </Wrapper>
    </MDXProvider>
  }

  return (
  <ThemeProvider location={location}>
    {container}
  </ThemeProvider>
)};

export default Layout;
