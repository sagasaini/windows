import axios from "axios";
import React, { useState } from "react";

const EditItemModal = ({ item, onSave, onClose }) => {
  console.log("item: ", item);
  const [name, setName] = useState(item.name);
  const [type, setType] = useState(item.type);
  const [file, setFile] = useState(null);

  const uploadFileToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_unsigned_preset"); // Replace with your upload preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/djxdajbji/upload",
        formData
      ); // Replace YOUR_CLOUD_NAME with your Cloudinary cloud name
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading the file:", error);
      return null;
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = { ...item, name, type };
    if (file) {
      updatedItem.url = file.data;
    }
    onSave(updatedItem);
    const url = await uploadFileToCloudinary(file);
    if (url) {
      try {
        const response = await axios.patch(
          `https://satkabir-backend.onrender.com/api/media/${item._id}`,
          {
            url,
            name,
            type,
          }
        );

        console.log("Updated media:", response.data); // Optional: Handle the updated media data
      } catch (error) {
        console.log("error: ", error);
      }
    }

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
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditItemModal;
