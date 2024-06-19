import React, { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
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
    if (file) {
      onAdd({ name, type, url: file.data });
      setName('');
      setType('');
      setFile(null);
    }
  };

  return (
    <div className="add-item-form">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="" disabled>Select Type</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemForm;
