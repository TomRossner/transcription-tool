import { useContext } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Settings from './components/Settings';
import { TranscriptContext } from './context/TranscriptContext';
import Footer from './components/Footer';
import Dictionary from './components/Dictionary';

function App() {
  const {theme, settingsTabOpen} = useContext(TranscriptContext);

  return (
    <div className={`w-full min-h-screen flex flex-col text-[rgba(255,255,255,0.8)] transition-colors duration-200 ${
      theme === "dark" ? 'bg-[rgb(20,20,39)]' : 'bg-white'
    }`}>
      {settingsTabOpen && <Settings/>}
      <Header/>
      <div className="flex-1 w-full lg:w-[96%] xl:w-[90%] 2xl:w-[80%] mx-auto flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-2 sm:px-4" dir="rtl">
        {/* Left side - Dictionary (on large screens) */}
        <div className="w-full lg:w-1/3 xl:w-1/4 order-3 lg:order-1">
          <Dictionary/>
        </div>
        
        {/* Right side - Main content (on large screens) */}
        <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-col gap-4 order-1 lg:order-2">
          <Input/>
          <Output/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
