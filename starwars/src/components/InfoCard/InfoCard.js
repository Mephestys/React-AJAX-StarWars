import React from 'react';
import { Link } from 'react-router-dom';
import "./InfoCard.css";

const InfoCard = props => {
  const character = props.character;

  return (
    <Link to={`/InfoSheet/${props.id}`} >
      <div className="InfoCard">
        <div className="InfoCard Name">
          {character.name}
        </div>
      </div>
    </Link>
  )
}

export default InfoCard;
