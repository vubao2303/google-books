import React from "react";


function SearchForm (props) {
  // console.log(props)
  return (
    <div>
      <form >
        <label className="form-label">Look for your book</label>
        <input onChange={(event) => {
        event.preventDefault();
        // console.log("banana")
        props.loadBooks(event)
      }
      } placeholder='Search for a book title!' type="text" className="form-control" id="exampleInput" aria-describedby="" />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  )
}
export default SearchForm;

