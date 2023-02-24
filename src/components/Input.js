import React, { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';

const Input = () => {
    const {inputValue, setInputValue, fontSize} = useContext(TranscriptContext);

    const handleChange = (e) => setInputValue(e.target.value);

  return (
    <textarea id='input' style={{fontSize: Number(fontSize)}} onChange={handleChange} value={inputValue}/>
  )
}

export default Input;