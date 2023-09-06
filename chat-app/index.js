'use strict';
/* simple chat app */

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;
const lastTenMessages = {};
app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log(socket.id, ' has entered the building');

    socket.on('disconnect', () => {
        console.log(socket.id, ' has left the building');
    });
    socket.on('join room', (room) => {
        console.log(socket.id, ' joined room: ', room);
        socket.join(room);
        if (lastTenMessages) {
            for (const room in lastTenMessages) {
                if (lastTenMessages.hasOwnProperty(room)) {
                    lastTenMessages[room].forEach((message) => {
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
        if (!lastTenMessages[data.room]) {
            lastTenMessages[data.room] = [];
        }
        if (lastTenMessages[data.room].length > 10) {
            lastTenMessages[data.room].shift();
        }
        lastTenMessages[data.room].push(data);
        console.log(`message: ${data.message}, username: ${data.username}, room: ${data.room}`);
        io.to(data.room).emit('chat message', {message: data.message, username: data.username, room: data.room});
    });
    socket.on('get messages', (room) => {
        if (lastTenMessages[room]) {
            lastTenMessages[room].forEach((message) => {
                socket.emit('chat message', {username: message.username, message: message.message});
            });
        }
    });
});


http.listen(port, () => {
    console.log('Are we happy yet? http://localhost:' + port + '/index.html up and running!');
});