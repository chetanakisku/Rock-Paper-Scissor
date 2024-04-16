import './App.css';
import { useState } from 'react';
import Button from './Button';

const arr = ['Rock', 'Paper', 'Scissor'];

function App() {
  const [userChoice, setUserChoice] = useState({
    label: 'Click on buttons to select',
    index: ''
  });
  const [computerChoice, setComputerChoice] = useState({
    label: 'Player yet to pick',
    index: ''
  })
  const [result, setResult] = useState('No Winner, play the game first ullu');

  const setWinner = (userChoice, computerChoiceIndex) => {
    console.log({userChoice:userChoice, computerChoiceIndex})
    if (userChoice === computerChoiceIndex) return 'Retry';

    if ((userChoice === 0 && computerChoiceIndex === 2) || (userChoice === 1 && computerChoiceIndex === 0)  || (userChoice === 2 && computerChoiceIndex === 1)) {
      return 'Human'
    } else {
      return 'Computer'
    }
  }

  const clickHandler = (e, index) => {
    console.log(e, index)
    setUserChoice({
      label: e.target.innerText,
      index: index
    });
    const computerChoiceIndex = Math.floor(Math.random() * arr.length)
    const computerChoice = arr[computerChoiceIndex];
    setComputerChoice({
      label: computerChoice,
      index: computerChoiceIndex
    })
    setResult(setWinner(index, computerChoiceIndex));
  }

  return (
    <div className="App">
      <h1 className='title'>ROCK, PAPER & SCISSOR</h1>
      <div className='button-container'>
        {arr.map((item, index) => <Button label={item} clickHandler={clickHandler} index={index}/>)}
      </div>

      <h2>Your choice: {userChoice.label}</h2>
      <h2>Computer's choice: {computerChoice.label}</h2>
      <h2> Winner: {result} </h2>
    </div>
  );
}

export default App;
