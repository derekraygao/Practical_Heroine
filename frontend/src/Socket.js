import socketIOClient from "socket.io-client";


var Socket;
Socket = socketIOClient("localhost:4000");

export default Socket;