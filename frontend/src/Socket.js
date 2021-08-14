import socketIOClient from "socket.io-client";


var Socket;
Socket = socketIOClient("http://localhost:4000");

export default Socket;