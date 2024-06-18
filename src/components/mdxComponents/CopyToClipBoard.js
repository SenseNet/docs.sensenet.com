import * as React from "react";

const CopyToClipBoard = (props) => {
  let { textToCopy, lang, example } = props;
  let nodes = props.data.allExample.nodes;

  const copy = () => {
    const textField = document.createElement('textarea')
    textField.innerText = textToCopy;
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  const getCopyText = () => {
    textToCopy = nodes.find(n => n.name.toLowerCase() === lang.toLowerCase() && n.relativeDirectory.split('/')[1] === example).internal.content;
    copy();
  }

  React.useEffect(() => {
    getCopyText();
  })

  return(
      <a style={{
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
      }} onClick={copy}>Copy</a>
  )
}

export default CopyToClipBoard
