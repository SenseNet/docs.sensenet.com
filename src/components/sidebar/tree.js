import React, {useState} from 'react';
import config from '../../../config';
import sideMenuConfig from '../../../sidemenuConfig';
import TreeNode from './treeNode';


if (typeof window === 'undefined') {
  global.window = {
    location: {
      href: ''
    }
  }
}

const calculateTreeData = (edges, l) => {
  const originalData = config.sidebar.ignoreIndex ?
  edges.filter(({node: {fields: {slug}}}) => slug !== '/' && !slug.split('/').length < 3 && slug.includes(l.split('/')[1]) && !slug.includes(`-${l.split('/')[1]}`)) : edges;

  edges.filter(({node: {fields: {slug}}}) => slug !== l.split('/')[1])

  const tree = originalData.reduce((accu, {node: {fields: {slug, title}}}) => {
    const parts = slug.split('/');
    let {items: prevItems} = accu;
    for (const part of parts.slice(1, -1)) {
      let tmp = prevItems.find(({label}) => label == part);
      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = {label: part, items: []};
        prevItems.push(tmp)
      }
      prevItems = tmp.items;
    }
    const existingItem = prevItems.find(({label}) => label === parts[parts.length - 1]);
    if (existingItem) {
      existingItem.url = slug;
      existingItem.title = title;
    } else {
      prevItems.push({
        label: parts[parts.length - 1],
        url: slug,
        items: [],
        title
      });
    }
    return accu;
  }, {items: []});
  const {forcedNavOrder = []} = sideMenuConfig[getConfigNameByLocation(l)];
  const tmp = [...forcedNavOrder];
  tmp.reverse();
  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');
    let {items: prevItems} = accu;
    for (const part of parts.slice(1, -1)) {
      let tmp = prevItems.find((pI) => pI && pI.label == part);
      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = {label: part, items: []};
          prevItems.push(tmp)
      }
      prevItems = tmp.items;
    }
    // sort items alphabetically.
    prevItems.map((item) => {
      item.items = item.items
        .sort(function (a, b) {
          if (a.label < b.label)
            return -1;
          if (a.label > b.label)
            return 1;
          return 0;
        });
    })
    const index = prevItems.findIndex(({label}) => label === parts[parts.length - 1]);
    accu.items.unshift(prevItems.splice(index, 1)[0]);
    return accu;
  }, tree);
}


const Tree = ({edges, location}) => {

  const [treeData] = useState(() => {
    if(['api-docs', 'concepts', 'guides', 'tutorials', 'faq', 'restapi', 'usecases', 'integrations'].some(element => location.includes(element))){
      return calculateTreeData(edges, location);
    } else {
      return { items: []};
    }
  });
  const defaultCollapsed = {};

  treeData.items.forEach(item => {
    if (sideMenuConfig[getConfigNameByLocation(location)].collapsedNav && sideMenuConfig[getConfigNameByLocation(location)].collapsedNav.includes(item.url)) {
      defaultCollapsed[item.url] = true;
    } else {
      defaultCollapsed[item.url] = false;
    }
  });
  treeData.items.forEach(item => {

    const url = window.location.href.replace(/^.*\/\/[^\/]+/, '')
    if(url.includes(item.url)){
      defaultCollapsed[item.url] = false;
    }
    else if (item.url !== undefined){
      defaultCollapsed[item.url] = true;
    }
  })
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  treeData.items.forEach(item => {

    const url = window.location.href.replace(/^.*\/\/[^\/]+/, '')
    if(url.includes(item.url)){
      collapsed[item.url] = false;
    }
    else if (item.url !== undefined){
      collapsed[item.url] = true;
    }
  })
  treeData.items.filter(t => t.label !== location.split('/')[1])

  const toggle = (url) => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  }
  return (
    <TreeNode
      key={treeData.title}
      className={`${config.sidebar.frontline ? 'showFrontLine' : 'hideFrontLine'} firstLevel`}
      setCollapsed={toggle}
      collapsed={collapsed}
      path={location}
      {...treeData}

    />
  );
}

export default Tree


const getConfigNameByLocation = (location) => {
  let c = ''
  if (location.split('/')[1]  === 'api-docs'){
      c = 'apiDocs'
    } else if(location.split('/')[1]  === 'concepts') {
      c = 'concepts'
    } else if(location.split('/')[1]  === 'guides') {
      c = 'guides'
    } else if(location.split('/')[1]  === 'tutorials') {
      c = 'tutorials'
    } else if(location.split('/')[1]  === 'faq') {
      c = 'faq'
    } else if(location.split('/')[1]  === 'usecases') {
      c = 'usecases'
    } else if(location.split('/')[1]  === 'integrations') {
      c = 'integrations'
    } else if(location.split('/')[1]  === 'restapi') {
      c = 'restapi'
    } else {
      c = 'apiDocs'
  }
  return c
}
