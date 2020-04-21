import React from 'react';
import SearchBar from '../components/SearchBar';
import '../components/styles.css';
import content from '../../mainPageContent'

const MainPage = () => {
  return(
    <>
      <SearchBar />
            <div className="BoxContainer">
              {content.map((c, index) =>
                <div className="Box" key={`box-${index}`}>
                <div className="BoxInner">
                  <h3>{c.title}</h3>
                  <div className="BoxDescription">{c.description}</div>
                  <ul>
                    {c.links.map((link, i) =>
                      <li key={`link-${index}-${i}`}><a href={link.link}>{link.title}</a></li>
                      )}
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
