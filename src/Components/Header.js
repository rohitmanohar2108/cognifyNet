import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faBriefcase, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Placeholder logo URL (replace this with your actual logo)
const logoUrl = 'https://t4.ftcdn.net/jpg/04/82/90/33/360_F_482903303_SkdGQKdD5GNpekXMETPPOtweJPS471oq.jpg';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-1"> {/* Decreased padding */}
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoUrl} alt="CognifyNet Logo" className="w-16 h-16" /> {/* Custom Logo */}
          <h1 className="text-2xl font-bold text-gray-800">CognifyWeb</h1> {/* Adjusted margin */}
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 border rounded-md p-2 mr-96 focus:outline-none focus:ring-2 focus:ring-blue-500" // Removed mr-80 to keep the search bar centered
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600"> 
            <FontAwesomeIcon icon={faHome} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600"> 
            <FontAwesomeIcon icon={faUserFriends} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600"> 
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600"> 
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600"> 
            <FontAwesomeIcon icon={faBell} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
