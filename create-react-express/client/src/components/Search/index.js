import React from "react";

function Search(props) {
  return (
    <div>
<form >
  <label  className="form-label">Look for your book</label>
  <input placeholder= 'Search for a book title!' type="text" className="form-control" id="exampleInput" aria-describedby="" />
  <button onSubmit={() => props.onSubmit()} type="submit" className="btn btn-primary">Search</button>
</form>
</div>
  )
}
export default Search;

