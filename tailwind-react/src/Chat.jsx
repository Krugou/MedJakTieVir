import React, {useState} from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('room1');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new message object with username, message, and room
    const newMessage = {
      username,
      message,
      room,
    };
    // Add the new message to the messages array
    setMessages([...messages, newMessage]);
    // Clear the message input field
    setMessage('');
  };

  return (
    <section className="border rounded p-4">
      <button
        id="theme-toggle"
        type="button"
        className="text-alecharcoal dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
      >
        {/* Your theme toggle button contents */}
      </button>
      <form className="m-5 flex flex-col items-center" onSubmit={handleSubmit}>
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
          <label
            htmlFor="username"
            className="text-gray-900 m-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:mybasetext dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <label
            htmlFor="m"
            className="text-gray-900 m-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:mybasetext dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <svg
              className="w-6 h-6 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your submit button icon */}
            </svg>
          </button>
        </div>
      </form>
      <ul
        id="messages"
        className="flex flex-col bg-white m-4 shadow-lg rounded-md p-4 max-h-80 overflow-y-auto dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:mybasetext dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {/* Display messages here */}
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
