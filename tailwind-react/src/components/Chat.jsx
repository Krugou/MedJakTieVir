import {useEffect, useState} from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('room1');


  const socket = io(); // Initialize the socket connection


  // Function to handle username change
  const handleUsernameChange = (event) => {
    console.log('username change happened');
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  // Function to handle message change
  const handleMessageChange = (event) => {
    console.log('message change happened');
    console.log(event.target.value);
    setMessage(event.target.value);

  };

  // Function to handle room change
  const handleRoomChange = (event) => {
    console.log('room change happened');
    const newRoom = event.target.value;
    setRoom(newRoom);
    setMessages([]); // Clear messages when changing rooms

    // Emit leave room and join room events to the server
    socket.emit('leave room', room);
    socket.emit('join room', newRoom);
    socket.emit('get messages', newRoom);
  };

  // Function to handle message submission
  const handleSubmit = (event) => {
    console.log('submit worked');
    event.preventDefault();
    const newMessage = {
      username,
      message,
      room,
    };
    // Emit the new message to the server
    socket.emit('chat message', newMessage);
    setMessage('');
  };

  // Listen for incoming messages from the server
  useEffect(() => {
    console.log('useEffect working');
    socket.on('chat message', (data) => {
      if (data.room === room) {
        setMessages([...messages, data]);
      }
    });

    // Clean up the socket listener when the component unmounts
    return () => {
      socket.off('chat message');
    };
  }, [messages, room, socket]);

  return (
    <section className={`border rounded p-4 `}>

      <form className="m-5 flex flex-col items-center" onSubmit={handleSubmit}>
        {/* Room selection dropdown */}
        <select
          title="selector"
          name="room"
          id="room"
          value={room}
          onChange={handleRoomChange}
          className="block w-full py-2 px-3 border border-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:mybasetext dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="room1">Silver Screen Lounge</option>
          <option value="room2">Director's Cut Den</option>
          <option value="room3">Cinephile's Hangout</option>
        </select>
        <div className="flex flex-col md:flex-row md:items-center m-4 p-4">
          {/* Username input */}
          <label
            htmlFor="username"
            className="text-white m-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:mybasetext dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            Patron:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:mybasetext dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Enter your username"
          />
          {/* Message input */}
          <label
            htmlFor="m"
            className="text-white m-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:mybasetext dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            Message:
          </label>
          <textarea
            id="m"
            rows="1"
            value={message}
            onChange={handleMessageChange}
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:mybasetext dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
            required
          ></textarea>
          {/* Submit button */}
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <svg
              className="w-6 h-6 "
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"

              viewBox="0 0 80.593 122.88"
              enableBackground="new 0 0 80.593 122.88"
              xmlSpace="preserve"
            >
              <g>
                <polygon points="0,0 30.82,0 80.593,61.44 30.82,122.88 0,122.88 49.772,61.44 0,0" />
              </g>
            </svg>
          </button>
        </div>
      </form>
      {/* Message list */}
      <ul
        id="messages"
        className="flex flex-col bg-white m-4 shadow-lg rounded-md p-4 max-h-80 overflow-y-auto dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:mybasetext dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.username}:</strong> {msg.message}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Chat;
