'use strict';
/* simple chat app */

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log(socket.id, ' has entered the building');

    socket.on('disconnect', () => {
        console.log(socket.id, ' has left the building');
    });
    // socket.on('set username', (username) => {
    //     socket.username = username;
    //     console.log(socket.id, ' has set username to ', username);
    // });
    socket.on('chat message', (data) => {
    console.log(`message: ${data.message}, username: ${data.username}`);
    io.emit('chat message', `${data.username}: ${data.message}`);
  });
});

http.listen(port, () => {
    console.log('Are we happy yet? http://localhost:' + port + '/index.html up and running!');
});