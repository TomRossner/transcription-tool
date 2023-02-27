import { useContext } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Settings from './components/Settings';
import { TranscriptContext } from './context/TranscriptContext';
import Footer from './components/Footer';
import './styles/main.styles.scss';
import './styles/toggle-switch.styles.scss';
import './styles/settings.styles.scss';
import './styles/footer.styles.scss';
import './styles/dictionary.styles.scss';
import Dictionary from './components/Dictionary';

function App() {
  const {theme, settingsTabOpen} = useContext(TranscriptContext);

  return (
    <div className={theme === "dark" ? 'main-container dark' : 'main-container'}>
      {settingsTabOpen && <Settings/>}
      <div className='inside-container'>
        <Header/>
        <Input/>
        <Output/>
        <Dictionary/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;