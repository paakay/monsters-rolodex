import React from 'react'

import './card.styles.css'

const Card = (props) => {
  return (
    <figure className="card-container">
      <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt={`${props.monster.name} monster`} title={`${props.monster.username} from ${props.monster.address.city}`} />
      <h2>{props.monster.name}</h2>
      <>{props.monster.email}</>
    </figure>
  )
}

export default Card
