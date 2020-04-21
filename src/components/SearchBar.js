import React from 'react';
import '../components/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import Search from "./search"

const searchIndices = [
  { name: `Docs`, title: `Documents`, hitComp: `DocsHit` },
]

const SearchBar = () => {
  return (
    <div className="SearchContainer">
      <div className="BorderedContainer">
        <FontAwesomeIcon style={{width: '20px', color: "#555"}} icon={faSearch} />
        <Search collapse indices={searchIndices} />
      </div>
    </div>
  )
}

export default SearchBar
