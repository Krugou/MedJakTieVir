'use strict';
/* simple chat app */

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;
const lastTenMessages = [];
app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log(socket.id, ' has entered the building');
    console.log(lastTenMessages);
    for (let i = 0; i < lastTenMessages.length; i++) {
        socket.emit('chat message', lastTenMessages[i].username + ': ' + lastTenMessages[i].message);
    }
    socket.on('disconnect', () => {
        console.log(socket.id, ' has left the building');
    });
    ;
    socket.on('chat message', (data) => {
        if (lastTenMessages.length > 10) {
            lastTenMessages.shift();
        }
        lastTenMessages.push(data);

        console.log(`message: ${data.message}, username: ${data.username}`);
        io.emit('chat message', `${data.username}: ${data.message}`);
    });
});

http.listen(port, () => {
    console.log('Are we happy yet? http://localhost:' + port + '/index.html up and running!');
});