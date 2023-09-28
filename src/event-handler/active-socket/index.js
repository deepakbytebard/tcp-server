const { getClientKey } = require("../../utils")
const { deleteClient } = require("../utils")

// handle active client message or data 
function getHandleClientData(socket){
    function handleClientData(data){
        console.log(`${getClientKey(socket)} sends ${data}`)
    }
    return handleClientData
}

// gives updates about the client who request to disconnect
function getHandleClientDisconnect(socket){
    function handleClientDisconnect(){
        deleteClient(socket)
    }
    return handleClientDisconnect
}

module.exports = {
    getHandleClientDisconnect,
    getHandleClientData
}