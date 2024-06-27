import React, { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import langs from './langs'
import { StaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
import CodeBlock from "./cBlock";
import CopyToClipBoard from "./CopyToClipBoard"
import {LanguageContext} from '../../context/LanguageContext'


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const code = children.split('\n')[1];
  const showNote = code.startsWith('GET') || code.startsWith('PUT') || code.startsWith('PATCH') || code.startsWith('DELETE');
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{
        marginTop: '20px',
        width: '100%',
        overflow: 'auto',
      }}
    >
      {value === index && <Box>
        <ReactMarkdown
    source={children}
    renderers={{ code: CodeBlock }}
        />
        {showNote && <Box className="rawNote"> &#128712; Special characters should be URL encoded </Box>}
</Box>}
    </Typography>
  );
}


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
}

const TabStrip = (props) => {
  const theme = useTheme();

  const [copyText, setCopyText] = useState('');

  const handleChange = (newValue, toggleLanguage) => {
    setValue(newValue);
    toggleLanguage(langs[newValue].name)
  };

  const path = `${props.category}/${props.article}/`

  return(
    <StaticQuery
    query={graphql`
    query FileByCategoryandArticle {
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
    render={(data) =>
    <LanguageContext.Consumer>
      {({lang, toggleLanguage}) => (
        <div style={{
          backgroundColor: theme.palette.background.paper,
          flexGrow: 1,
          display: 'flex',
          height: 229,
          backgroundColor: 'rgb(245, 242, 240)',
          position: 'relative'
        }}>
            <CopyToClipBoard lang={lang} data={data} example={props.example} />
        <Tabs
          value={langs.findIndex(l => l.name === lang)}
          onChange={(event, value) => toggleLanguage(langs[value].name)}
          indicatorColor="primary"
          textColor="primary"
          orientation="vertical"
          variant="scrollable"
            style={{
              left: 0,
              width: 198,
                borderRight: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignContent: 'center',
              }}
        >
            { langs.map((lang, index) =>{
              return <Tab
                disableRipple
                label={lang.title}
                {...a11yProps(lang.name)}
                key={`${lang.name}-tab`} />
            })}
        </Tabs>
        {
        getRelatedNodes(data.allExample.nodes, props.example, props.article).map((node, i) => {
          const text = langs.findIndex(l => l.name.toLowerCase() === lang.toLowerCase())

          return (<TabPanel key={`${node.name}`} value={text} index={i} dir={theme.direction} style={{ overflow: 'auto' }}>{node.internal.content}</TabPanel>)
          }
        )
      }
    </div>
      )}
    </LanguageContext.Consumer>
    }
  />
  )
}

export default TabStrip

const sortNodes = (nodes) => {
  const a = []
  nodes.map(node => {
    const index = langs.findIndex(lang => lang.name.toLowerCase() === node.name.toLowerCase())
    a[index] = node
  })
  return a
}


const getRelatedNodes = (nodes, example, article) => {
  const a = []
  nodes.map(node => {
    const pathArray = node.relativeDirectory.split('/')
    if (pathArray[1] === example && pathArray[0] === article) {
      a.push(node)
    }
  })
  return sortNodes(a)
}
