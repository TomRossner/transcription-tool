import React, { useContext, useEffect, useRef, useState } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';
import {dictionary} from "../utils/dictionary";
import Button from './Button';
import {MdOutlineContentCopy} from "react-icons/md";
import {VscClearAll} from "react-icons/vsc";
import {IoMdDoneAll} from "react-icons/io";
import {IoWarningOutline} from "react-icons/io5";

const Output = () => {
  const {inputValue, resetInput} = useContext(TranscriptContext);
  const [transcribedValue, setTranscribedValue] = useState();
  const textAreaRef = useRef();
  const [copied, setCopied] = useState(false);
  const [warning, setWarning] = useState([]);

  const transcribe = (text) => {
    const transcribedText = Array.from(text).map(letter => {

      const currentLetter = letter;
      const nextLetter = text[letter + 1];
      const combination = currentLetter + nextLetter;

      if (currentLetter in dictionary) return dictionary[currentLetter];
      else if (combination in dictionary) return dictionary[combination];
      else {
        if (warning.includes(letter)) return "?";
        setWarning([...warning, letter]);
        return "?";
      }
    })

    return transcribedText.join("");
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

  useEffect(() => {
    if (!inputValue) return setTranscribedValue("");
    setTranscribedValue(transcribe(inputValue));
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
          icon={copied ? <IoMdDoneAll className="icon"/> : <MdOutlineContentCopy className="icon"/>}
          color="green"
        />
        <Button
          action={reset}
          text="Clear"
          icon={<VscClearAll
          className="icon"/>}
          color="yellow"
        />
      </div>
      {warning.length ? <div className='warning-container'>
        <IoWarningOutline className='icon'/>
        <p className='warning'><span>{warning.join(", ")}</span> {warning.length > 1 ? "are not in the dictionary": "is not in the dictionary"}</p>
      </div> : null}
    </div>
    <textarea ref={textAreaRef} id='output' readOnly value={transcribedValue}/>
    </>
  )
}

export default Output;