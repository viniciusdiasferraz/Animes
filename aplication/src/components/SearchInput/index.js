import React, { useState } from 'react';


const SearchInput = ({ requestSearch }) => {
  const [search, SetSearch] = useState("")

  const animeFiltered = () => {
    if (search) {
      requestSearch
    }
    else if (search === "") {
      alert("Digite um Anime!")
    }
  }

  console.log(requestSearch, "pesquisa");
  console.log(search, "search");

  return (
    <>
      <input
        onChange={(e) => SetSearch(e.target.value.toLowerCase(search))}
        type="search"
        placeholder='Buscar'
      />
      <button onClick={() => { animeFiltered() }}>buscar</button>

    </>
  );
};

export default SearchInput;