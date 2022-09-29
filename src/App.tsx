import React, {ChangeEvent, FormEvent, useState} from 'react'
import Canvas from './components/canvas'
import ObserverHandshake from './types/observerHandshake'
import {ReactComponent as Tank} from './assets/Tank.svg';
import {TickEventForObserver} from "./types/tickEventForObserver";

function App() {
  let width = 800;
  let height = 600;
  const image = new Image();
  const [formData, setUrl] = useState({
      url: "ws://localhost:7654"
  });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(formData)

    }

  return <>
      <div><h1>Robocode WebClient</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setUrl({...formData, url: e.target.value})}  value={formData.url}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
      <Canvas socketUrl={formData.url}/>
    </>
}

export default App