import {useState, useRef} from "react";

export default function Player() {
    const playerName = useRef();
    const [enteredPlayerName, setEnteredPlayerName] = useState(null);

    function handleChanger(event){
        setEnteredPlayerName(event.target.value);
    }

    function handleClick(){
        setEnteredPlayerName(playerName.current.value);
        playerName.current.value = '';
    }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ??  'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
