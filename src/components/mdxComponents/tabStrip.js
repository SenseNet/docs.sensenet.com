import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { StaticQuery, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./cBlock";
import CopyToClipBoard from "./CopyToClipBoard";
import { LanguageContext } from '../../context/LanguageContext';
import langs from './langs';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgb(245, 242, 240)',
    display: 'flex',
    height: 224,
    position: 'relative',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    minWidth: '120px',
    fontSize: '0.775rem',
    minHeight: '40px',
  },
  panel: {
    marginTop: '20px',
    paddingLeft: '10px',
    width: '80%',
    overflow: 'auto',
  },
}));

const TabPanel = ({ children, value, index, ...other }) => {
  const classes = useStyles();
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      className={classes.panel}
    >
      {value === index && (
        <Box>
          <ReactMarkdown source={children} renderers={{ code: CodeBlock }} />
        </Box>
      )}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
};

const sortNodes = (nodes) => {
  const sorted = [];
  nodes.forEach((node) => {
    const index = langs.findIndex(lang => lang.name.toLowerCase() === node.name.toLowerCase());
    sorted[index] = node;
  });
  return sorted;
};

const getRelatedNodes = (nodes, example, article) => {
  const relatedNodes = nodes.filter((node) => {
    const pathArray = node.relativeDirectory.split('/');
    return pathArray[1] === example && pathArray[0] === article;
  });
  return sortNodes(relatedNodes);
};

const TabStrip = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const { lang, toggleLanguage } = useContext(LanguageContext);
  const [copyText, setCopyText] = useState('');

  const handleChange = (event, newValue) => {
    toggleLanguage(langs[newValue].name);
  };

  return (
    <StaticQuery
      query={graphql`
        query FileByCategoryAndArticle {
          allExample {
            nodes {
              internal {
                content
              }
              relativeDirectory
              name
            }
          }
        }
      `}
      render={(data) => {
        const relatedNodes = getRelatedNodes(data.allExample.nodes, props.example, props.article);
        const currentLangIndex = langs.findIndex(l => l.name === lang);

        return (
          <div className={classes.root}>
            <CopyToClipBoard content={copyText} />
            <Tabs
              value={currentLangIndex}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              orientation="vertical"
              variant="scrollable"
              className={classes.tabs}
            >
              {langs.map((lang, index) => (
                <Tab
                  key={`${lang.name}-tab`}
                  label={lang.title}
                  {...a11yProps(index)}
                  className={classes.tab}
                />
              ))}
            </Tabs>
            {relatedNodes.map((node, i) => {
              const nodeLangIndex = langs.findIndex(l => l.name.toLowerCase() === lang.toLowerCase());
              if (i === nodeLangIndex) {
                setCopyText(node.internal.content);
              }
              return (
                <TabPanel key={node.name} value={nodeLangIndex} index={i} dir={theme.direction}>
                  {node.internal.content}
                </TabPanel>
              );
            })}
          </div>
        );
      }}
    />
  );
};

export default TabStrip;
