import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ItemTable from './ItemTable';
import AddItemForm from './AddItemForm';
import EditItemModal from './EditItemModel';
import itemData from './ItemData'; 
import './style.css'// Sample data (can be fetched from API)

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const categories = Object.keys(itemData);

  const handleItemClick = (category) => {
    setSelectedCategory(category);
    setItems(itemData[category]);
  };

  const handleAddItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    itemData[selectedCategory] = updatedItems; // Update the itemData object
    setShowAddForm(false);
  };

  const handleEditItem = (updatedItem) => {
    const updatedItems = items.map(item => (item.name === updatedItem.name ? updatedItem : item));
    setItems(updatedItems);
    itemData[selectedCategory] = updatedItems; // Update the itemData object
    setEditItem(null);
  };

  const handleDeleteItem = (itemToDelete) => {
    const updatedItems = items.filter(item => item.name !== itemToDelete.name);
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
      <Sidebar categories={categories} onItemClick={handleItemClick} />
      <div className="main-content">
        {selectedCategory && (
          <>
            <button onClick={() => setShowAddForm(true)}>Add New Item</button>
            {showAddForm && (
              <AddItemForm onAdd={handleAddItem} />
            )}
            <ItemTable
              items={items}
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
