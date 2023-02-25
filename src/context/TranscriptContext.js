import React, { createContext, useState } from 'react';

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
    isAutoTranscribeChecked: false, 
    setIsAutoTranscribeChecked: () => {}
})

const TranscriptProvider = ({children}) => {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [theme, setTheme] = useState("");
    const [defaultFontSize, setDefaultFontSize] = useState(20);
    const [fontSize, setFontSize] = useState(defaultFontSize);
    const [settingsTabOpen, setSettingsTabOpen] = useState(false);
    const [isAutoTranscribeChecked, setIsAutoTranscribeChecked] = useState(false);

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
      setIsAutoTranscribeChecked
    };

  return (
    <TranscriptContext.Provider value={value}>{children}</TranscriptContext.Provider>
  )
}

export default TranscriptProvider;