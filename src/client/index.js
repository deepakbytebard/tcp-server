const { getClientKey } = require("../utils")

const connectedClients = {

}

function addClient(socket){
    const clientId = getClientKey(socket);
    connectedClients[clientId] = socket;
}

function removeClient(socket){
    const clientId = getClientKey(socket);
    delete connectedClients[clientId];
}

module.exports={
    addClient,
    removeClient
}