import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
  faPaperPlane,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [post, setPost] = useState(null);
  const posts = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-photo/palm-tree-is-beach-sun-is-setting_853115-11588.jpg",
      userImage:
        "https://media.licdn.com/dms/image/v2/D5635AQHdDi6OfTqrwg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1725916584949?e=1727974800&v=beta&t=jBPq0oraBPcQWwtrMHxfzqBJLXZ5nYXX9y-LKjamJ-E",
      userbio: "Analyst Goldman Sachs | React dev| FrontEnd",
      username: "John Doe",
      description: "Beautiful sunset at the beach! ".repeat(20),
    },
    {
      id: 2,
      image:
        "https://pics.craiyon.com/2023-09-26/aa2fbe35ce18489980f73a4acb336537.webp",
      userImage:
        "https://media.licdn.com/dms/image/v2/D4E03AQFTeCTuT4gt6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1695558754264?e=1732752000&v=beta&t=yQhkrXMy-jbyRjVeQiXdDv6j3GguvFNY39mztejmeyc",
      username: "Jane Smith",
      description: "Exploring the mountains! ".repeat(20),
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1326417843/photo/cheerful-woman-enjoying-coffee-cup-in-a-winter-afternoon.jpg?s=170667a&w=0&k=20&c=AvzROWUYb30JX7Wv2hQFbs1S4uN4OQCbSuv2Y7MRgP0=",
      userImage:
        "https://media.licdn.com/dms/image/v2/D5603AQHXju6l4DEuBg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718389878605?e=1732752000&v=beta&t=Ejr66zQHc_v2_I80YYoiu-3fWIUrdC3GgD3vOMVmAwQ",
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
  const [selectedPost, setSelectedPost] = useState(null); // Track the selected post for the modal

  const handleButtonClick = (action) => {
    setPopup({ visible: true, message: action });
    setTimeout(() => setPopup({ visible: false, message: "" }), 2000); // Auto-hide after 2 seconds
  };

  const handleImageClick = (post) => {
    setSelectedPost(post); // Set the clicked post
  };

  const handleCloseModal = () => {
    setSelectedPost(null); // Close the modal
  };

  useEffect(() => {
    // Simulate fetching post data
    const fetchPostData = async () => {
      // Replace this with your actual data fetching logic
      const fetchedPost = {
        userImage: "https://media.licdn.com/dms/image/v2/D5635AQHdDi6OfTqrwg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1725916584949?e=1727974800&v=beta&t=jBPq0oraBPcQWwtrMHxfzqBJLXZ5nYXX9y-LKjamJ-E", // Replace with actual image URL
        // other post properties...
      };
      setPost(fetchedPost);
    };

    fetchPostData();
  }, []);
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#F3F2EF" }}
    >
      {/* New Empty Section */}
      <div className="max-w-[580px] w-full mt-8 mx-auto bg-white border border-gray-300 rounded-xl flex items-center p-4">
      {post ? (
        <>
          <img
            src={post.userImage} // Access userImage from post
            alt="User"
            className="rounded-full  ml h-[50px] w-[50px] object-cover" // Set fixed size for the image
          />
          <input
            type="text"
            placeholder="Start a post, Try writing with AI"
            className="ml-4 border border-black rounded-full p-2 flex-grow focus:outline-none placeholder-black cursor-pointer" // Styling for the search bar
            
          />
        </>
      ) : (
        <p>Loading...</p> // You can replace this with a loading spinner or placeholder
      )}
    </div>
      <hr className="border-gray-400 mt-5 mx-auto w-[39%]" />
      <div
        className="flex-grow space-y-4 max-w-screen-lg mx-auto mt-4 overflow-y-auto" // Keep existing styles
        style={{ maxHeight: "calc(100vh - 64px)" }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md border border-gray-300 rounded-xl overflow-hidden max-w-xl mx-auto"
          >
            <UserInfo post={post} onButtonClick={handleButtonClick} />
            <TruncatedDescription description={post.description} />
            <img
              src={post.image}
              alt="Post"
              className="w-full h-[400px] object-cover  cursor-pointer"
              style={{ maxWidth: "100%", margin: "0 auto" }}
              onClick={() => handleImageClick(post)} // Open modal on image click
            />
            <hr className="border-gray-300 mt-5 mx-auto w-[90%]" />
            <ActionButtons onButtonClick={handleButtonClick} />
          </div>
        ))}
        {popup.visible && <Popup message={popup.message} />}
      </div>

      {selectedPost && <Modal post={selectedPost} onClose={handleCloseModal} />}
    </div>
  );
};

const UserInfo = ({ post, onButtonClick }) => (
  <div className="flex items-center p-4 justify-between">
    <div className="flex items-center">
      <img
        src={post.userImage}
        alt="User"
        className="rounded-full w-13 h-12 object-cover mr-4"
      />
      <div>
        <h2 className="text-black font-semibold">{post.username}</h2>
        <p className="text-gray-600 text-sm">{post.userbio}</p>
        <p className="text-gray-400 text-sm">Posted 1 hour ago</p>
      </div>
    </div>
    <button
      onClick={() => onButtonClick("✨ Followed")}
      className="text-blue-500  text-lg font-medium px-3 py-1 rounded  hover:bg-blue-200/50 transition duration-300"
    >
      <span className="text-2xl mr-1">+</span>Follow
    </button>
  </div>
);

const ActionButtons = ({ onButtonClick }) => (
  <div className="flex justify-start items-center p-3 relative">
    <div className="flex space-x-2 ml-4">
      <button
        onClick={() => onButtonClick("👍🏻 Liked")}
        className="flex items-center text-gray rounded px-6 py-2 hover:bg-gray-300/50 font-medium"
      >
        <FontAwesomeIcon icon={faThumbsUp} className="mr-2 text-xl" />
        Like
      </button>
      <button
        onClick={() => onButtonClick("💬 Commented")}
        className="flex items-center text-black rounded px-6 py-2  hover:bg-gray-300/50 font-medium"
      >
        <FontAwesomeIcon icon={faComment} className="mr-2  text-xl" />
        Comment
      </button>
      <button
        onClick={() => onButtonClick("🔁 Reposted")}
        className="flex items-center text-black rounded px-6 py-2  hover:bg-gray-300/50 font-medium"
      >
        <FontAwesomeIcon icon={faShare} className="mr-2  text-xl" />
        Repost
      </button>
      <button
        onClick={() => onButtonClick("➤ Sent")}
        className="flex items-center text-black rounded px-6 py-2  hover:bg-gray-300/50 font-medium"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="mr-2 text-xl " />
        Send
      </button>
    </div>
  </div>
);

const Popup = ({ message }) => (
  <div className="fixed top-16 left-1/2 transform -translate-x-1/2 text-white  bg-blue-600 p-2 py-2 rounded-lg ">
    {message}!
  </div>
);

const TruncatedDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-4">
      <p
        className="text-black transition-all duration-300"
        style={{
          maxHeight: isExpanded ? "1000px" : "50px",
          overflow: "hidden",
        }}
      >
        {description}
      </p>
      {description.length > maxLength && (
        <button onClick={toggleDescription} className="text-blue-500 mt-2">
          {isExpanded ? "Show Less" : "...more"}
        </button>
      )}
    </div>
  );
};

// Modal Component
const Modal = ({ post, onClose }) => (
  <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center">
    <div className="bg-gray-800 rounded-lg max-w-5xl w-full h-[80vh] flex overflow-hidden relative">
      {/* Image on the left with increased width */}
      <div className="w-3/5 h-full">
        <img
          src={post.image}
          alt="Selected Post"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content on the right */}
      <div className="w-2/5 h-full p-6 flex flex-col justify-between relative">
        {/* User info and follow button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={post.userImage}
              alt="User"
              className="rounded-full w-12 h-12 object-cover mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold text-white">{post.username}</h2>
              <p className="text-gray-300">{post.userbio}</p>
              <p className="text-gray-400 text-sm">Posted 1 hour ago</p>
            </div>
          </div>
          <button
            onClick={() => onClose()}
            className="text-blue-500 bg-blue-500/15 px-4 py-2 rounded-lg text-sm font-semibold hover:text-blue-400 hover:bg-blue-600/50"
          >
            + Follow
          </button>
        </div>

        {/* Description */}
        <p className="text-white mb-4">{post.description}</p>

        {/* Action buttons */}
        <ActionButtons onButtonClick={() => console.log("Button clicked!")} />

        {/* Cross button outside modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-lg hover:bg-blue-500/50 h-8 w-8 rounded-full flex items-center justify-center transition-transform duration-200 ease-in-out  hover:scale-105"
          style={{ transform: "translate(10%, -10%)" }} // Move button up and right
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
    {/* External close button on the right corner of the screen */}
  </div>
);

export default Home;
