import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm text-center">
        <img 
          src="https://via.placeholder.com/150" // Replace with your profile image URL
          alt="Profile"
          className="rounded-full mb-4 border-2 border-blue-600"
        />
        <h2 className="text-2xl font-bold mb-2">Your Name</h2> {/* Replace with your name */}
        <p className="text-gray-700">
          This is a brief description about yourself. You can include your interests, professional background, and any other details you’d like to share with others.
        </p>
      </div>
    </div>
  );
};

export default Profile;
