import React from 'react';
import {BotStateWithID} from "../types/botStateWithID";
import {BulletState} from "../types/bulletState";

const Bullet = ({bulletState}: { bulletState: BulletState}) => {
    return (
        <>
            <circle cx={bulletState.x} cy={bulletState.y} r={15}/>
        </>
    )
}
export default Bullet;