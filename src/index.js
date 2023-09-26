const net = require("net");
const { handleClientConnection }= require("./event-handler/passive-socket");
const { ADDRESS, PORT_NUMBER, BACKLOG } = require("./constants")

const server = net.createServer();
server.on("connection", handleClientConnection);

server.listen(PORT_NUMBER, ADDRESS, BACKLOG, ()=>console.log("server started"));
