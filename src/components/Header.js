import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn'
import Link from './link';
import './styles.css';
import config from '../../config.js';
import { faGitter, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from '../components/SearchBar';
import Notifications from '@material-ui/icons/Notifications';

import Loadable from 'react-loadable';
import LoadingProvider from './mdxComponents/loading';

import Logo from '../images/sensenet-logo.png'

const help = require('../images/question.png');
const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];
if(isSearchEnabled && config.header.search.indexName) {
  searchIndices.push(
    { name: `${config.header.search.indexName}`, title: `Results`, hitComp: `PageHit` },
  );
}

import Sidebar from "./sidebar";

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const Header = ({location}) => (
  <StaticQuery
    query={
      graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              githubUrl
              helpUrl
              tweetText
              logo {
                link
                image
              }
              headerLinks {
                link
                text
              }
            }
          }
        }
        `}
    render={(data) => {
      const logoImg = require('./images/logo.svg');
      const twitter = require('../images/twitter.png');
      const {
        site: {
          siteMetadata: {
            headerTitle,
            githubUrl,
            helpUrl,
            tweetText,
            logo,
            headerLinks,
          }
        }
      } = data;
      const finalLogoLink = logo.link !== '' ? logo.link : '/';

      const isActive = (link) => link !== '/' && location.pathname.includes(link)
      return (
        <div className={'navBarWrapper'}>
          <nav className={location.pathname.includes('api-docs') ? 'navBarDefault' : 'navBarWithShadow'}>
            <div className={'navBarHeader'}>
              <Link to={finalLogoLink} className={'navBarBrand'}>
                <img className={'img-responsive displayInline'} src={Logo} alt={config.siteMetadata.title} />
              </Link>
              <Link to={finalLogoLink}>
              <div className={"headerTitle displayInline"} dangerouslySetInnerHTML={{__html: headerTitle}} />
              </Link>
              <ul className={'navBarUL navBarNav navBarULRight hiddenMobile'}>
                <li className="divider"></li>
                  {helpUrl !== '' ?
                    (<li style={{margin: 0}}><a href={helpUrl}><FontAwesomeIcon style={{width: '20px'}} icon={faGitter} /></a></li>) : null
                  }
                  {githubUrl !== '' ?
                    (<li className={'githubBtn'}>
                      <GitHubButton href={githubUrl} data-show-count="true" aria-label="Star on GitHub">Star</GitHubButton>
                    </li>) : null}
                  <li className="divider"></li>
              </ul>
              <SearchBar />
              <span onClick={myFunction} className={'navBarToggle'}>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
            </div>
            <div id="navbar" className={'topnav'}>
              <ul className={'navBarUL navBarNav navBarULRight'}>
                {headerLinks.map((link, key) => {
                  if(link.link !== '' && link.text !== '') {
                    return(
                      <li key={key} className={isActive(link.link) ? 'mainMenuItemActive' : 'mainMenuItem'}>
                        <a className="sidebarLink" href={link.link} rel="noopener" dangerouslySetInnerHTML={{__html: link.text}} />
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className={'hiddenMobile whatsNew'} id="olvy-trigger">
                <div className="divider"></div>
                <Notifications />
            </div>
          </nav>
        </div>
      );
    }}
  />
);

export default Header;
