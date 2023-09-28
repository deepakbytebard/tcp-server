const { getHandleClientData, getHandleClientDisconnect } = require("../active-socket")
const { addClient } = require("../../client")

// passive socket which make active socket once 3-way handshake get done
function handleClientConnection(socket){
    socket.on("data",getHandleClientData(socket))
    socket.on("end",getHandleClientDisconnect(socket))
    addClient(socket)
}

module.exports = {
    handleClientConnection
}