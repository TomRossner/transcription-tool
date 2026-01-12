import { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';
import ToggleSwitch from './ToggleSwitch';
import {VscChromeClose} from "react-icons/vsc";
import { LS_setAutoTranscribe, LS_setFontSize, LS_setFontFamily } from '../utils/LS';

const Settings = () => {
    const {
        setDefaultFontSize,
        defaultFontSize,
        setSettingsTabOpen,
        isAutoTranscribeChecked,
        setIsAutoTranscribeChecked,
        defaultFont, setDefaultFont
    } = useContext(TranscriptContext);

    const handleDefaultFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDefaultFontSize(e.target.value);
    }

    const handleClose = () => {
        setSettingsTabOpen(false);
    }

    const handleAutoTranscribeCheckChange = () => {
        setIsAutoTranscribeChecked(!isAutoTranscribeChecked);
    }

    const handleSetDefaultFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDefaultFont(e.target.value);
    }

    const handleSave = () => {
        LS_setAutoTranscribe(isAutoTranscribeChecked);
        LS_setFontSize(defaultFontSize);
        LS_setFontFamily(defaultFont);
        setSettingsTabOpen(false);
    }

  return (
    <div className="w-full min-h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-[5px] absolute z-10 flex justify-center items-center">
      <div className="bg-white border border-gray-200 rounded-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[35%] max-h-[90vh] min-h-[40vh] mx-auto flex flex-col relative animate-[fadeIn_0.15s_forwards] shadow-xl">
        <div className="p-4 sm:p-6 pb-0 flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-black">Settings</h2>
          <span 
            className="flex items-center text-gray-600 hover:text-black p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors" 
            onClick={handleClose}
          >
            <VscChromeClose className="scale-150"/>
          </span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pt-4 flex flex-col gap-4 sm:gap-5">
          <div className="flex items-center justify-between gap-4 text-gray-900 font-semibold text-base relative">
            <p className="text-black">Auto-transcribe</p>
            <div className="flex items-center gap-3">
              <span className={`text-sm font-normal ${isAutoTranscribeChecked ? 'text-blue-600' : 'text-gray-400'}`}>
                {isAutoTranscribeChecked ? 'On' : 'Off'}
              </span>
              <ToggleSwitch state={isAutoTranscribeChecked} stateFunction={handleAutoTranscribeCheckChange}/>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 text-gray-900 font-semibold text-base relative">
            <p className="text-black">Default font size</p>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                min={10} 
                max={42} 
                step={2} 
                value={defaultFontSize} 
                onChange={handleDefaultFontSizeChange}
                className="text-lg w-[60px] p-2 border-2 border-gray-300 rounded-md bg-white text-black focus:border-blue-500 focus:outline-none"
              />
              <span className="text-gray-700">px</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 text-gray-900 font-semibold text-base relative">
            <p className="text-black">Default font</p>
            <div className="min-w-[200px]">
              <select 
                value={defaultFont}
                onChange={handleSetDefaultFont}
                className="w-full p-2 text-base rounded-md border-2 border-gray-300 bg-white text-black focus:border-blue-500 focus:outline-none"
                dir="ltr"
              >
                <option value="Calibri">Calibri</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Gulzar">Gulzar</option>
                <option value="IBM Plex Sans Arabic">IBM Plex Sans</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4 sm:p-6 pt-4 border-t border-gray-200">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings;
