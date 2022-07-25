import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import TextInput from './components/TextInput';
import Counter from './components/Counter';
import ToggleButton from './components/ToggleButton';
import { useEffect, useState } from 'react';

function App() {

  const [id, setId] = useState('MichiKaneko');
  const [name, setName] = useState('')
  const ids = ['MichiKaneko', 'aws', 'google', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setName(data.name);
    })
    .catch(error => {
      console.error(error)
    })
  }, [id])

  return (
    <div className="App">
      <TextInput />
      <Counter />
      <ToggleButton />
      <Article
      title={'日本一わかりやすい焼きそば入門'}
      content={'焼きそばは日本で最も美味しい食べ物です。（個人的感想）'}
      />
      <div>
        <p>{id}のGitHub上の名前は{name}です。</p>
        <button onClick={getRandomId}>IDを変更</button>
      </div>
    </div>
  ); 
}

export default App;
