import React from 'react';
import {Card} from '../card/card.component.jsx'
import './card-list.styles.css'

export const CardList =  (props) => {
  
  return (
    <div className='card-list'>

    {
        props.monster.map((monster) => (
          <Card key={monster.id} monster={monster} newGroup={props.changeto}/>
        // <h1 key={monster.id}> { monster.name }</h1>
      ))
    }
    </div>
  )
}