import React from 'react';
import '../components/styles.css';
import content from '../../mainPageContent'

import apiDocsImg from '../images/api-docs.png'
import exampleAppsImg from '../images/example-apps.png'
import guidesImg from '../images/guides.png'
import conceptsImg from '../images/concepts.png'
import bestPracticeImg from '../images/best-practice.png'
import tutorialsImg from '../images/tutorials.png'
import Helmet from "react-helmet";

import jsLogo from "../images/js.png"
import netLogo from "../images/net.png"
import reactLogo from "../images/react.jpg"
import reduxLogo from '../images/redux.png'

const config = require("../../config");
const MainPage = () => {
  const metaTitle = config.siteMetadata.title
  const metaDescription = config.siteMetadata.description
  return(
    <>
    <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null }
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="twitter:description" content={metaDescription} /> : null}
        </Helmet>
        <div className="mainTextContainer">
            <h1>sensenet documentation</h1>
            <p>Welcome to the documentation for sensenet, a flexible development platform and a repository of unlimited content. Here you'll find the concept behind the features, API docs, tutorials, guides and many more. If you have any questions or are stuck somewhere, feel free to contact us on <a href="https://gitter.im/SenseNet/sensenet">gitter</a>.</p>
            <div class="registerButton">
              <a href="https://www.sensenet.com/en/contact" target="_blank">Register your free repo</a>
            </div>
        </div>
            <div className="BoxContainer">
              {content.map((c, index) =>
                <div className="Box" key={`box-${index}`}>
                <div className="BoxInner">
                  <h3>
                    <a href={c.link} title={c.title}>
                      <img src={getImgFromName(c.name)} className="BoxTitleImg" alt={c.title} />
                    {c.title}
                    </a>
                  </h3>
                  <div className="BoxDescription">{c.description}</div>
                  <ul>
                    {c.name !== 'api-docs' ? c.links.map((link, i) =>
                      <li key={`link-${index}-${i}`} className={c.name !== 'api-docs' ? 'listitem' : 'apilistitem'}><a href={link.link}>{link.title}</a></li>
                      ) :
                      <><li>API clients, frameworks and libs
                        <ul className="APIBoxList">
                          <li>
                            <a href="/api-docs/basic-concepts" title="JavaScript client">
                              <img src={jsLogo} alt="JavaScript client" />
                            </a>
                          </li>
                          <li>
                            <a href="/api-docs/basic-concepts" title=".NET client">
                              <img src={netLogo} alt=".NET client" />
                            </a>
                          </li>
                          <li>
                            <a href="/api-docs/basic-concepts" title="ReactJS">
                              <img src={reactLogo} alt="ReactJS" />
                            </a>
                          </li>
                          <li>
                            <a href="/api-docs/basic-concepts" title="Redux">
                              <img src={reduxLogo} alt="Redux" />
                            </a>
                          </li>
                        </ul>
                      </li>
                      </>
                      }
                  </ul>
                  <div className="BoxFooter">
                    <a href={c.link}>more</a>
                  </div>
                </div>
              </div>
                )}
            </div>
    </>
  )
}

export default MainPage

const getImgFromName = (name) => {
  let img
  switch(name){
    case 'api-docs':
      img = apiDocsImg
      break;
      case 'concepts':
        img = conceptsImg
        break;
        case 'guides':
          img = guidesImg
      break;
      case 'example-apps':
        img = exampleAppsImg
      break;
      case 'tutorials':
        img = tutorialsImg
      break;
      default:
        img = apiDocsImg
        break;
  }
  return img
}
