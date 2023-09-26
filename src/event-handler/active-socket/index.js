const { getClientKey } = require("../../utils")
function getHandleClientData(socket){
    function handleClientData(data){
        console.log(`${getClientKey(socket)} sends ${data}`)
    }
    return handleClientData
}

function getHandleClientDisconnect(socket){
    function handleClientDisconnect(){
        console.log(`${getClientKey(socket)} disconnected.`)
    }
    return handleClientDisconnect
}

module.exports = {
    getHandleClientDisconnect,
    getHandleClientData
}