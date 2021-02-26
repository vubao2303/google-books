import React from "react";
import Search from "../components/Search";

function Saved(props) {
  return (
    <div>
        <Search />
        <Result 
        bookData = {props}
        />
    </div>
  );
}

export default Saved;