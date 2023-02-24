import React, { createContext, useState } from 'react';

export const TranscriptContext = createContext({
    inputValue: "",
    setInputValue: () => {},
    outputValue: "",
    setOutputValue: () => {},
    resetInput: () => {},
    theme: "",
    setTheme: () => {}
})

const TranscriptProvider = ({children}) => {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [theme, setTheme] = useState("");

    const resetInput = () => setInputValue("");

    const value = {inputValue, setInputValue, resetInput, outputValue, setOutputValue, theme, setTheme};

  return (
    <TranscriptContext.Provider value={value}>{children}</TranscriptContext.Provider>
  )
}

export default TranscriptProvider;