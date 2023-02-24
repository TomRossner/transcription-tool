import React, { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';
import { ImFontSize } from 'react-icons/im';

const FontSizeInput = () => {
    const {theme, fontSize, setFontSize} = useContext(TranscriptContext);
    const handleFontSizeChange = (e) => setFontSize(e.target.value);
    
  return (
    <div className={theme === "dark" ? "font dark" : "font"}>
        <span className={theme === "dark" ? "dark" : ""}><ImFontSize className='icon'/>:</span>
        <select type="number" id='fontsize' className={theme === "dark" ? "dark" : ""} value={fontSize} onChange={handleFontSizeChange}>
        <option value={10}>10</option>
        <option value={12}>12</option>
        <option value={14}>14</option>
        <option value={16}>16</option>
        <option value={18}>18</option>
        <option value={20}>20</option>
        <option value={22}>22</option>
        <option value={24}>24</option>
        <option value={26}>26</option>
        <option value={28}>28</option>
        <option value={30}>30</option>
        <option value={32}>32</option>
        <option value={34}>34</option>
        <option value={36}>36</option>
        <option value={38}>38</option>
        <option value={40}>40</option>
        <option value={42}>42</option>
        </select>
    </div>
  )
}

export default FontSizeInput;