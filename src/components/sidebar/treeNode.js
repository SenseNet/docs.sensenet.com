import React from "react";
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from "../link";
import langs from "../mdxComponents/langs";

const TreeNode = ({className = '', setCollapsed, collapsed, url, title, items, path, ...rest}) => {
  const isCollapsed = collapsed[url];
  const collapse = () => {
    setCollapsed(url)
  }
  const hasChildren = items.length !== 0;
  let location;
  if(typeof(document) != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === (config.gatsby.pathPrefix + url) || (location.pathname === config.gatsby.pathPrefix && url === '/basic-concepts'));
  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;
  return (
    <li
      id={url}
      className={calculatedClassName}
    >
      {title && (
        <Link
          to={url}
        >
          {title}
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button
              onClick={collapse}
              aria-label='collapse'
              className='collapser'>
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>)
      }

      {!isCollapsed && hasChildren ? (
        <ul>
          {items
          .filter(item => !item.url || !item.url.includes('/index'))
          .map((item) =>{
            if(item.url === undefined || !isExampleNode(item.url)){
           return (
            <TreeNode
              key={`${item.label}-${Math.random() * 100}`}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          )}})}
        </ul>
      ) : null}
    </li>
  );
}
export default TreeNode

const isExampleNode = (url) => {
  const fileName = url.replace(/^.*[\\\/]/, '')
  const isExample = langs.findIndex(lang => lang.name === fileName) > -1 ? true : false
  return isExample
}
