import React, { useContext } from 'react';
import {BsMoonFill, BsFillSunFill} from "react-icons/bs";
import { TranscriptContext } from '../context/TranscriptContext';

const Header = () => {
  const {theme, setTheme} = useContext(TranscriptContext);

  const toggleTheme = () => {
    if (theme === "dark") return setTheme("light");
    else setTheme("dark");
  }

  return (
    <div className='header'>
        <div className='title-and-theme'>
          <h1>Transcript app</h1>
          <span onClick={toggleTheme} className={theme === "dark" ? "dark" : ""}>{theme === "dark" ? <BsFillSunFill className='icon'/> : <BsMoonFill className="icon" />}</span>
        </div>
        <div className={theme === "dark" ? 'header-text dark' : "header-text"}>
          <p>הקלידו את הטקסט שלכם בתעתיק מדויק:</p>
          <p>אותיות מיוחדות: א'=ء, א*=أ, א^=ٱ, ~=آ, י־=ى, ה'=ة, פ'=پ, ב'=ڤ, ג=چ, כ'=گ, ז'=ژ.</p>
          <p>תנועות: פתח = فتحة (קמץ = فتحتين), חיריק = كسرة (ALT GR + י = كسرتين), קובוץ = ضمّة (ALT GR + ו = ضمّتين), דגש = شدّة, שווא = سكون.</p>
        </div>
    </div>
  )
}

export default Header;