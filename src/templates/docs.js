import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import styled from "@emotion/styled";
import { Layout, Link } from "../components";
import NextPrevious from '../components/NextPrevious';
import '../components/styles.css';
import config from '../../config'
import sideMenuConfig from '../../sidemenuConfig';
import langs from '../components/mdxComponents/langs';



const Edit = styled('div')`
  padding: 1rem 1.5rem;
  text-align: right;

  a {
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    text-decoration: none;
    color: #555;
    border: 1px solid rgb(211, 220, 228);
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    color: rgb(36, 42, 49);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    height: 30px;
    padding: 5px 16px;
    &:hover {
      background-color: rgb(245, 247, 249);
    }
  }
`;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;
    if(!data) {
      return null;
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title }
      }
    } = data;
    const gitHub = require('../components/images/github.svg');
    const currentCategory = mdx.fields.slug.split('/')[1]

    let forcedNavOrder = []

    if(mdx.fields.slug.includes('api-docs'))
    {
      forcedNavOrder = sideMenuConfig.apiDocs.forcedNavOrder
    } else if (mdx.fields.slug.includes('concepts')) {
      forcedNavOrder = sideMenuConfig.concepts.forcedNavOrder
    } else if (mdx.fields.slug.includes('guides')){
      forcedNavOrder = sideMenuConfig.guides.forcedNavOrder
    } else if (mdx.fields.slug.includes('tutorials')){
      forcedNavOrder = sideMenuConfig.tutorials.forcedNavOrder
    }

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter(slug => slug !== "/" && !isExample(slug))
      // .filter(slug => slug.split('/')[1] === currentCategory)
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find(url => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          const prefix = cur.split("/").slice(0, -1).join('/');
          if (prefix && forcedNavOrder.find(url => url === prefix)) {
            return { ...acc, [prefix]: [...acc[prefix], cur] };
          } else {
            return { ...acc, items: [...acc.items, cur] };
          }
        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur]);
      }, [])
      .concat(navItems.items)
      .map(slug => {
        if(slug && !isExample(slug)) {
          const { node } = allMdx.edges.find(
            ({ node }) => node.fields.slug === slug
          );

          return { title: node.fields.title, url: node.fields.slug };
        }
      });
    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;
    const metaDescription = mdx.frontmatter.metaDescription;
    let canonicalUrl = config.gatsby.siteUrl;
    canonicalUrl = config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;
let classname = mdx.fields.slug.split('/')[1]
    return (
      <Layout {...this.props} className={classname}>
        <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null }
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="twitter:description" content={metaDescription} /> : null}
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <div className={'titleWrapper'}>
          <h1 className={'title'}>
            {mdx.fields.title}
          </h1>
          {mdx.parent.relativePath && !mdx.parent.relativePath.includes('rest-api-references') ? <Edit className={'mobileView'}>
            <Link className={'gitBtn'} to={`${docsLocation}/${mdx.parent.relativePath}`}>
              <img src={gitHub} alt={'Github logo'} /> Edit on GitHub
            </Link>
          </Edit> : null }
        </div>
        {mdx.frontmatter.onPremOnly ? <span className={'onpremBtn'}>on-premise only</span> : null}
        <div className={classname === 'api-docs' || classname === 'concepts' || classname === 'guides' || classname === 'tutorials' ? `mainWrapper` : `fullWrapper`}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
        {mdx.parent.relativePath && !mdx.parent.relativePath.includes('example-apps') && !mdx.parent.relativePath.includes('tutorials') && !mdx.parent.relativePath.includes('rest-api-references') ?
        <div className={'addPaddTopBottom'}>
          <NextPrevious mdx={mdx} nav={nav} />
        </div> :
        null
      }
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
        onPremOnly
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`;

const isExample = (path) => {
  const fileName = path.replace(/^.*[\\\/]/, '')
  return langs.findIndex(l => l.name === fileName) > -1
}
