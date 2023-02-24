import React, { createContext, useState } from 'react';

export const TranscriptContext = createContext({
    inputValue: "",
    setInputValue: () => {},
    outputValue: "",
    setOutputValue: () => {},
    resetInput: () => {}
})

const TranscriptProvider = ({children}) => {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");

    const resetInput = () => setInputValue("");

    const value = {inputValue, setInputValue, resetInput, outputValue, setOutputValue};

  return (
    <TranscriptContext.Provider value={value}>{children}</TranscriptContext.Provider>
  )
}

export default TranscriptProvider;