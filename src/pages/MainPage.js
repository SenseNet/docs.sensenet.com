import React from 'react';
import SearchBar from '../components/SearchBar';
import '../components/styles.css';
import content from '../../mainPageContent'

import apiDocsImg from '../images/api-docs.png'
import exampleAppsImg from '../images/example-apps.png'
import guidesImg from '../images/guides.png'
import conceptsImg from '../images/concepts.png'
import bestPracticeImg from '../images/best-practice.png'
import tutorialsImg from '../images/tutorials.png'

import jsLogo from "../images/js.png"
import netLogo from "../images/net.png"
import reactLogo from "../images/react.jpg"
import reduxLogo from '../images/redux.png'

const MainPage = () => {
  return(
    <>
      <SearchBar />
            <div className="BoxContainer">
              {content.map((c, index) =>
                <div className="Box" key={`box-${index}`}>
                <div className="BoxInner">
                  <h3>
                    <img src={getImgFromName(c.name)} className="BoxTitleImg" />
                    {c.title}
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
                              <img src={jsLogo} />
                            </a>
                          </li>
                          <li>
                            <a href="/api-docs/basic-concepts" title=".NET client">
                              <img src={netLogo} />
                            </a>
                          </li>
                          <li>
                            <a href="/api-docs/basic-concepts" title="ReactJS">
                              <img src={reactLogo} />
                            </a>
                          </li>
                          <li>
                            <a href="/api-docs/basic-concepts" title="Redux">
                              <img src={reduxLogo} />
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
  console.log(name)
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
      case 'usecases':
        img = bestPracticeImg
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
