// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
        <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/partners">Partners</Link>
        </li>
        {/* Add more sidebar links */}
      </ul>
    </aside>
  );
};

export default Sidebar;
