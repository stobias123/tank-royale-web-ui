import {BotState} from "./botState";
import {BotStateWithID} from "./botStateWithID";
import {BulletState} from "./bulletState";
import {Event} from './event'

export interface TickEventForObserver extends Event {
    type: string;
    roundNumber: number;
    botStates: BotStateWithID[];
    bulletStates:BulletState[];
    events: Event[];
}