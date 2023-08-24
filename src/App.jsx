import { useState } from 'react'
import AnimalShow from './AnimalShow.jsx'

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}



function App() {
  const [animals, setAnimals] = useState([]);
  

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}/>
  })


  return (
    <section >
    <div className="flex flex-col items-center"> 
      <button className="rounded-lg bg-green-300 p-3 m-3 font-semibold border border-green-500" onClick={handleClick} >Add Animal</button>
      <div className="flex flex-wrap">{renderedAnimal}</div>
      
      
    </div>
    </section>
    
    )
  
};

export default App
