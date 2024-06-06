import { useState } from 'react';

export default function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section className="flex flex-col w-full p-4 bg-white rounded-lg shadow-md">
      <textarea
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={text}
        placeholder={`Chat with ${contact.name}`}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      onClick={() => {
        // Handle sending message here
        alert(`Message sent to ${contact.email}: ${text}`);
        setText(''); // Clear the input field after sending the message
      }}
      >Send to {contact.email}</button>
    </section>
  );
}
