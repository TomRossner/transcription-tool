import { useContext } from 'react';
import { TranscriptContext } from '../context/TranscriptContext';

const Footer = () => {
  const {theme} = useContext(TranscriptContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full text-sm py-2 px-4 text-center border-t mt-auto ${
      theme === "dark" 
        ? "text-gray-400 border-gray-600" 
        : "text-gray-500 border-gray-200"
    }`} dir="ltr">
      <p>
        KtivApp © {currentYear}
      </p>
    </footer>
  )
}

export default Footer;
