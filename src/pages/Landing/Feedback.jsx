import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import logo from "@/assets/dashboard_icon.svg";

function Feedback() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the home page
    };

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div>
            <div className="logo-account-container">
                <div className="logo-container">
                    <img className="logo" onClick={handleHomeClick} src={logo} alt =""/>
                    <span className="logo-text">MedDash</span>
                </div>
                <button className='sign-up-button'>Feedback</button>
                <button className="login-button" onClick={handleLoginClick}>Login</button>
            </div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdQsHtWS8gec9aUnZYVfVqhQGxP7hgax9yg3yKos2Ni3igebw/viewform?embedded=true" 
                    width='98%'
                    height="718" 
                    frameborder="0" 
                    marginheight="100" 
                    marginwidth="0">
                Loading…
            </iframe>
        </div>
    )
}

export default Feedback;