import {useState} from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import horse from './svg/horse.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';


const svgMap = {
  bird, 
  cat,
  horse, 
  cow, 
  dog,
  gator,
   
}

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
  <div onClick={handleClick} className="flex flex-wrap ">
    <div className="relative m-5 border p-5 shadow-lg shadow-cyan-500/50 rounded-lg">
    <img alt="animal" src={svgMap[type]} className="w-[200px]"/>
    <div className="absolute top-[5%]">
    <img alt="heart"
    src={heart}
    style={{ width: 10 + 10 * clicks + 'px' }} 
    />
    </div>
    </div>
    
    
  </div>)
}

export default AnimalShow;