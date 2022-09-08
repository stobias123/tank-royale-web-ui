import {BotState} from "./botState";

export interface BotStateWithID extends BotState {
    id: string;
}