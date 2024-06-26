import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ItemTable from "./ItemTable";
import AddItemForm from "./AddItemForm";
import EditItemModal from "./EditItemModel";
import itemData from "./ItemData";
import "./style.css"; // Sample data (can be fetched from API)

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [media, setMedia] = useState();
  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await fetch(
          "https://satkabir-backend.onrender.com/api/sections"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch sections");
        }

        const data = await response.json();
        setSections(data);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log("sections", sections);
  const categories = Object.keys(itemData);

  const handleItemClick = (category) => {
    setMedia(category?.media);
    setSelectedCategory(category);
    // setItems(itemData[category]);
  };
  console.log("media", media);

  const handleAddItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    itemData[selectedCategory] = updatedItems; // Update the itemData object
    setShowAddForm(false);
  };

  const handleEditItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.name === updatedItem.name ? updatedItem : item
    );
    setItems(updatedItems);
    itemData[selectedCategory] = updatedItems; // Update the itemData object
    setEditItem(null);
  };

  const handleDeleteItem = (itemToDelete) => {
    const updatedItems = items.filter(
      (item) => item.name !== itemToDelete.name
    );
    setItems(updatedItems);
    itemData[selectedCategory] = updatedItems; // Update the itemData object
  };

  const openEditForm = (item) => {
    setEditItem(item);
  };

  const closeEditForm = () => {
    setEditItem(null);
  };

  return (
    <div className="app">
      <Sidebar categories={sections} onItemClick={handleItemClick} />
      <div className="main-content">
        {selectedCategory && (
          <>
            <button onClick={() => setShowAddForm(true)}>Add New Item</button>
            {showAddForm && (
              <AddItemForm
                sectionId={selectedCategory._id}
                onAdd={handleAddItem}
              />
            )}
            <ItemTable
              items={media}
              editItem={editItem}
              onEdit={openEditForm}
              onSave={handleEditItem}
              onDelete={handleDeleteItem}
              onCloseEdit={closeEditForm}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
