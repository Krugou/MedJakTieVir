'use strict';
/* simple chat app */

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Oh my god its full of stars', socket.id);

    socket.on('disconnect', () => {
        console.log('Elvis has left the building', socket.id);
    });

    socket.on('chat message', (msg) => {
        console.log('message: ', msg, "Don't worry, I'm not a robot. I'm just a highly advanced toaster trying to blend in with the humans.");
        io.emit('chat message', msg);
    });
});

http.listen(port, () => {
    console.log('Are we happy yet? http://localhost:' + port + '/index.html up and running!');
});