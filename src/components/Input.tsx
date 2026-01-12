import { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';
import Button from './Button';
import {VscClearAll} from "react-icons/vsc";
import FontSizeInput from './FontSizeInput';
import FontSelection from './FontSelection';
import { LS_setFontFamily } from '../utils/LS';
import { useEffect } from 'react';

const Input = () => {
    const {inputValue, setInputValue, fontSize, resetInput, font, setFontFamily, defaultFont, theme} = useContext(TranscriptContext);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value);

    const reset = () => {
      resetInput();
    }

    const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFontFamily(e.target.value);
    }

    useEffect(() => {
      LS_setFontFamily(defaultFont);
    }, [defaultFont])

  return (
    <div className="flex flex-col w-full">
      <div className={`flex items-center justify-between w-full px-2 sm:px-4 gap-2 sm:gap-4 flex-wrap mb-4 ${theme === "dark" ? 'text-[rgba(255,255,255,0.8)]' : 'text-black'}`}>
        <p className="text-base sm:text-xl font-heebo font-medium" dir="rtl">הקלידו את הטקסט שלכם</p>
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <FontSizeInput/>
          <FontSelection state={font} action={handleFontChange}/>
          <Button
            action={reset}
            text="איפוס"
            icon={<VscClearAll className="text-xl"/>}
            color="red"
          />
        </div>
      </div>
      <textarea 
        id="input" 
        className="w-full min-h-[30vh] max-h-[30vh] rounded-lg px-3 py-2 sm:px-4 text-[rgba(0,0,0,0.8)] font-normal text-right bg-[rgba(255,255,255,0.92)] shadow-inner shadow-black/20 border-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 resize-none placeholder:italic" 
        style={{fontSize: Number(fontSize)}}
        dir="rtl"
        placeholder="הקלדו טקסט בערבית באותיות עבריות כאן"
        onChange={handleChange} 
        value={inputValue}
      />
    </div>
  )
}

export default Input;
