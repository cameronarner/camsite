import './App.css'
import React, {useState, useEffect} from 'react';

function Drum({value, onDrumClick}){
  return (
    <button className="drum-pad" id={value} onClick={onDrumClick}>
      {value}
    </button>
  )
}  
//value for display div-> react component?


function App() {
  const [nameState, setNameState] = useState("");

  const sounds = {
    Q: {sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3", soundName: "Heater 1"},
    W: {sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3", soundName: "Heater 2"},
    E: {sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3", soundName: "Heater 3"},
    A: {sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3", soundName: "Heater 4"},
    S: {sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3", soundName: "Clap"},
    D: {sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3", soundName: "Open-HH"},
    Z: {sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3", soundName: "Kick-n'-Hat"},
    X: {sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3", soundName: "Kick"},
    C: {sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3", soundName: "Closed-HH"}
  }
function handleClick(letter){
  if (sounds[letter]){
  var playSound = new Audio(sounds[letter].sound);
  playSound.play();
  setNameState(sounds[letter].soundName)
  }
}

  useEffect(()=>{
    function handleKeyPress(event) {
      const key = event.key.toUpperCase();
      handleClick(key);
    }
  
  document.addEventListener('keydown', handleKeyPress);

  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
}, []);

  return (
      <div id="drum-machine">
          <div className="button-panel">
          <div className="button-row">
          <Drum value="Q" onDrumClick={()=>handleClick("Q")} />
          <Drum value="W" onDrumClick={()=>handleClick("W")} />
          <Drum value="E" onDrumClick={()=>handleClick("E")} />
          </div>
          <div className="button-row">
          <Drum value="A" onDrumClick={()=>handleClick("A")} />
          <Drum value="S" onDrumClick={()=>handleClick("S")} />
          <Drum value="D" onDrumClick={()=>handleClick("D")} />
          </div>
          <div className="button-row">
          <Drum value="Z" onDrumClick={()=>handleClick("Z")} />
          <Drum value="X" onDrumClick={()=>handleClick("X")} />
          <Drum value="C" onDrumClick={()=>handleClick("C")} />
          </div>
        </div>
        <div id="display">{nameState}</div>
        <div className="control-panel"></div>
      </div>
  )
}

export default App

/* 
requirements:
- need nine drum pad buttons
  - clickable, and can use keys to click them w/ same result
  - when clicked different sounds play
- use html audio elements with src being an audio source,
  - classes of clip
  - id corresponding to the letter key
- also when each is clicked, need to display text in 
  #display element w/ the name of the sound
  */

  //onclick -> button changes colors? darker version?
  // on/off switch and volume control