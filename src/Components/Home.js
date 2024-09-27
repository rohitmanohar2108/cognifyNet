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
      image: "https://img.freepik.com/premium-photo/palm-tree-is-beach-sun-is-setting_853115-11588.jpg",
      userImage: "https://media.licdn.com/dms/image/v2/D5635AQHdDi6OfTqrwg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1725916584949?e=1727974800&v=beta&t=jBPq0oraBPcQWwtrMHxfzqBJLXZ5nYXX9y-LKjamJ-E",
      userbio: "react dev",
      username: "John Doe",
      description: "Beautiful sunset at the beach! ".repeat(20),
    },
    {
      id: 2,
      image: "https://pics.craiyon.com/2023-09-26/aa2fbe35ce18489980f73a4acb336537.webp",
      userImage: "https://media.licdn.com/dms/image/v2/D4E03AQFTeCTuT4gt6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1695558754264?e=1732752000&v=beta&t=yQhkrXMy-jbyRjVeQiXdDv6j3GguvFNY39mztejmeyc",
      username: "Jane Smith",
      description: "Exploring the mountains! ".repeat(20),
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/1326417843/photo/cheerful-woman-enjoying-coffee-cup-in-a-winter-afternoon.jpg?s=170667a&w=0&k=20&c=AvzROWUYb30JX7Wv2hQFbs1S4uN4OQCbSuv2Y7MRgP0=",
      userImage: "https://media.licdn.com/dms/image/v2/D5603AQHXju6l4DEuBg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718389878605?e=1732752000&v=beta&t=Ejr66zQHc_v2_I80YYoiu-3fWIUrdC3GgD3vOMVmAwQ",
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
    <div className="flex flex-col bg-black min-h-screen bg-gradient-to-b from-gray-900 fixed top-0 w-full">
      <div
        className="flex-grow space-y-4 max-w-screen-lg mx-auto mt-16 overflow-y-auto "
        style={{ maxHeight: "calc(100vh - 64px)" }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-black/90 shadow-md rounded-lg overflow-hidden max-w-xl mx-auto" // Changed from max-w-md to max-w-xl
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
        className="rounded-full w-12 h-12 object-cover mr-4"
      />
      <div>
        <h2 className="text-white font-semibold">{post.username}</h2>
        <p className="text-gray-300 text-sm">{post.userbio}</p>
        <p className="text-gray-300 text-sm">Posted 1 hour ago</p>
      </div>
    </div>
    <button
      onClick={() => onButtonClick("✨ Followed")}
      className="text-blue-500  bg-blue-500/15 text-sm font-bold px-4 py-2 rounded-lg hover:text-blue-400  hover:bg-blue-600/50 transition duration-300"
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
        className="flex items-center text-white bg-blue-500/15 rounded-lg px-6 py-2 hover:bg-blue-600/50 font-semibold"
      >
        <FontAwesomeIcon icon={faThumbsUp} className="mr-1 text-base " />
        Like
      </button>
      <button
        onClick={() => onButtonClick("💬 Commented")}
        className="flex items-center text-white bg-blue-500/15 rounded px-6 py-2 hover:bg-blue-600/50 font-semibold"
      >
        <FontAwesomeIcon icon={faComment} className="mr-1 text-base" />
        Comment
      </button>
      <button
        onClick={() => onButtonClick("🔁 Reposted")}
        className="flex items-center text-white bg-blue-500/15 rounded  px-6 py-2 hover:bg-blue-600/50 font-semibold"
      >
        <FontAwesomeIcon icon={faShare} className="mr-1 text-base" />
        Repost
      </button>
      <button
        onClick={() => onButtonClick("➤ Sent")}
        className="flex items-center text-white bg-blue-500/15 rounded  px-6 py-2 hover:bg-blue-600/50 font-semibold"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="mr-1 text-base" />
        Send
      </button>
    </div>
  </div>
);

const Popup = ({ message }) => (
  <div className="fixed top-16 left-1/2 transform -translate-x-1/2 text-white bg-blue-600 p-2 py-2 rounded-lg ">
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
        className="text-white transition-all duration-300"
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
