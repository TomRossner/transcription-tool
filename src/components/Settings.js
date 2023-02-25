import React, { useContext, useEffect } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';
import ToggleSwitch from './ToggleSwitch';
import {VscChromeClose} from "react-icons/vsc";
import { LS_setAutoTranscribe, LS_setFontSize } from '../utils/LS';
import FontSelection from './FontSelection';

const Settings = () => {
    const {
        setDefaultFontSize,
        defaultFontSize,
        setSettingsTabOpen,
        isAutoTranscribeChecked,
        setIsAutoTranscribeChecked,
        defaultFont, setDefaultFont
    } = useContext(TranscriptContext);

    const handleDefaultFontSizeChange = (e) => {
        setDefaultFontSize(e.target.value);
    }

    const handleClose = () => {
        setSettingsTabOpen(false);
    }

    const handleAutoTranscribeCheckChange = () => {
        setIsAutoTranscribeChecked(!isAutoTranscribeChecked);
    }

    const handleSetDefaultFont = (e) => {
        setDefaultFont(e.target.value);
    }

    useEffect(() => {
        LS_setAutoTranscribe(isAutoTranscribeChecked);
        LS_setFontSize(defaultFontSize);
    }, [isAutoTranscribeChecked, defaultFontSize])

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
            <div className='setting'>
                <p>Default font</p>
                <FontSelection state={defaultFont} action={handleSetDefaultFont}/>
            </div>
        </div>
    </div>
  )
}

export default Settings;