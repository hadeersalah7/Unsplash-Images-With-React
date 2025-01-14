import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
 const {setSearchTerm} = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchInput = e.target.elements.search.value
    setSearchTerm(searchInput)
    if (!searchInput) return
    console.log(searchInput)
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">search</button>
      </form>
    </section>
  );
};

export default SearchForm;
