const { getClientKey } = require("../../utils")

const connectedClients = {

}
// adds active client's (active socket) details
function addClient(socket){
    connectedClients[getClientKey(socket)] = socket
}

// remove disconnected clients details
function deleteClient(socket){
    delete connectedClients[getClientKey(socket)]
}

module.exports = {
    addClient,
    deleteClient
}