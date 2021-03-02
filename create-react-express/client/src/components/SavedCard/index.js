import React from "react";

function SavedCard (props){
  return (
    <div className="container">
    <h2>{props.title}</h2>
    <p> {props.author} </p>
    <p> {props.synopsis} </p>
    <img src={props.image} alt="" />
    <a href={props.link} target="_blank" > <button type="button"> view</button> </a>
    <button type="button" onClick={(event) => {
      event.preventDefault();
      props.saveBooks({ title: props.title, author: props.author, synopsis: props.synopsis, image: props.image, link: props.link});
    }}> Delete </button>
  </div>
  )
}
export default SavedCard;