import React, { useState } from 'react';

const EditItemModal = ({ item, onSave, onClose }) => {
  const [name, setName] = useState(item.name);
  const [type, setType] = useState(item.type);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile({ name: file.name, data: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = { ...item, name, type };
    if (file) {
      updatedItem.url = file.data;
    }
    onSave(updatedItem);
    onClose();
  };

  return (
    <div className="edit-item-form">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditItemModal;
