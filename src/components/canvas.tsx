import React, {useState} from 'react'
import Battlefield from './battlefield'
import {TickEventForObserver} from "../types/tickEventForObserver";
import socket from "../socket";
import ObserverHandshake from "../types/observerHandshake";

const Canvas = () => {
    const style = {
        border: '1px solid black',
    };

     let dummyEvent: TickEventForObserver = {
         type: "tickEvent",
         turnNumber: 0,
         roundNumber: 0,
         botStates: [],
         bulletStates: [],
         events: [],
     };

    const [tickEvent, setTickEvent] = useState<TickEventForObserver>(dummyEvent);

    socket.onmessage = function (evt) {
        var received_msg = JSON.parse(evt.data);
        if( received_msg.type == 'ServerHandshake') {
            let jsonstr = JSON.stringify(ObserverHandshake)
            console.log(jsonstr)
            socket.send(jsonstr)
        }
        if ( received_msg.type == 'TickEventForObserver') {
            setTickEvent(received_msg as TickEventForObserver);
        }
    };


    const viewBox = [window.innerWidth / -4, window.innerHeight / -4, window.innerWidth, window.innerHeight].toString();
    const bfStyle = {
        fill: 'rgba(97,95,95,0.14)',
    };
    const width = 800;
    const height = 600;

    return (
        <svg
            id="robocode-canvas"
            style={style}
            viewBox={viewBox}
        >
            <rect
                style={bfStyle}
                x={0}
                y={0}
                width={width}
                height={height}>
            </rect>
            <Battlefield tickEvent={tickEvent}/>
        </svg>
    );
};

export default Canvas;