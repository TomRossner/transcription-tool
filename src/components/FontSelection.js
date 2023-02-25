import React, { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';

const FontSelection = ({state, action}) => {
    const {theme} = useContext(TranscriptContext);

  return (
    <select id='font-selection' className={theme === "dark" ? "dark" : ""} value={state} onChange={action}>
        <option value="Calibri">Calibri</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Gulzar">Gulzar</option>
        <option value="IBM Plex Sans Arabic">IBM Plex Sans</option>
    </select>
  )
}

export default FontSelection;