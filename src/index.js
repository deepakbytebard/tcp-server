const net = require("net");

const handleClientConnection = (socket) =>{
    socket.on("data",(param)=>console.log(param,"hello"))
}

const server = net.createServer();
server.on("connection", handleClientConnection)

server.listen(3000, "127.0.0.1",5, ()=>console.log("started"))
