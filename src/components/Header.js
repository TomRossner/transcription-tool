import React, { useContext, useEffect } from 'react';
import {BsMoonFill, BsFillSunFill} from "react-icons/bs";
import { TranscriptContext } from '../context/TranscriptContext';
import {IoSettingsSharp} from "react-icons/io5";
import { LS_setTheme } from '../utils/LS';

const Header = () => {
  const {theme, setTheme, setSettingsTabOpen} = useContext(TranscriptContext);

  const toggleTheme = () => {
    if (theme === "dark") return setTheme("light");
    else setTheme("dark");
  }

  const handleSettingsTab = () => {
    setSettingsTabOpen(true);
  }

  useEffect(() => {
    LS_setTheme(theme);
  }, [theme])

  return (
    <div className='header'>
        <div className='title-and-theme'>
          <h1>Transcript App</h1>
          <div className='icons-container'>
            <span onClick={handleSettingsTab} className={theme === "dark" ? "dark" : ""}><IoSettingsSharp className="icon" title='Settings'/></span>
            <span onClick={toggleTheme} className={theme === "dark" ? "dark" : ""} title="Toggle Theme">{theme === "dark" ? <BsFillSunFill className='icon'/> : <BsMoonFill className="icon" />}</span>
          </div>
        </div>
        <div className={theme === "dark" ? 'header-text dark' : "header-text"}>
          <p>הקלידו את הטקסט שלכם</p>
        </div>
    </div>
  )
}

export default Header;