import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import langs from './mdxComponents/langs';
import {LanguageContext} from '../context/LanguageContext';
import { faWindows, faReact, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LanguageMenu = (props) => {

  return (
    <div style={{
      flexGrow: 1,
      boxShadow: 'rgba(116, 129, 141, 0.1) 0px 1px 1px 0px',
      color: '#333',
      borderTop: 'solid 1px #eee'
    }}>
      <AppBar  className={'hiddenMobile'} position="static" style={{ background: '#eee', color: 'rgba(0, 0, 0, 0.87)'}}>
        <Toolbar>
          {langs.map(l =>{
            const isActive = (lang, name) => lang === name;
            const icon = (lang, l) => {
              let i = `{ }`
              switch (l){
                case 'dotnet':
                  i = <FontAwesomeIcon className={isActive(lang, l) ? 'langMenuIconActive' : 'langMenuIcon'} icon={faWindows} />
                  break
                case 'react':
                  i = <FontAwesomeIcon className={isActive(lang, l) ? 'langMenuIconActive' : 'langMenuIcon'} icon={faReact} />
                  break
                case 'js':
                    i = <FontAwesomeIcon className={isActive(lang, l) ? 'langMenuIconActive' : 'langMenuIcon'} icon={faJsSquare} />
                    break
                case 'rest':
                  i = <span className={isActive(lang, l) ? 'langMenuIconActive' : 'langMenuIcon'}>{`{ }`}</span>
                  break
                case 'react-redux':
                    i = <span className={isActive(lang, l) ? 'snIcon active redux' : "snIcon redux"}></span>
                    break
                case 'js-snclient':
                      i = <span className={isActive(lang, l) ? 'snIcon active sensenet' : "snIcon sensenet"}></span>
                      break
                default:
                  i = <FontAwesomeIcon className={isActive(lang, l) ? 'langMenuIconActive' : 'langMenuIcon'} icon={faJsSquare} />
                  break
              }
              return i
            }
          return <LanguageContext.Consumer key={`langMenu-${l.name}`}>
            {({lang, toggleLanguage}) => {
              return (
              <Button color="inherit" className={isActive(lang, l.name) ? 'langButton' : 'langButtonActive'} onClick={() => toggleLanguage(l.name)}>
                {icon(lang, l.name)}
                {l.title}
              </Button>
            )}}
          </LanguageContext.Consumer>
          }
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default LanguageMenu
