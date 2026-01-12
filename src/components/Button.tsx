import { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';
import { ReactNode } from 'react';

interface ButtonProps {
  action: () => void;
  text: string;
  icon: ReactNode;
  color: string;
}

const Button = ({action, text, icon, color}: ButtonProps) => {
  const {theme} = useContext(TranscriptContext);
  
  const colorClasses = {
    green: "border-[rgb(9,161,29)] hover:bg-gradient-to-b hover:from-[rgba(1,191,1,1)] hover:to-[rgba(9,121,63,1)]",
    yellow: "border-[rgb(235,211,1)] hover:bg-gradient-to-b hover:from-[rgba(239,240,59,1)] hover:to-[rgba(240,194,5,1)]",
    blue: "border-[rgb(1,161,235)] hover:bg-gradient-to-b hover:from-[rgb(59,189,240)] hover:to-[rgb(5,126,240)]",
    red: "border-[rgb(220,38,38)] hover:bg-gradient-to-b hover:from-[rgba(239,68,68,1)] hover:to-[rgba(185,28,28,1)]",
  };

  const getBackgroundClass = () => {
    if (color === 'green') {
      return theme === "dark" ? "bg-[rgba(16,185,129,0.3)]" : "bg-[rgba(209,250,229,0.8)]";
    }
    if (color === 'red') {
      return theme === "dark" ? "bg-[rgba(239,68,68,0.3)]" : "bg-[rgba(254,226,226,0.8)]";
    }
    return theme === "dark" ? "bg-[rgba(255,255,255,0.1)]" : "bg-white";
  };

  const iconColorClass = theme === "dark" ? "text-white" : "text-black";

  return (
    <button 
      className={`group w-fit px-4 ${color === 'red' ? 'py-1' : 'py-2'} text-base ${getBackgroundClass()} border-2 rounded-md transition-all duration-100 flex gap-2 items-center cursor-pointer text-black ${colorClasses[color as keyof typeof colorClasses]} active:scale-95`}
      dir="rtl"
      title={text} 
      onClick={action}
    >
      <span className={`flex items-center justify-center ${iconColorClass} group-hover:text-white`}>
        {icon}
      </span>
      <span className={`${iconColorClass} group-hover:text-white`}>{text}</span>
    </button>
  )
}

export default Button;
