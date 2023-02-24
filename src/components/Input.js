import React, { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';

const Input = () => {
    const {inputValue, setInputValue} = useContext(TranscriptContext);

    const handleChange = (e) => setInputValue(e.target.value);

  return (
    <textarea id='input' onChange={handleChange} value={inputValue}/>
  )
}

export default Input;