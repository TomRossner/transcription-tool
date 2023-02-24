import { useContext } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Settings from './components/Settings';
import { TranscriptContext } from './context/TranscriptContext';
import './styles/main.styles.scss';
import './styles/toggle-switch.styles.scss';
import './styles/settings.styles.scss';

function App() {
  const {theme, settingsTabOpen} = useContext(TranscriptContext);

  return (
    <div className={theme === "dark" ? 'main-container dark' : 'main-container'}>
      {settingsTabOpen && <Settings/>}
      <div className='inside-container'>
        <Header/>
        <Input/>
        <Output/>
      </div>
    </div>
  );
}

export default App;