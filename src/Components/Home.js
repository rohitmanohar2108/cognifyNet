import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const posts = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x600",
      userImage: "https://via.placeholder.com/40",
      userbio: "react dev",
      username: "John Doe",
      description: "Beautiful sunset at the beach! ".repeat(20),
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x600",
      userImage: "https://via.placeholder.com/40",
      username: "Jane Smith",
      description: "Exploring the mountains! ".repeat(20),
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x600",
      userImage: "https://via.placeholder.com/40",
      username: "Alice Johnson",
      description: "Enjoying a cup of coffee. ".repeat(20),
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x600",
      userImage: "https://via.placeholder.com/40",
      username: "Bob Brown",
      description: "A day in the city. ".repeat(20),
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400x600",
      userImage: "https://via.placeholder.com/40",
      username: "Charlie Green",
      description: "Chasing waterfalls! ".repeat(20),
    },
    {
      id: 6,
      image: "https://via.placeholder.com/400x600",
      userImage: "https://via.placeholder.com/40",
      username: "David White",
      description: "Night sky full of stars. ".repeat(20),
    },
  ];

  const [popup, setPopup] = useState({ visible: false, message: "" });

  const handleButtonClick = (action) => {
    setPopup({ visible: true, message: action });
    setTimeout(() => setPopup({ visible: false, message: "" }), 2000); // Auto-hide after 2 seconds
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <div
        className="flex-grow space-y-4 max-w-screen-lg mx-auto mt-5 overflow-y-auto "
        style={{ maxHeight: "calc(100vh - 64px)" }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden max-w-xl mx-auto" // Changed from max-w-md to max-w-xl
          >
            <UserInfo post={post} onButtonClick={handleButtonClick} />
            <TruncatedDescription description={post.description} />
            <img
              src={post.image}
              alt="Post"
              className="w-full h-[400px] object-cover rounded-lg"
              style={{ maxWidth: "90%", margin: "0 auto" }}
            />
            <hr className="border-gray-300 mt-5 mx-auto w-[90%]" /> 
            <ActionButtons onButtonClick={handleButtonClick} />
          </div>
        ))}
        {popup.visible && <Popup message={popup.message} />}
      </div>
    </div>
  );
};

const UserInfo = ({ post, onButtonClick }) => (
  <div className="flex items-center p-4 justify-between">
    <div className="flex items-center">
      <img
        src={post.userImage}
        alt="User"
        className="rounded-full w-10 h-10 object-cover mr-4"
      />
      <div>
        <h2 className="text-gray-800 font-semibold">{post.username}</h2>
        <p className="text-gray-600 text-sm">{post.userbio}</p>
        <p className="text-gray-600 text-sm">Posted 1 hour ago</p>
      </div>
    </div>
    <button
      onClick={() => onButtonClick("✨ Followed")}
      className="text-blue-600 text-sm font-bold px-4 py-2 rounded hover:text-blue-500 hover:bg-blue-500/15 transition duration-300"
    >
      + Follow
    </button>
  </div>
);

const ActionButtons = ({ onButtonClick }) => (
  <div className="flex justify-between items-center p-3">
    <div className="flex space-x-3 ml-4">
      <button
        onClick={() => onButtonClick("👍🏻 Liked")}
        className="flex items-center text-zinc-600 rounded hover:text-black px-6 py-2 hover:bg-blue-500/15 font-semibold"
      >
        <FontAwesomeIcon icon={faThumbsUp} className="mr-1 text-base " />
        Like
      </button>
      <button
        onClick={() => onButtonClick("💬 Commented")}
        className="flex items-center text-zinc-600 rounded hover:text-black px-6 py-2 hover:bg-blue-500/15 font-semibold"
      >
        <FontAwesomeIcon icon={faComment} className="mr-1 text-base" />
        Comment
      </button>
      <button
        onClick={() => onButtonClick("🔁 Reposted")}
        className="flex items-center text-zinc-600 rounded hover:text-black px-6 py-2 hover:bg-blue-500/15 font-semibold"
      >
        <FontAwesomeIcon icon={faShare} className="mr-1 text-base" />
        Repost
      </button>
      <button
        onClick={() => onButtonClick("➤ Sent")}
        className="flex items-center text-zinc-600 rounded hover:text-black px-6 py-2 hover:bg-blue-500/15 font-semibold"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="mr-1 text-base" />
        Send
      </button>
    </div>
  </div>
);

const Popup = ({ message }) => (
  <div className="fixed top-16 left-1/2 transform -translate-x-1/2 text-white bg-rose-600 p-2 py-2 rounded-lg ">
    {message}!
  </div>
);

const TruncatedDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100; // Length threshold for truncation

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-4">
      <p
        className="text-gray-800 transition-all duration-300"
        style={{
          maxHeight: isExpanded ? "1000px" : "50px",
          overflow: "hidden",
        }}
      >
        {description}
      </p>
      {description.length > maxLength && (
        <button
          onClick={toggleDescription}
          className="text-blue-500  mt-2"
        >
          {isExpanded ? "Show Less" : "...more"}
        </button>
      )}
    </div>
  );
};

export default Home;
