import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometerAlt, faBriefcase, faUsers, faChalkboardTeacher, faHeart, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-white shadow-md py-1">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-black to-zinc-600 bg-clip-text text-transparent tracking-wider text-center ">CognifyNet</h1>
        <ul className="flex space-x-8 relative">
          {[
            { to: "/", icon: faHome, label: "Home" },
            { to: "/dashboard", icon: faTachometerAlt, label: "Dashboard" },
            { to: "/freelance-jobs", icon: faBriefcase, label: "Freelance Jobs" },
            { to: "/communities", icon: faUsers, label: "Communities" },
            { to: "/mentorship", icon: faChalkboardTeacher, label: "Mentorship" },
            { to: "/wellness", icon: faHeart, label: "Wellness" },
            { to: "/networking", icon: faNetworkWired, label: "Networking" },
          ].map(({ to, icon, label }) => (
            <li key={label} className="flex flex-col items-center cursor-pointer mt-1">
              <Link to={to} onClick={() => handleItemClick(label.toLowerCase().replace(" ", "-"))} className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={icon}
                  className={`text-xl mb-1 ${activeItem === label.toLowerCase().replace(" ", "-") ? 'text-black' : 'text-zinc-600'}`}
                />
                <span className={`text-sm ${activeItem === label.toLowerCase().replace(" ", "-") ? 'text-black' : 'text-zinc-600'}`}>
                  {label}
                </span>
              </Link>
              {activeItem === label.toLowerCase().replace(" ", "-") && <div className="h-1 bg-black w-full mt rounded-full"></div>}
            </li>
          ))}
        </ul>
        {/* Profile Photo */}
        <div className="relative cursor-pointer">
          <img 
            src="https://via.placeholder.com/40" // Replace with your profile image URL
            alt="Profile"
            className="rounded-full border-2 border-blue-600 transition duration-300 hover:scale-110"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
