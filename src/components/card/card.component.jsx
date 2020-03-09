import React from 'react'

import './card.styles.css'

const Card = (props) => {
  return (
    <figure className="card-container">
      <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt={`${props.monster.name} monster`} />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </figure>
  )
}

export default Card
