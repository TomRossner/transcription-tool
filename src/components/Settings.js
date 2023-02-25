import React, { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';
import ToggleSwitch from './ToggleSwitch';
import {VscChromeClose} from "react-icons/vsc";

const Settings = () => {
    const {setDefaultFontSize, defaultFontSize, setSettingsTabOpen, isAutoTranscribeChecked, setIsAutoTranscribeChecked} = useContext(TranscriptContext);

    const handleDefaultFontSizeChange = (e) => {
        setDefaultFontSize(e.target.value);
    }

    const handleClose = () => {
        setSettingsTabOpen(false);
    }

    const handleAutoTranscribeCheckChange = () => {
        setIsAutoTranscribeChecked(!isAutoTranscribeChecked);
    }

  return (
    <div className='settings-container'>
        <div className='settings-content'>
        <span className='icon-container' onClick={handleClose}><VscChromeClose className='icon'/></span>
            <div className='setting'>
                <p>Auto-transcribe</p>
                <ToggleSwitch state={isAutoTranscribeChecked} stateFunction={handleAutoTranscribeCheckChange}/>
            </div>
            <div className='setting'>
                <p>Default font size</p>
                <input type="number" min={10} max={42} step="2" value={defaultFontSize} onChange={handleDefaultFontSizeChange}/><span className='px'>px</span>
            </div>
        </div>
    </div>
  )
}

export default Settings;