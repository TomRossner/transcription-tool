import React from 'react';

const Button = ({action, text, icon, color}) => {
  return (
    <button className={`button ${color}`} title={text} onClick={action}>
      <span>{icon}</span>
    </button>
  )
}

export default Button;