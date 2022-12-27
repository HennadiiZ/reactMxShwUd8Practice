import React from 'react';
import classes from './Card.module.css';
// import './Card.css';

const Card = props => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    // <div className='card'>{props.children}</div>
  );
}

export default Card;