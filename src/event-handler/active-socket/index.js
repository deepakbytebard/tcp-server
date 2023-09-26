function getHandleClientData(socket){
    function handleClientData(data){
        console.log(data,socket.remoteAddress, "data coming from here")
    }
    return handleClientData
}

function getHandleClientDisconnect(socket){
    function handleClientDisconnect(){
        console.log(socket.remoteAddress, "has left the connection")
    }
    return handleClientDisconnect
}

module.exports = {
    getHandleClientDisconnect,
    getHandleClientData
}