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
    socket.on('chat message', (msg) => {
        console.log('user: ', socket.id, 'send this: "', msg, '" to the server');
        io.emit('chat message', msg);
    });
});

http.listen(port, () => {
    console.log('Are we happy yet? http://localhost:' + port + '/index.html up and running!');
});