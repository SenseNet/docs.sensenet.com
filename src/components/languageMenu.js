import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import langs from './mdxComponents/langs';
import {LanguageContext} from '../context/LanguageContext';
import { faWindows, faReact, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  wrapper: {
    flexGrow: 1,
    boxShadow: 'rgba(116, 129, 141, 0.1) 0px 1px 1px 0px',
    color: '#333',
    borderTop: 'solid 1px #eee'
  },
  button: {
    borderRight: 'solid 1px #eee',
    borderRadius: '0px',
    padding: '10px 20px',
    fontWeight: 'normal',
    textTransform: 'none',
    minHeight: '64px'
  },
  active: {
    borderRight: 'solid 1px #eee',
    borderRadius: '0px',
    padding: '10px 20px',
    fontWeight: 'normal',
    textTransform: 'none',
    background: '#fff',
    minHeight: '64px',
  },
  icon: {
    marginRight: '.5em',
    opacity: .8,
    color: 'rgba(0, 0, 0, 0.87)',
    maxHeight: '1em',
    lineHeight: '1em'
  },
  iconActive: {
    marginRight: '.5em',
    color: '#13a5ad',
    opacity: .8,
    maxHeight: '1em',
    lineHeight: '1em'
  }
}));



const LanguageMenu = (props) => {
  const classes = useStyles();

  return (
<div className={classes.wrapper}>
      <AppBar  className={'hiddenMobile'} position="static" style={{ background: '#eee', color: 'rgba(0, 0, 0, 0.87)'}}>
        <Toolbar>
          {langs.map(l =>{
            const name = l.name
            const isActive = (lang, name) => lang === name;
            const icon = (lang, l) => {
              let i = `{ }`
              switch (l){
                case 'dotnet':
                  i = <FontAwesomeIcon className={isActive(lang, l) ? classes.iconActive : classes.icon} icon={faWindows} />
                  break
                case 'react':
                  i = <FontAwesomeIcon className={isActive(lang, l) ? classes.iconActive : classes.icon} icon={faReact} />
                  break
                case 'js':
                    i = <FontAwesomeIcon className={isActive(lang, l) ? classes.iconActive : classes.icon} icon={faJsSquare} />
                    break
                case 'rest':
                  i = <span className={isActive(lang, l) ? classes.iconActive : classes.icon}>{`{ }`}</span>
                  break
                case 'redux':
                    i = <span className={isActive(lang, l) ? 'snIcon active redux' : "snIcon redux"}></span>
                    break
                case 'jsclient':
                      i = <span className={isActive(lang, l) ? 'snIcon active sensenet' : "snIcon sensenet"}></span>
                      break
                default:
                  i = <FontAwesomeIcon className={isActive(lang, l) ? classes.iconActive : classes.icon} icon={faJsSquare} />
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
