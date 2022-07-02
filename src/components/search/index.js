import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {

  const history = useHistory();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    // const searchQuery = new URLSearchParams({
    //   name: searchInputRef.current.value
    // }).toString();

	const searchQuery = {
		name: searchInputRef.current.value
	  }
	  const queryString = new URLSearchParams(searchQuery).toString();


    history.push({ pathname: '/search', search: queryString})
	
	console.log(searchQuery)

	
  };
console.log(history)

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
