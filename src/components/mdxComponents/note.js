import * as React from "react";
import { Alert, AlertTitle } from '@material-ui/lab';

const createMarkup = (text) => { return {__html: text}; };

const Note = ({ children, title: title, ...props }) => {
  if(children) {
    return (
      <Alert severity={props.severity ? props.severity : `info`}>
        <AlertTitle>{title ? title : ``}</AlertTitle>
        <span>{children}</span>
      </Alert>
    );
  } else {
    return null;
  }
};

export default Note;
