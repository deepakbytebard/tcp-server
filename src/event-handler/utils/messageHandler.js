// reply to client 
function message(senderSocket, message, encoding="utf-8"){
    senderSocket.write(message, encoding)
}

// forwarding message of sender client to the receiver client
function forwardMessage(senderSocket, receiverSocket, message, encoding="utf-8"){
    // senderSocket.write(message, encoding)
}

// broadcasting sender client message to all the active client (excluding sender client)
function broadcastMessage(senderSocket, message, encoding="utf-8"){
    // senderSocket.write(message, encoding)
}

// broadcasting sender client message to all the active client part of a group
function broadcastMessageToGroup(senderSocket, message, encoding="utf-8"){
    // senderSocket.write(message, encoding)
}
module.exports={
    message,
    forwardMessage,
    broadcastMessage,
    broadcastMessageToGroup
}