import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import logo from "@/assets/dashboard_icon.svg"; // Replace with actual path to your logo
import './LogoComponent.css'; // Import the CSS file for styling

function LogoComponent({ onClick }) {
  return (
    <div className="logo-container" onClick={onClick}>
      <img className="logo" src={logo} alt="" />
      <span className="logo-text">MedDash</span>
    </div>
  );
}

export default LogoComponent;
