import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';

const Chat = ({username}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('room1');
  const [socket, setSocket] = useState(null);

  // Function to handle room changes
  const handleRoomChange = (event) => {
    // console.log('room change happened');
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
    // console.log('submit worked');
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

  useEffect(() => {
    // Create a new socket connection when the component mounts
    const newSocket = io('/', {path: '/react/socket.io', transports: ['websocket']});
    setSocket(newSocket);

    // Remove the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      const handleMessage = (data) => {
        // console.log('chat message received:', data);
        // console.log('current room:', room);
        if (data.room === room) {
          // console.log('chat message received in room:', data.room);
          // console.log('current messages:', messages);
          setMessages((prevMessages) => [...prevMessages, data]);
        }
      };

      // Add the chat message listener
      socket.on('chat message', handleMessage);

      // Remove the chat message listener when the component unmounts
      return () => {
        socket.off('chat message', handleMessage);
      };
    }
  }, [socket, messages, room]);

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
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:mybasetext dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Type your message here"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        {/* Submit button */}
        <button type="submit">Send</button>
      </form>

      {/* Message list */}
      <ul
        id="messages"
        className="flex flex-col bg-white m-4 shadow-lg rounded-md p-4 max-h-80 overflow-y-auto dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:mybasetext dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >

        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.username}:</strong> {message.message}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Chat;