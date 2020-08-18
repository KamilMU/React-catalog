import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [value, handleChange] = useState('')
  return (
    <div className="content-form">
      <form>
        <div>Search product</div>
        <input
          value={value}
          onChange={(e) => { onSearch(e.target.value); handleChange(e.target.value) }} />
      </form>
    </div>
  )
}

export default SearchBar