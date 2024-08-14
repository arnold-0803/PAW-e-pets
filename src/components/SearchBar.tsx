import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Open = {
  open: boolean;
}

const SearchBar: React.FC<Open> = ({open}) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filter) {
      navigate(`/search/${encodeURIComponent(filter)}`);
    }
  };

  return (
    <div className={open  ? "search-box active" : "search-box"}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='search for pet' onChange={handleSearch} required/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar;