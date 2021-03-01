// ok, this is where all the shenanigans happen
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Search from '../components/Search';
import Results from '../components/Results';

function Books() {
  // ?set state 
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({});

  // useEffect(()=>{
  //   loadBooks();
  // },[search])

  // // fucntion loadBooks this will load all the book instead of just the one that is searched 
  // const loadBooks = ()=> {
  //   API.getBooks().then((books) => {
  //     setBooks(books)
  //     // console.log(users)
  //   })
  //     .catch(err => console.log(err));
  // }
  // this will incorperate the name of the search 
  function loadBooks(event) {
    console.log("loadedbooks")
    var searchName = event.target.value;
    API.getBookList().then(() => {
      API.getBooks(searchName).then((books) => {
        setBooks(books)
      });
    })
      .catch(err => console.log(err));
  }


  // // function search 
  // const updateSearch =e =>{
  //   setSearch(e.target.value)
  // }
  // const getSearch =e => {
  //   console.log("banana")
  //   e.preventDefault();
  //   loadBooks();
  // }
  return (
    <div>
      <Search onSubmit={loadBooks} />

      {books.map((book) => {
        return (<div> <Results
          title={book.title}
          image={book.image}
          author={book.author}
          synopsis={book.synopsis} />
        </div>
        )
      })}

    </div>
  );
}

export default Books;

