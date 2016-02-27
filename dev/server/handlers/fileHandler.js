var utils = require('../utils/utils.js');
var socketHandler = require('./socketHandler.js');

var fileHandler = {};

var totalFileReceived = 0;


fileHandler.receiveFile = function(socket, file, fileName) {

	totalFileReceived++;

    socket.msgCount++;
    socket.user.msgCount++;

    var action = {};
    action.type = 'send file';
    action.time = utils.getTime();
    action.url = socket.url;
    action.detail = fileName;
    socket.user.actionList.push(action);


    socketHandler.recordSocketActionTime(socket);

}


module.exports = fileHandler;