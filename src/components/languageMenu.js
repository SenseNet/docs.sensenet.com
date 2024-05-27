import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import langs from './mdxComponents/langs';
import { LanguageContext } from '../context/LanguageContext';
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
    borderTop: 'solid 1px #eee',
  },
  button: {
    borderRight: 'solid 1px #eee',
    borderRadius: '0px',
    padding: '10px 20px',
    fontWeight: 'normal',
    textTransform: 'none',
    minHeight: '64px',
  },
  active: {
    background: '#fff',
  },
  icon: {
    marginRight: '.5em',
    opacity: 0.8,
    color: 'rgba(0, 0, 0, 0.87)',
    maxHeight: '1em',
    lineHeight: '1em',
  },
  iconActive: {
    marginRight: '.5em',
    color: '#13a5ad',
    opacity: 0.8,
    maxHeight: '1em',
    lineHeight: '1em',
  },
}));

const languageIcons = {
  dotnet: faWindows,
  react: faReact,
  js: faJsSquare,
};

const CustomIcon = ({ isActive, icon, name, classes }) => {
  const classNames = isActive ? classes.iconActive : classes.icon;

  switch (name) {
    case 'dotnet':
    case 'react':
    case 'js':
      return <FontAwesomeIcon className={classNames} icon={icon} />;
    case 'rest':
      return <span className={classNames}>{'{ }'}</span>;
    case 'react-redux':
      return <span className={isActive ? 'snIcon active redux' : 'snIcon redux'}></span>;
    case 'js-snclient':
      return <span className={isActive ? 'snIcon active sensenet' : 'snIcon sensenet'}></span>;
    default:
      return <FontAwesomeIcon className={classNames} icon={faJsSquare} />;
  }
};

const LanguageMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={'hiddenMobile'} position="static" style={{ background: '#eee', color: 'rgba(0, 0, 0, 0.87)' }}>
        <Toolbar>
          {langs.map((l) => (
            <LanguageContext.Consumer key={`langMenu-${l.name}`}>
              {({ lang, toggleLanguage }) => {
                const isActive = lang === l.name;
                const icon = languageIcons[l.name] || null;
                return (
                  <Button
                    color="inherit"
                    className={`${classes.button} ${isActive ? classes.active : ''}`}
                    onClick={() => toggleLanguage(l.name)}
                  >
                    <CustomIcon isActive={isActive} icon={icon} name={l.name} classes={classes} />
                    {l.title}
                  </Button>
                );
              }}
            </LanguageContext.Consumer>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LanguageMenu;
