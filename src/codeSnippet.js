// // "use strict"

// // import * as normalizePath from 'normalize-path'
// // import * as path from 'path'
// // import { StaticQuery, graphql } from "gatsby"

// // const CodeSnippet = (props) => {
// //     const { loading, error, data } = useQuery(CODE_SNIPPETS, { variables: { limit: 10 } })
// //     const directory = `/examples/${props.category}/${props.article}/`
// //     const fileName = props.langName
// //     // const snippetPath = normalizePath(path.join(directory, `${fileName}.md`))
// //     // let snippet = ` `
// //     return (<StaticQuery
// //       query={graphql`query FileByCategoryandArticle {
// //         allExample(limit: 10, filter: {relativeDirectory: {eq: "collection/children"}}) {
// //           nodes {
// //             internal {
// //               content
// //             }
// //             relativePath
// //             relativeDirectory
// //           }
// //         }
// //       `}
// //       render={data => (
// //       <code>
// //         data
// //       </code>
// //     )}
// //   />)
// // }

// // export default CodeSnippet
// import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import langs from './components/mdxComponents/langs'

// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// const useStyles = makeStyles(theme => ({
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
// }));

// const a11yProps = (index) => {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// export default (props) => {
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = index => {
//     setValue(index);
//   };

//   const [value, setValue] = React.useState(0);
//   const classes = useStyles();
//   const theme = useTheme();
//   return(
//   <StaticQuery
//     query={graphql`
//     query FileByCategoryandArticle {
//       allExample(filter: {relativeDirectory: {eq: "collection/children"}}) {
//         nodes {
//           internal {
//             content
//           }
//           relativeDirectory
//           name
//         }
//       }
//     }
//     `}
//     render={(data) => {
//       <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           orientation="vertical"
//           variant="scrollable"
//           className={classes.tabs}
//         >
//             { langs.map((lang, index) =>
//                <Tab disableRipple label={lang.title} {...a11yProps(index)} key={`${lang}-${index}-tab`} />
//             )
//           }
//         </Tabs>
//       data.allExample.nodes.map((node, index) =>
//       <TabPanel key={index} value={node.name} index={index} dir={theme.direction}>
//             aaaa
//             {node.internal.content}
//         </TabPanel>
//       )
//     }
//   }
//   />
// )}


// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box p={3}>{children}</Box>}
//     </Typography>
//   );
// }


// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

