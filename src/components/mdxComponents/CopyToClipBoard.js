import * as React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 10,
    cursor: 'pointer',
    backgroundColor: '#ebeef3',
    padding: '4px 8px',
    fontSize: '12px',
    color: '#5c5e6c',
    fontWeight: 500,
    borderRadius: '10%'
  },
}));

const CopyToClipBoard = (props) => {
  const classes = useStyles();

  const copy = () => {

    const textField = document.createElement('textarea')
    textField.innerText = props.content;
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return(
      <a className={classes.button} onClick={copy}>Copy</a>
  )}

export default CopyToClipBoard
