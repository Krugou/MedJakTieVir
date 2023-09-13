const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve static files from the public directory
app.use(express.static('public'));

// Handle incoming socket connections
io.on('connection', (socket) => {
    console.log('a user connected');

    // Handle incoming signaling messages
    socket.on('signal', (message) => {
        console.log('received signal:', message);

        // Broadcast the signaling message to all other connected clients
        socket.broadcast.emit('signal', message);
    });

    // Handle disconnections
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Start the server
http.listen(3000, () => {
    console.log('listening on *:3000');
});