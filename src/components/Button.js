import React, { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';

const Button = ({action, text, icon, color}) => {
  const {theme} = useContext(TranscriptContext);
  return (
    <button className={theme === "dark" ? `button dark ${color}` : `button ${color}`} title={text} onClick={action}>
      <span>{icon}</span>
    </button>
  )
}

export default Button;