import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tabNames } from '../menuItemsData';
import '../assets/DropDownMenu.css'; // Assuming you have a CSS file for styles

const DropDownMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("User Menu")
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (url,title) => {
    navigate(url);
    setIsOpen(false); // Close the dropdown after navigation
    setName(title)
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-trigger">
      {name}
        <span className="arrow-down">▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {tabNames.map((item, index) => (
            <li key={index} className="dropdown-item" onClick={() => handleItemClick(item.url,item.title)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;