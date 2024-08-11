import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="search-box">
      <form>
        <input type="text" placeholder='search for pet' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default SearchBar