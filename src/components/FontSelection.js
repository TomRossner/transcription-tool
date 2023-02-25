import React, { useContext, useEffect } from 'react'
import { TranscriptContext } from '../context/TranscriptContext';
import { LS_setFontFamily } from '../utils/LS';

const FontSelection = () => {
    const {setFontFamily, font} = useContext(TranscriptContext);

    const handleFontChange = (e) => {
        setFontFamily(e.target.value);
    }

    useEffect(() => {
        console.log(font)
        LS_setFontFamily(font);
    }, [font])

  return (
    <select id='font-selection' value={font} onChange={handleFontChange}>
        <option value="Calibri">Calibri</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Gulzar">Gulzar</option>
        <option value="IBM Plex Sans Arabic">Plex Sans</option>
    </select>
  )
}

export default FontSelection;