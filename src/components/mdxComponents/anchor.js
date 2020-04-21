import * as React from "react";

const AnchorTag = ({ children: link, ...props }) => {
  if(link) {
    return (
      <a href={props.href} target={props.target ? props.target : '_self'} rel="noopener">{link}</a>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
