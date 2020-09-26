import React from 'react'

const notFound = ({data}) => {
  console.log(data)
  return(
    <>
    <h1>Ooops</h1>
    <h2>404</h2>
    <h3><a href="#">Content</a> not found</h3>
    </>
  )
}

export default notFound
