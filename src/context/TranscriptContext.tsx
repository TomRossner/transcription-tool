import { createContext, useState, ReactNode } from 'react';
import { LS_getAutoTranscribe, LS_getFontFamily, LS_getFontSize, LS_getTheme } from '../utils/LS';

interface TranscriptContextType {
    inputValue: string;
    setInputValue: (value: string) => void;
    outputValue: string;
    setOutputValue: (value: string) => void;
    resetInput: () => void;
    theme: 'dark' | 'light';
    setTheme: (theme: 'dark' | 'light') => void;
    fontSize: string;
    setFontSize: (size: string) => void;
    resetFontSize: () => void;
    settingsTabOpen: boolean;
    setSettingsTabOpen: (open: boolean) => void;
    defaultFontSize: string;
    setDefaultFontSize: (size: string) => void;
    isAutoTranscribeChecked: boolean;
    setIsAutoTranscribeChecked: (checked: boolean) => void;
    font: string;
    setFontFamily: (font: string) => void;
    defaultFont: string;
    setDefaultFont: (font: string) => void;
}

export const TranscriptContext = createContext<TranscriptContextType>({
    inputValue: "",
    setInputValue: () => {},
    outputValue: "",
    setOutputValue: () => {},
    resetInput: () => {},
    theme: "light",
    setTheme: () => {},
    fontSize: "",
    setFontSize: () => {},
    resetFontSize: () => {},
    settingsTabOpen: false,
    setSettingsTabOpen: () => {},
    defaultFontSize: "20",
    setDefaultFontSize: () => {},
    isAutoTranscribeChecked: true,
    setIsAutoTranscribeChecked: () => {},
    font: "",
    setFontFamily: () => {},
    defaultFont: "",
    setDefaultFont: () => {}
})

interface TranscriptProviderProps {
    children: ReactNode;
}

const TranscriptProvider = ({children}: TranscriptProviderProps) => {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [theme, setTheme] = useState<'dark' | 'light'>(LS_getTheme());
    const [defaultFontSize, setDefaultFontSize] = useState(LS_getFontSize());
    const [fontSize, setFontSize] = useState(defaultFontSize);
    const [settingsTabOpen, setSettingsTabOpen] = useState(false);
    const [isAutoTranscribeChecked, setIsAutoTranscribeChecked] = useState(LS_getAutoTranscribe());
    const [defaultFont, setDefaultFont] = useState(LS_getFontFamily());
    const [font, setFontFamily] = useState(defaultFont);

    const resetInput = () => setInputValue("");
    const resetFontSize = () => setFontSize("20");

    const value: TranscriptContextType = {
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
      setFontFamily,
      defaultFont,
      setDefaultFont
    };

  return (
    <TranscriptContext.Provider value={value}>{children}</TranscriptContext.Provider>
  )
}

export default TranscriptProvider;
