import React from 'react';
import Tank from "./tank";
import {BotStateWithID} from "../types/botStateWithID";
import {TickEventForObserver} from "../types/tickEventForObserver";
import Bullet from "./bullet";

const BattleField = ({tickEvent}: { tickEvent: TickEventForObserver }) => {

    const testBotState: BotStateWithID = {
        energy: 100,
        direction: 20,
        gunDirection: 40,
        gunHeat: 0,
        gunTurnRate: 0,
        id: "1",
        radarDirection: 0,
        radarSweep: 0,
        radarTurnRate: 0,
        speed: 0,
        turnRate: 0,
        x: 25,
        y: 25,
        bodyColor: "#321616",
        bulletColor: "#321616",
        radarColor: "#321616",
        gunColor: "#321616",
        scanColor: "#321616",
        tracksColor: "#321616",
        turretColor: "#321616",
    }

    let bots =  tickEvent.botStates.map((botState, index) => {
            return <Tank botState={botState}/>
        }
    )
    let bullets =  tickEvent.bulletStates.map((bullet, index) => {
            console.log(JSON.stringify(bullet))
            return <Bullet bulletState={bullet}/>
        }
    )


    return (
        <>
        {bots}
        {bullets}
        </>
    );
};

export default BattleField;