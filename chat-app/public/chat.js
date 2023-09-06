'use strict';

// Server URL below must point to your server, localhost works for local development/testing
const socket = io('http://localhost:3000');
// const socket = io('https://aleksinmasiina.northeurope.cloudapp.azure.com/');
const roomSelect = document.getElementById('room');
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const currentRoom = roomSelect.value;
    const inp = document.getElementById('m');
    const username = document.getElementById('username').value; // get the username from an input field
    // get the room from a select field
    socket.emit('chat message', {message: inp.value, username: username, room: currentRoom}); // emit an object with the message, username, and room
    inp.value = '';
});
roomSelect.addEventListener('change', (event) => {
    const newRoom = event.target.value;
    const currentRoom = roomSelect.value; // get the room from a select field
    document.getElementById('messages').innerHTML = '';
    socket.emit('leave room', currentRoom);
    socket.emit('join room', newRoom);
    socket.emit('get messages', newRoom);
});
socket.on('chat message', (data) => {
    console.log(data);
    const currentRoom = roomSelect.value;
    if (data.room === currentRoom) {
        const item = document.createElement('li');
        // add tailwind classes to the list item
        item.classList.add('bg-white', 'rounded', 'p-2', 'm-2', 'shadow', 'text-gray-800');
        item.innerHTML = `${data.username}: ${data.message}`;
        document.getElementById('messages').appendChild(item);
    }
});
// join the socket to a specific room
socket.on('connect', () => {
    const currentRoom = roomSelect.value; // get the room from a select field
    socket.emit('join room', currentRoom);
});

// leave the socket from a specific room
socket.on('disconnect', () => {
    const currentRoom = roomSelect.value; // get the room from a select field
    socket.emit('leave room', currentRoom);
});