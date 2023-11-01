import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'

const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <Link to={'detail/' + props.id}>
            <h2 className="name">{props.name}</h2>
            <h4>Region: {props.region}</h4>
            <h4>Element: {props.element}</h4>
            <h4>Weapon: {props.weapon}</h4>
          </Link>
      </div>
  );
};

export default Card;