import React from 'react';
import {BotStateWithID} from "../types/botStateWithID";

const Tank = ({botState}: { botState: BotStateWithID }) => {
    const tankSize = [50, 50]
    const mapSize = [800, 600]
    const bodyRotation = `rotate(${botState.gunDirection} ${mapSize[0] / 2} ${mapSize[1]/2})`
    const gunRotation = `rotate(${botState.gunDirection})`
    return (
        <svg version="1.1" x={botState.x} y={botState.y} width={tankSize[0]} height={tankSize[1]} viewBox="0 0 800 600">
            <g>
                <use xlinkHref="#tank"/>
            </g>

            <defs>
                <symbol id="link0">
                    <rect x="5" y="55" width="125" height="25" fill="#aaaaaa"/>
                    <rect x="10" y="70" width="116" height="35" fill="#666666" rx="10" ry="10"/>
                    <rect x="5" y="55" width="125" height="50" fill="none" stroke="black" strokeWidth="10" rx="10"
                          ry="10"/>
                </symbol>

                <symbol id="link30">
                    <rect x="5" y="55" width="125" height="25" fill="#939393"/>
                    <rect x="10" y="70" width="116" height="30" fill="#585858" rx="10" ry="10"/>
                    <rect x="5" y="55" width="125" height="42" fill="none" stroke="black" strokeWidth="10" rx="10"
                          ry="10"/>
                </symbol>

                <symbol id="link60">
                    <rect x="5" y="55" width="125" height="20" fill="#555555"/>
                    <rect x="5" y="55" width="125" height="20" fill="none" stroke="black" strokeWidth="10" rx="10"
                          ry="10"/>
                </symbol>

                <symbol id="main-track">
                    <rect x="20" y="75" width="95" height="450" fill="#333333" stroke="black" strokeWidth="10"/>
                </symbol>

                <symbol id="track1">
                    <use xlinkHref="#main-track" x="0" y="0"/>
                    <use xlinkHref="#link30" x="0" y="0"/>
                    <use xlinkHref="#link0" x="0" y="60"/>
                    <use xlinkHref="#link0" x="0" y="140"/>
                    <use xlinkHref="#link0" x="0" y="220"/>
                    <use xlinkHref="#link0" x="0" y="300"/>
                    <use xlinkHref="#link0" x="0" y="380"/>
                    <use xlinkHref="#link30" x="0" y="448"/>
                </symbol>

                <symbol id="track2">
                    <use xlinkHref="#main-track" x="0" y="0"/>
                    <use xlinkHref="#link60" x="0" y="0"/>
                    <use xlinkHref="#link0" x="0" y="33"/>
                    <use xlinkHref="#link0" x="0" y="113"/>
                    <use xlinkHref="#link0" x="0" y="193"/>
                    <use xlinkHref="#link0" x="0" y="273"/>
                    <use xlinkHref="#link0" x="0" y="353"/>
                    <use xlinkHref="#link0" x="0" y="433"/>
                </symbol>

                <symbol id="track3">
                    <use xlinkHref="#main-track" x="0" y="0"/>
                    <use xlinkHref="#link0" x="0" y="7"/>
                    <use xlinkHref="#link0" x="0" y="87"/>
                    <use xlinkHref="#link0" x="0" y="167"/>
                    <use xlinkHref="#link0" x="0" y="247"/>
                    <use xlinkHref="#link0" x="0" y="327"/>
                    <use xlinkHref="#link0" x="0" y="407"/>
                    <use xlinkHref="#link60" x="0" y="470"/>
                </symbol>
                <symbol id="body">
                    <use xlinkHref="#track1" x="50" y="45"/>
                    <use xlinkHref="#track1" x="415" y="45"/>

                    <rect x="140" y="135" width="320" height="420" fill="#019" stroke="black" strokeWidth="20" rx="10"
                          ry="10"/>
                    <rect x="150" y="465" width="300" height="80" fill="black" opacity="0.5"/>
                </symbol>

                <symbol id="turret">
                    <rect x="200" y="265" width="200" height="200" fill="#06C" stroke="black" strokeWidth="20" rx="10"
                          ry="10"/>
                    <rect x="210" y="405" width="180" height="50" fill="black" opacity="0.5"/>

                    <rect x="260" y="185" width="80" height="80" fill="url(#cannon-grad)" stroke="black"
                          strokeWidth="20"/>
                    <rect x="275" y="15" width="50" height="170" fill="url(#cannon-grad)" stroke="black"
                          strokeWidth="20"/>

                    <linearGradient id="cannon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#333"/>
                        <stop offset="50%" stopColor="#CCC"/>
                        <stop offset="100%" stopColor="#333"/>
                    </linearGradient>
                </symbol>

                <symbol id="radar">
                    <circle cx="300" cy="345" r="30" fill="#AAF" stroke="black" strokeWidth="20"/>
                    <path d="M 190 365 q 110 100 220 0 z" fill="#AAF" stroke="black" strokeWidth="20"/>
                </symbol>

                <symbol id="tank" transform={bodyRotation}>
                    <use xlinkHref="#body"/>
                    <use xlinkHref="#turret"/>
                    <use xlinkHref="#radar" />
                </symbol>

            </defs>
        </svg>
    )
}
export default Tank;