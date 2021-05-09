var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(3000, '109.174.99.246');

app.get('/', function (request, respons) {
    respons.sendFile(__dirname + '/index.html');
});

users = [];
connections = [];

io.sockets.on('connection', function (socket) {
    console.log('Успешное соединение');
    connections.push(socket);

    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Отключение');
    })

    socket.on('send mess', function (data) {
        // console.log(data.mess)
        if (data.mess) {
            io.sockets.emit('add mess', { mess: data.mess, name: data.name, className: data.className });
        }
    });
    
});
