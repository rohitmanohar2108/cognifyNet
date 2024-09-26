import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometerAlt, faBriefcase, faUsers, faChalkboardTeacher, faHeart, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  // State to keep track of the active item
  const [activeItem, setActiveItem] = useState("home");

  return (
    <nav className="bg-white shadow-md py-1">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">CognifyNet</h1>
        <ul className="flex space-x-8 relative">
          <li className="flex flex-col items-center cursor-pointer" onClick={() => setActiveItem("home")}>
            <FontAwesomeIcon icon={faHome} className="text-gray-700 hover:text-blue-600 text-2xl" />
            <span className="text-gray-700 hover:text-blue-600">Home</span>
            {activeItem === "home" && <div className="h-1 bg-blue-600 w-full mt-1"></div>} {/* Active indicator */}
          </li>
          <li className="flex flex-col items-center cursor-pointer" onClick={() => setActiveItem("dashboard")}>
            <FontAwesomeIcon icon={faTachometerAlt} className="text-gray-700 hover:text-blue-600 text-2xl" />
            <span className="text-gray-700 hover:text-blue-600">Dashboard</span>
            {activeItem === "dashboard" && <div className="h-1 bg-blue-600 w-full mt-1"></div>} {/* Active indicator */}
          </li>
          <li className="flex flex-col items-center cursor-pointer" onClick={() => setActiveItem("freelance")}>
            <FontAwesomeIcon icon={faBriefcase} className="text-gray-700 hover:text-blue-600 text-2xl" />
            <span className="text-gray-700 hover:text-blue-600">Freelance Jobs</span>
            {activeItem === "freelance" && <div className="h-1 bg-blue-600 w-full mt-1"></div>} {/* Active indicator */}
          </li>
          <li className="flex flex-col items-center cursor-pointer" onClick={() => setActiveItem("communities")}>
            <FontAwesomeIcon icon={faUsers} className="text-gray-700 hover:text-blue-600 text-2xl" />
            <span className="text-gray-700 hover:text-blue-600">Communities</span>
            {activeItem === "communities" && <div className="h-1 bg-blue-600 w-full mt-1"></div>} {/* Active indicator */}
          </li>
          <li className="flex flex-col items-center cursor-pointer" onClick={() => setActiveItem("mentorship")}>
            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-gray-700 hover:text-blue-600 text-2xl" />
            <span className="text-gray-700 hover:text-blue-600">Mentorship</span>
            {activeItem === "mentorship" && <div className="h-1 bg-blue-600 w-full mt-1"></div>} {/* Active indicator */}
          </li>
          <li className="flex flex-col items-center cursor-pointer" onClick={() => setActiveItem("wellness")}>
            <FontAwesomeIcon icon={faHeart} className="text-gray-700 hover:text-blue-600 text-2xl" />
            <span className="text-gray-700 hover:text-blue-600">Wellness</span>
            {activeItem === "wellness" && <div className="h-1 bg-blue-600 w-full mt-1"></div>} {/* Active indicator */}
          </li>
          <li className="flex flex-col items-center cursor-pointer" onClick={() => setActiveItem("networking")}>
            <FontAwesomeIcon icon={faNetworkWired} className="text-gray-700 hover:text-blue-600 text-2xl" />
            <span className="text-gray-700 hover:text-blue-600">Networking</span>
            {activeItem === "networking" && <div className="h-1 bg-blue-600 w-full mt-1"></div>} {/* Active indicator */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
