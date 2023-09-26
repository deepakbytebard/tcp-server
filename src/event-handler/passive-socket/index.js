const { getHandleClientData, getHandleClientDisconnect } = require("../active-socket")

function handleClientConnection(socket){
    socket.on("data",getHandleClientData(socket))
    socket.on("end",getHandleClientDisconnect(socket))
}

module.exports = {
    handleClientConnection
}