
import './App.css';
import React, { useState } from 'react';

function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingAnnouncement, setEditingAnnouncement] = useState({
    title: '',
    type: '',
    description: '',
    duration: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    const announcement = {
      id: Date.now(),
      title: event.target.title.value,
      type: event.target.type.value,
      description: event.target.description.value,
      duration: event.target.duration.value,
    };
    const newAnnouncements = [...announcements, announcement];
    setAnnouncements(newAnnouncements);
    event.target.reset();
  }

  function handleDelete(id) {
    const newAnnouncements = announcements.filter((announcement) => announcement.id !== id);
    setAnnouncements(newAnnouncements);
  }

  function handleEdit(id) {
    const announcementToEdit = announcements.find((announcement) => announcement.id === id);
    setEditingAnnouncement(announcementToEdit);
    setIsEditing(true);
    setEditingId(id);
  }

  function handleSave(event) {
    event.preventDefault();
    const updatedAnnouncements = announcements.map((announcement) => {
      if (announcement.id === editingId) {
        return {
          ...announcement,
          title: editingAnnouncement.title,
          type: editingAnnouncement.type,
          description: editingAnnouncement.description,
          duration: editingAnnouncement.duration,
        };
      }
      return announcement;
    });
    setAnnouncements(updatedAnnouncements);
    setIsEditing(false);
    setEditingId(null);
    setEditingAnnouncement({
      title: '',
      type: '',
      description: '',
      duration: '',
    });
  }

  function handleCancel() {
    setIsEditing(false);
    setEditingId(null);
    setEditingAnnouncement({
      title: '',
      type: '',
      description: '',
      duration: '',
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditingAnnouncement({ ...editingAnnouncement, [name]: value });
  }

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h2 className="text-lg font-medium mb-4">Announcements</h2>
      {!isEditing && (
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">Title:</label>
          <input type="text" name="title" className="border border-gray-400 rounded-md py-2 px-3 mb-4" />
          <label className="block mb-2 font-medium">Type:</label>
          <input type="text" name="type" className="border border-gray-400 rounded-md py-2 px-3 mb-4" />
          <label className="block mb-2 font-medium">Description:</label>
          <input type="text" name="description" className="border border-gray-400 rounded-md py-2 px-3 mb-4" />
          <label className="block mb-2 font-medium">Duration:</label>
          <input type="text" name="duration" className="border border-gray-400 rounded-md py-2 px-3 mb-4" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Submit</button>
        </form>)}
  {isEditing && (
    <form onSubmit={handleSave}>
      <label className="block mb-2 font-medium">Title:</label>
      <input type="text" name="title" className="border border-gray-400 rounded-md py-2 px-3 mb-4" value={editingAnnouncement.title} onChange={handleInputChange} />
      <label className="block mb-2 font-medium">Type:</label>
      <input type="text" name="type" className="border border-gray-400 rounded-md py-2 px-3 mb-4" value={editingAnnouncement.type} onChange={handleInputChange} />
      <label className="block mb-2 font-medium">Description:</label>
      <input type="text" name="description" className="border border-gray-400 rounded-md py-2 px-3 mb-4" value={editingAnnouncement.description} onChange={handleInputChange} />
      <label className="block mb-2 font-medium">Duration:</label>
      <input type="text" name="duration" className="border border-gray-400 rounded-md py-2 px-3 mb-4" value={editingAnnouncement.duration} onChange={handleInputChange} />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2">Save</button>
      <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md" onClick={handleCancel}>Cancel</button>
    </form>
  )}
  {announcements.length === 0 && (
    <p>No announcements to display</p>
  )}
  {announcements.map((announcement) => (
    <div key={announcement.id} className="bg-white rounded-md shadow-md p-4 mb-4">
      <h3 className="text-lg font-medium mb-2">{announcement.title}</h3>
      <p className="text-gray-600 mb-2">{announcement.type}</p>
      <p className="text-gray-700 mb-2">{announcement.description}</p>
      <p className="text-gray-500">{announcement.duration}</p>
      <div className="flex justify-end">
        <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2" onClick={() => handleEdit(announcement.id)}>Edit</button>
        <button type="button" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md" onClick={() => handleDelete(announcement.id)}>Delete</button>
      </div>
    </div>
  ))}
</div>
  );
}



export default App;



