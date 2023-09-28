function getClientKey(socket){
    return `${socket.remoteAddress}:${socket.remotePort}`
}

module.exports = {
    getClientKey
} 