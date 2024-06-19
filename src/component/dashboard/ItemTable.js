import React from 'react';
import EditItemModal from './EditItemModel';

const ItemTable = ({ items, editItem, onEdit, onSave, onDelete, onCloseEdit }) => {
  return (
    <div className="item-details">
      <h2>Item Details</h2>
      <table id="item-table">
        <thead>
          <tr>
            <th>Image/Video</th>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <React.Fragment key={item.name}>
              <tr>
                <td>
                  {item.type === 'image' ? (
                    <img src={item.url} alt={item.name} style={{ maxWidth: '100px' }} />
                  ) : (
                    <video src={item.url} controls style={{ maxWidth: '100px' }} />
                  )}
                </td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>
                  <button onClick={() => onEdit(item)}>Edit</button>
                  <button onClick={() => onDelete(item)}>Delete</button>
                </td>
              </tr>
              {editItem && editItem.name === item.name && (
                <tr>
                  <td colSpan="4">
                    <EditItemModal
                      item={editItem}
                      onSave={onSave}
                      onClose={onCloseEdit}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
