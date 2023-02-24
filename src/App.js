import { useContext } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import { TranscriptContext } from './context/TranscriptContext';
import './styles/main.styles.scss';

function App() {
  const {theme} = useContext(TranscriptContext);

  return (
    <div className={theme === "dark" ? 'main-container dark' : 'main-container'}>
      <div className='inside-container'>
        <Header/>
        <Input/>
        <Output/>
      </div>
    </div>
  );
}

export default App;