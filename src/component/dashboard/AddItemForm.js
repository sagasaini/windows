import React, { useState } from "react";
import axios from "axios";

const AddItemForm = ({ onAdd, sectionId }) => {
  console.log("sectionId: ", sectionId);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const uploadFileToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_unsigned_preset"); // Replace with your upload preset

    try {
      setUploading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/djxdajbji/upload",
        formData
      ); // Replace YOUR_CLOUD_NAME with your Cloudinary cloud name
      setUploading(false);
      return response.data.secure_url;
    } catch (error) {
      setUploading(false);
      console.error("Error uploading the file:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const url = await uploadFileToCloudinary(file);
      if (url) {
        try {
          const response = await fetch(
            `http://localhost:5000/api/sections/${sectionId}/media`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ url, name, type }),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to add media");
          }

          const data = await response.json();
          console.log("New media:", data); // Optional: Handle the response data
        } catch (error) {}
        setName("");
        setType("");
        setFile(null);
      }
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
          <option value="" disabled>
            Select Type
          </option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit" disabled={uploading}>
          {uploading ? (
            "Uploading..."
          ) : (
            <>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Add item</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
