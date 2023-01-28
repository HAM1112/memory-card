import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Example from './Components/Example';


function App() {
  const [Score, setScore] = useState(0);
  const [Selection, setSelection] = useState('');

  const [Cards, setCards] = useState([
    {id: 0 , name: 'Harry Potter'},
    {id: 1 , name: 'Hermonie Granger'},
    {id: 2 , name: 'Ron Weasly'},
    {id: 3 , name: 'Voldemort'},
    {id: 4 , name: 'Freddo Baggins'},
    {id: 5 , name: 'Bilbo Baggins'},
    {id: 6 , name: 'Grandalf'},
    {id: 7 , name: 'Albus Dumbledore'},
    {id: 8 , name: 'Sauron'},
    {id: 9 , name: 'Aragon'},
    {id: 10 , name: 'Morgoth'},
    {id: 11 , name: 'Severus Snape'},

  ]);

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  return (
    <div className="App">

      <div className='display-card'>{Cards.map((character)=>{
        return (
          <div className='card' onClick={()=>{
            setCards([...shuffle(Cards)])
            setSelection([...Selection,character.id])
            console.log(Selection)

          }}>
            <h2>{character.name}</h2>
          </div>
        )
      })}</div>
    </div>
  );
}

export default App;
