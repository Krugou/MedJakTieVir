'use strict';
/* simple chat app */

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;
const lastMessages = {};
app.use(express.static('public'));

io.on('connection', (socket) => {

    console.log(socket.id, ' has entered the building');
    const ip = socket.request.connection.remoteAddress;
    console.log(`Client connected with IP address: ${ip}`);

    socket.on('disconnect', () => {
        console.log(socket.id, ' has left the building');
    });
    socket.on('join room', (room) => {
        console.log(socket.id, ' joined room: ', room);
        socket.join(room);
        if (lastMessages) {
            for (const room in lastMessages) {
                if (lastMessages.hasOwnProperty(room)) {
                    lastMessages[room].forEach((message) => {
                        socket.emit('chat message', {message: message.message, username: message.username, room: message.room});
                    });
                }
            }
        }
    });
    socket.on('leave room', (room) => {
        console.log(socket.id, ' left room: ', room);
        socket.leave(room);
    });
    socket.on('chat message', (data) => {
        if (!lastMessages[data.room]) {
            lastMessages[data.room] = [];
        }
        if (lastMessages[data.room].length > 20) {
            lastMessages[data.room].shift();
        }
        lastMessages[data.room].push(data);
        console.log(`message: ${data.message}, username: ${data.username}, room: ${data.room}`);
        io.to(data.room).emit('chat message', {message: data.message, username: data.username, room: data.room});
    });
    socket.on('get messages', (room) => {
        if (lastMessages[room]) {
            lastMessages[room].forEach((message) => {
                socket.emit('chat message', {username: message.username, message: message.message});
            });
        }
    });
});


http.listen(port, () => {
    console.log('Are we happy yet? http://localhost:' + port + '/index.html up and running!');
});