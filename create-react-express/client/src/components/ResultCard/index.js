import React from "react";

function ResultCard ({title, image,author,synopsis}){
  return (
    <div> 
      <h2>{title}</h2>
      
      <p> {author} </p>
      <p> {synopsis} </p>
      <img src={image} alt=""/>
      <button type= "button"> view</button>
      <button type= "button"> save </button>
    </div>
  )
}
export default ResultCard;