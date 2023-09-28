const { getClientKey } = require("../../utils")
const { deleteClient } = require("../../client")
const { message, forwardMessage, broadcastMessage, broadcastMessageToGroup } = require("../../message")

// handle active client message or data 
function getHandleClientData(socket){
    function handleClientData(data){
        message(socket, data)
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