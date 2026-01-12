import { useContext, useEffect } from 'react';
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
    <div className="text-center w-full">
      <div className="flex gap-2 sm:gap-4 items-center justify-center mb-6 sm:mb-12 relative px-2 w-full lg:w-[96%] xl:w-[90%] 2xl:w-[80%] mx-auto" dir="ltr">
        <h1 className="px-2 bg-gradient-to-r from-[rgba(54,177,0,1)] via-[rgba(9,121,63,1)] to-[rgba(0,212,255,1)] bg-[length:120%] bg-clip-text text-transparent w-fit text-3xl sm:text-5xl font-bold" dir="ltr">
          KtivApp
        </h1>
        <div className="flex gap-2 sm:gap-4 absolute right-0 sm:right-0">
          <span 
            onClick={handleSettingsTab} 
            className={`flex items-center justify-center p-3 rounded-full transition-colors duration-100 hover:bg-black/15 cursor-pointer ${
              theme === "dark" ? "hover:bg-white/15" : ""
            }`}
          >
            <IoSettingsSharp className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`} title="Settings"/>
          </span>
          <span 
            onClick={toggleTheme} 
            className={`flex items-center justify-center p-3 rounded-full transition-colors duration-100 hover:bg-black/15 cursor-pointer ${
              theme === "dark" ? "hover:bg-white/15" : ""
            }`}
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <BsFillSunFill className="text-xl text-white"/>
            ) : (
              <BsMoonFill className="text-xl text-black"/>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header;
