import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import TextInput from './components/TextInput';
import Counter from './components/Counter';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <div className="App">
      <TextInput />
      <Counter />
      <ToggleButton />
      <Article
      title={'日本一わかりやすい焼きそば入門'}
      content={'焼きそばは日本で最も美味しい食べ物です。（個人的感想）'}
      />
    </div>
  );
}

export default App;
