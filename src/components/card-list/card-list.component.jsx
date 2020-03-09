import React from 'react'

import Card from "../card/card.component"

import './card-list.styles.css'

const cardList = (props) => {
  
  return (
    <section className="card-list">
      {
        props.monsters.map(monster => (
          <Card key={monster.key} monster={monster}/>
        ))
      }
    </section>
  )
}

export default cardList
