'use strict';

// Server URL below must point to your server, localhost works for local development/testing
// const socket = io('http://localhost:3000');
const socket = io('https://aleksinmasiina.northeurope.cloudapp.azure.com/');
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
    // get username from local storage
    const chatappusername = localStorage.getItem('chatappusername');
    const currentRoom = roomSelect.value;
    if (data.room === currentRoom) {
        const item = document.createElement('li');
        // add tailwind classes to the list item
        item.classList.add('rounded', 'p-2', 'm-2', 'shadow', 'text-white', 'dark:text-white');
        if (data.username === document.getElementById('username').value || data.username === chatappusername) {
            item.classList.add('self-end', 'bg-blue-500', 'dark:bg-blue-900');
        } else {
            item.classList.add('self-start', 'bg-pink-500', 'dark:bg-pink-900');
        }
        item.innerHTML = `${data.username}: ${data.message}`;
        document.getElementById('messages').appendChild(item);
        localStorage.setItem('chatappusername', data.username);

    } else {
        // console.log('Message for another room');
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
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});