import { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';

interface FontSelectionProps {
  state: string;
  action: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FontSelection = ({state, action}: FontSelectionProps) => {
    const {theme} = useContext(TranscriptContext);

  return (
    <select 
      id="font-selection" 
      className={`p-1 text-base rounded-md border outline-none transition-colors ${
        theme === "dark" 
          ? "text-white border-white/20 bg-[rgba(255,255,255,0.1)]" 
          : "text-black border-black/20 bg-white"
      }`}
      style={{ color: theme === "dark" ? "white" : "black" }}
      dir="ltr"
      value={state} 
      onChange={action}
    >
      <option value="Calibri">Calibri</option>
      <option value="Times New Roman">Times New Roman</option>
      <option value="Gulzar">Gulzar</option>
      <option value="IBM Plex Sans Arabic">IBM Plex Sans</option>
    </select>
  )
}

export default FontSelection;
