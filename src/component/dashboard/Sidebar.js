import React from 'react';

const Sidebar = ({ categories, onItemClick }) => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        {categories.map(category => (
          <li key={category} onClick={() => onItemClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
