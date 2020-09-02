import React from 'react';

import './card.styles.css';

export const Card = (props) => {
  // console.log(props)
  return (
  <div className="card-container">
  <img alt="moster" src={getSrc(props)} />
    <h2 key={props.monster.id}>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
  )
}

function getSrc(props) {
  console.log("Inside getSrc",props)
  
  let src = `https://robohash.org/${props.monster.id}?set=set4&size=180x180`
  if (props.newGroup === "monsters") {
    src = `https://robohash.org/${props.monster.id}?set=set2&size=180x180`
  } else if(props.newGroup === "Humans") {
    src = `https://robohash.org/${props.monster.id}?set=set5&size=180x180`
  }
  return src
}