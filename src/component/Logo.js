import React from 'react';
import './Logo.css';

function Logo(props) {
  return (
    <img className="App-logo" src={props.src} alt={props.alt} />
  );
}

export default Logo;
