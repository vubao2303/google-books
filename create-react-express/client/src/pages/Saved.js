import React from "react";
import SavedBooks from "../components/Saved";
// import Result from "../components/Result";

function Saved() {
  const [books, setBooks] = useState([]);

  function loadBooks(event) {
    event.preventDefault();
    // console.log("loadedbooks")
    var searchName = event.target.value;
    if (searchName === "") {
      setBooks([]);
    }

    API.getBookList().then(() => {
      API.getBooks(searchName).then((books) => {
        setBooks(books)
      });
    })
      .catch(err => console.log(err));
  }
  
  return (
    <div>
      <SavedBooks />
    </div>
  );
}

export default Saved;