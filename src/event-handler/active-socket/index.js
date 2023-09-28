const { getClientKey } = require("../../utils")
const { deleteClient } = require("../utils")
const { message, forwardMessage, broadcastMessage, broadcastMessageToGroup } = require("../utils/messageHandler")

// handle active client message or data 
function getHandleClientData(socket){
    function handleClientData(data){
        console.log(data,"this is data")
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