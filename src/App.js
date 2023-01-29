
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [BestScore, setBestScore] = useState(0);
  const [Score, setScore] = useState(0);
  const [Selection, setSelection] = useState('');
  const [Cards, setCards] = useState([
    {id: 0 , name: 'Hogwarts', img : 'images/Hogwarts.jpg'},
    {id: 1 , name: 'Diagon Alley', img : 'images/Diagon-Alley.jpg'},
    {id: 2 , name: 'Hogsmeade' , img : 'images/Hogsmeade.jpg'},
    {id: 3 , name: 'Mordor', img : 'images/Mordor.jpg'},
    {id: 4 , name: 'Edoras', img : 'images/Edoras.jpg'},
    {id: 5 , name: 'Minas Tirith', img : 'images/Minas-Tirith.jpg'},
    {id: 6 , name: 'Misty Mountains', img : 'images/Misty-Moutains.jpg'},
    {id: 7 , name: 'Asguard', img : 'images/Asguard.jpg'},
    {id: 8 , name: 'Gotham City', img : 'images/Gotham-City.jpg'},
    {id: 9 , name: 'Planet Titan', img : 'images/Planet-Titan.jpg'},
    {id: 10 , name: 'Winterfell', img : 'images/Winterfell.jpg'},
    {id: 11 , name: 'Dragonstone', img : 'images/Dragonstone.jpg'},

  ]);

  useEffect(() => {
    console.log(Selection)
    if(BestScore < Score){
      setBestScore(Score)
    }
  });

  function contains(a, obj) {
    if(a){
      for (var i = 0; i < a.length; i++) {
          if (a[i] === obj) {
              return true;
          }
      }
    }
    return false;
  } 


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

  const handleChange = (item)=>{
    let check = contains(Selection , item)
    console.log(check)
    setSelection(() => {
        if(check){
          setScore(0)
          return []
        }
        else{
          setScore(Score + 1)
          return [...Selection, item]
        }
    })
  }


  return (
    <div className="App">
      <div className='score-board'>
        <h3>Score : {Score}</h3>
        <h3>High Score : {BestScore}</h3>
      </div>
      <div className='display-card'>{Cards.map((character)=>{
        return (
          <div className='card' onClick={()=>{
            setCards([...shuffle(Cards)]);
            handleChange(character.id)
            console.log(character.img)
          }}>
            <img src={character.img} alt={character.name} srcset="" />
            <h2>{character.name}</h2>
          </div>
        )
      })}</div>
    </div>
  );
}

export default App;
