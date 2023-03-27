import React, { useState } from 'react';
import './index.css';

function AnnouncementModule() {
  const [announcement, setAnnouncement] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Send announcement data to server or database
  }

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h2 className="text-lg font-medium mb-4">Announcements</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Post an announcement:</label>
        <input type="text" value={announcement} onChange={(e) => setAnnouncement(e.target.value)} className="border border-gray-400 rounded-md py-2 px-3 mb-4" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Submit</button>
      </form>
    </div>
  );
}

export default AnnouncementModule;
