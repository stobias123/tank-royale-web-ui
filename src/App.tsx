import React, {useState} from 'react'
import Canvas from './components/canvas'
import socket from './socket'
import ObserverHandshake from './types/observerHandshake'
import {ReactComponent as Tank} from './assets/Tank.svg';
import {TickEventForObserver} from "./types/tickEventForObserver";

function App() {
  let width = 800;
  let height = 600;
  const image = new Image();
  const [isConnected, setIsConnected] = useState(socket);

  return <Canvas />
}

export default App