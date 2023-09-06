'use strict';

// Server URL below must point to your server, localhost works for local development/testing
// const socket = io('http://localhost:3000');
const socket = io('https://aleksinmasiina.northeurope.cloudapp.azure.com/');

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const inp = document.getElementById('m');
    socket.emit('chat message', inp.value);
    inp.value = '';
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.innerHTML = msg;
    document.getElementById('messages').appendChild(item);
});