import React from 'react';
import '../components/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className="SearchContainer">
      <div className="BorderedContainer">
        <FontAwesomeIcon style={{width: '20px', color: "#555"}} icon={faSearch} />
        <input className="SearchInput" placeholder="Search documentation" />
      </div>
    </div>
  )
}

export default SearchBar
