import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import './styles/main.styles.scss';

function App() {
  return (
    <div className='main-container'>
      <Header/>
      <Input/>
      <Output/>
    </div>
  );
}

export default App;