import React from 'react'

import './search-box.styles.css'

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <div className="label-container">
        <label htmlFor="search-box">Search monsters: </label>
        <span id="search-box-hint" className="input-hint">Example: Patricia</span>
      </div>
      <input
        id="search-box"
        name="search-box"
        type="search"
        className="search-box" 
        placeholder={placeholder} 
        onChange={handleChange}
        aria-describedby="search-box-hint"
      />
    </div>
  )
}

export default SearchBox