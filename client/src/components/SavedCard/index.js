import React from "react";

function SavedCard (props){
  return (
    <div className="container">
  
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-2">
      <img src={props.image} alt="..."/>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p> {props.author} </p>
        <p className="card-text">{props.synopsis}</p>
        <a href={props.link} target="_blank" > <button type="button"> view</button> </a>
      {/* pass onlick prop,  that will activate deletebook function */}
      <button type="button" onClick={props.onClick}
      > Delete </button>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
  }
  
export default SavedCard;



// ?Basic 
// return (
//   <div className="container">
//   <h2>{props.title}</h2>
//   <p> {props.author} </p>
//   <p> {props.synopsis} </p>
//   <img src={props.image} alt="" />
//   <a href={props.link} target="_blank" > <button type="button"> view</button> </a>
//   {/* pass onlick prop,  that will activate deletebook function */}
//   <button type="button" onClick={props.onClick}
//   > Delete </button>
// </div>
// )
// }