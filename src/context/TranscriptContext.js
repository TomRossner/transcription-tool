import React, { createContext, useState, useEffect } from 'react';
import { LS_getAutoTranscribe, LS_getFontFamily, LS_getFontSize, LS_getTheme } from '../utils/LS';

export const TranscriptContext = createContext({
    inputValue: "",
    setInputValue: () => {},
    outputValue: "",
    setOutputValue: () => {},
    resetInput: () => {},
    theme: "",
    setTheme: () => {},
    fontSize: "",
    setFontSize: () => {},
    resetFontSize: () => {},
    settingsTabOpen: false,
    setSettingsTabOpen: () => {},
    defaultFontSize: 20,
    setDefaultFontSize: () => {},
    isAutoTranscribeChecked: true,
    setIsAutoTranscribeChecked: () => {},
    font: "",
    setFontFamily: () => {}
})

const TranscriptProvider = ({children}) => {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [theme, setTheme] = useState(LS_getTheme());
    const [defaultFontSize, setDefaultFontSize] = useState(LS_getFontSize());
    const [fontSize, setFontSize] = useState(defaultFontSize);
    const [settingsTabOpen, setSettingsTabOpen] = useState(false);
    const [isAutoTranscribeChecked, setIsAutoTranscribeChecked] = useState(LS_getAutoTranscribe());
    const [font, setFontFamily] = useState(LS_getFontFamily());

    const resetInput = () => setInputValue("");
    const resetFontSize = () => setFontSize(20);

    const value = {
      inputValue,
      setInputValue,
      resetInput,
      outputValue,
      setOutputValue,
      theme,
      setTheme,
      fontSize,
      setFontSize,
      resetFontSize,
      settingsTabOpen,
      setSettingsTabOpen,
      defaultFontSize,
      setDefaultFontSize,
      isAutoTranscribeChecked,
      setIsAutoTranscribeChecked,
      font,
      setFontFamily
    };

  return (
    <TranscriptContext.Provider value={value}>{children}</TranscriptContext.Provider>
  )
}

export default TranscriptProvider;