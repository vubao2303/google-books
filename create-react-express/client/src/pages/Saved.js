import React, { useState } from "react";
import SavedCard from "../components/SavedCard";
import API from "../utils/API";
// import Result from "../components/Result";

function Saved() {
  const [books, setBooks] = useState([]);


  function saveBook() {
    API.getBooksLocal().then((books) => {
      setBooks(books.data)
    })
      .catch(err => console.log(err));
  };
saveBook();
// console.log (books)
  return (
    
    <div>

      {books.map((book, index) => {
        return (<SavedCard
          key={index}
          title={book.title}
          image={book.image}
          author={book.author}
          synopsis={book.synopsis}
          link={book.link}
         
        />
        )
      })}

    </div>
  );
}

export default Saved;