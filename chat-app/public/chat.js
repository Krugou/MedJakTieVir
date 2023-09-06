'use strict';

// Server URL below must point to your server, localhost works for local development/testing
//const socket = io('http://localhost:3000');
const socket = io('https://aleksinmasiina.northeurope.cloudapp.azure.com/');'

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const inp = document.getElementById('m');
    const username = document.getElementById('username').value; // get the username from an input field
    socket.emit('chat message', {message: inp.value, username: username}); // emit an object with the message and username
    inp.value = '';
});

socket.on('chat message', (data) => {
    const item = document.createElement('li');
    item.innerHTML = data;
    console.log(data);
    document.getElementById('messages').appendChild(item);
});