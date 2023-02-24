import React, { useContext, useEffect, useRef, useState } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';
import {dictionary} from "../utils/dictionary";
import Button from './Button';
import {MdOutlineContentCopy} from "react-icons/md";
import {VscClearAll} from "react-icons/vsc";
import {IoMdDoneAll} from "react-icons/io";
import {IoWarningOutline} from "react-icons/io5";
import FontSizeInput from './FontSizeInput';

const Output = () => {
  const {inputValue, resetInput, theme, fontSize} = useContext(TranscriptContext);
  const [transcribedValue, setTranscribedValue] = useState();
  const textAreaRef = useRef();
  const [copied, setCopied] = useState(false);
  const [warning, setWarning] = useState([]);

  const transcribe = (text) => {
    const transcribedText = Array.from(text).map(letter => {

      const currentLetter = letter;
      // const nextLetter = text[letter + 1];
      // const combination = currentLetter + nextLetter;
  
      // if (combination in dictionary) return dictionary[combination];
      if (currentLetter in dictionary) return dictionary[currentLetter];
      else {
        if (warning.includes(letter)) return letter;
        setWarning([...warning, letter]);
        return letter;
      }
    })
    return checkForCombinations(transcribedText.join(""));
  }

  const checkForCombinations = (text) => {
    
  }

  const copyText = (e) => {
    if (!textAreaRef.current.value) return;
    setCopied(true);
    textAreaRef.current.select();
    navigator.clipboard.writeText(textAreaRef.current.value);
    e.target.focus();
  }

  const reset = () => {
    resetInput();
    setWarning([]);
  }

  const refreshWarning = () => {
    const lettersInWarningButNotInInputValueAnymore = warning.map(letter => {
      if (!inputValue.includes(letter)) return setWarning([...warning.filter(l => l !== letter)]);
      else return letter;
    })
    return lettersInWarningButNotInInputValueAnymore;
  }

  useEffect(() => {
    if (!inputValue) {
      refreshWarning();
      return setTranscribedValue("");
    }
    setTranscribedValue(transcribe(inputValue));
    refreshWarning();
  }, [inputValue])

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied])

  return (
    <>
    <div className='middle'>
      <div className='buttons-container'>
        <Button
          action={copyText}
          text={copied ? "Copied!" : "Copy"}
          icon={copied ? <IoMdDoneAll className={copied ? "icon copied" : "icon"}/> : <MdOutlineContentCopy className="icon"/>}
          color="green"
        />
        <Button
          action={reset}
          text="Clear"
          icon={<VscClearAll
          className="icon"/>}
          color="yellow"
        />
        <FontSizeInput/>
      </div>
      {warning.length ? <div className='warning-container'>
        <IoWarningOutline className='icon'/>
        <p className={theme === "dark" ? 'warning dark' : "warning"}><span>{warning.join(", ")}</span> {warning.length > 1 ? "are not in the dictionary": "is not in the dictionary"}</p>
      </div> : null}
    </div>
    <textarea ref={textAreaRef} id='output' style={{fontSize: Number(fontSize)}} readOnly value={transcribedValue}/>
    </>
  )
}

export default Output;