export interface BotState {
    energy: number;
    x: number;
    y: number;
    direction: number;
    gunDirection: number;
    radarDirection: number;
    radarSweep: number;
    speed: number;
    turnRate: number;
    gunTurnRate: number;
    radarTurnRate: number;
    gunHeat: number;
    bodyColor: string;
    turretColor: string;
    radarColor: string;
    bulletColor: string;
    scanColor: string;
    tracksColor: string;
    gunColor: string;
}