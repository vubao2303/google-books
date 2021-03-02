import React from "react";

function ResultCard (props){
  return (
    <div className= "container"> 
      <h2>{props.title}</h2>
      
      <p> {props.author} </p>
      <p> {props.synopsis} </p>
      <img src={props.image} alt=""/>
      <a  href = {props.link} target="_blank" > <button type= "button"> view</button> </a>
      <button type= "button"> save </button>
    </div>
  )
}
export default ResultCard;