import { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';
import { ImFontSize } from 'react-icons/im';

const FontSizeInput = () => {
    const {theme, fontSize, setFontSize} = useContext(TranscriptContext);
    const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFontSize(e.target.value);
    
  return (
    <div className={`flex items-center gap-2 border rounded-md px-2 py-1 ${
      theme === "dark" 
        ? "border-white/20 bg-[rgba(255,255,255,0.1)]" 
        : "border-black/20 bg-white"
    }`} dir="ltr">
      <span className={theme === "dark" ? "text-white" : "text-black"}>
        <ImFontSize className="inline"/>:
      </span>
      <select 
        id="fontsize" 
        className={`text-lg border-none outline-none ${
          theme === "dark" ? "text-white bg-transparent" : "text-black bg-white"
        }`}
        value={fontSize} 
        onChange={handleFontSizeChange}
        style={{ color: theme === "dark" ? "white" : "black" }}
      >
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
