import React from "react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import ThemeProvider from "./themeProvider";
import mdxComponents from "./mdxComponents";
import Sidebar from "./sidebar";
import RightSidebar from "./rightSidebar";
import LanguageMenu from './languageMenu';
import {LanguageContext} from '../context/LanguageContext'

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
`;
const RightSideBarWidth = styled('div')`
  width: 224px;
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

  const [state, setState] = React.useState({
    lang: typeof window != 'undefined' && localStorage.getItem('chosenLanguage') ? localStorage.getItem('chosenLanguage') : `REST`,
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
  else if(location.pathname.includes('example-apps')) {
    container = <MDXProvider components={mdxComponents}>
    <Wrapper>
      <Content>
        <MaxWidth>{children}</MaxWidth>
      </Content>
      <RightSideBarWidth className={'hiddenMobile'}>
        <RightSidebar location={location} />
      </RightSideBarWidth>
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
