import { io } from "socket.io-client";

const URL = "ws://localhost:7654";
const socket = new WebSocket(URL);


export default socket;