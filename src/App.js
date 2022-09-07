import React from 'react'
import Canvas from './Canvas'
import socket from './socket'
import ObserverHandshake from './types/observerHandshake'

function App() {
    let width = 800;
    let height = 600;
    let botList = [];

    const draw = (ctx, frameCount) => {
        ctx.canvas.width = width;
        ctx.canvas.height = height;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.fillRect(0,0,width,height)
        botList.forEach( bot => {
                ctx.fillStyle = '#C9E82E'
                ctx.arc(bot.x,bot.y,5,0,2*Math.PI);
            }
        )
        ctx.fill()
    }



    socket.onmessage = function (evt) {
        var received_msg = JSON.parse(evt.data);
        if( received_msg.type == 'ServerHandshake') {
            let jsonstr = JSON.stringify(ObserverHandshake)
            console.log(jsonstr)
            socket.send(jsonstr)
        }
        if ( received_msg.type == 'TickEventForObserver') {
            botList = received_msg.botStates;
        }
        console.log("Message is received... " + JSON.stringify(received_msg));
    };

    return <Canvas draw={draw} />
}

export default App