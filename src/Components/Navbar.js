import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTachometerAlt,
  faBriefcase,
  faUsers,
  faChalkboardTeacher,
  faHeart,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className=" fixed top-0 left-0 h-full w-64 z-50 py-6 shadow-lg" style={{ backgroundColor: "#F3F2EF" }}>
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-black to-black bg-clip-text text-transparent tracking-wider mb-6">
          CognifyNet
        </h1>
        <ul className="flex flex-col space-y-4 w-full mt-5">
          {[
            { to: "/", icon: faHome, label: "Home" },
            { to: "/dashboard", icon: faTachometerAlt, label: "Dashboard" },
            {
              to: "/freelance-jobs",
              icon: faBriefcase,
              label: "Freelance Jobs",
            },
            { to: "/networking", icon: faNetworkWired, label: "Networking" },
            { to: "/communities", icon: faUsers, label: "Communities" },
            {
              to: "/mentorship",
              icon: faChalkboardTeacher,
              label: "Mentorship",
            },
            { to: "/wellness", icon: faHeart, label: "Wellness" },
            { to: "/profile", label: "Profile" }, // Profile item without icon
          ].map(({ to, icon, label }) => (
            <li
              key={label}
              className={`flex items-center cursor-pointer rounded py-3 mx-4 transition duration-300 ease-in-out ${
                activeItem === label.toLowerCase().replace(" ", "-")
                  ? "font-semibold hover:bg-gray-200 text-black"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
            >
              <Link
                to={to}
                onClick={() =>
                  handleItemClick(label.toLowerCase().replace(" ", "-"))
                }
                className="flex items-center w-full ml-3"
              >
                {icon && (
                  <FontAwesomeIcon icon={icon} className="text-2xl mr-4" />
                )}{" "}
                {/* Display icon only if it exists */}
                {label === "Profile" ? (
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5635AQHdDi6OfTqrwg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1725916584949?e=1727974800&v=beta&t=jBPq0oraBPcQWwtrMHxfzqBJLXZ5nYXX9y-LKjamJ-E" // Replace with your profile image URL
                    alt="Profile"
                    className="rounded-full border-2 border-blue-600  -mx-2  mr-2 h-10 w-10 "
                  />
                ) : null}
                <span className="text-base">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
