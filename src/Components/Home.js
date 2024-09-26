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
      description: "Beautiful sunset at the beach! ".repeat(20), // Simulating a long description
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x600",
      description: "Exploring the mountains! ".repeat(20),
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x600",
      description: "Enjoying a cup of coffee. ".repeat(20),
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400x600",
      description: "A day in the city. ".repeat(20),
    },
    {
      id: 5,
      image: "https://via.placeholder.com/400x600",
      description: "Chasing waterfalls! ".repeat(20),
    },
    {
      id: 6,
      image: "https://via.placeholder.com/400x600",
      description: "Night sky full of stars. ".repeat(20),
    },
  ];

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <div
        className="flex-grow p-4 space-y-4 max-w-screen-lg mx-auto overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 64px)" }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden max-w-md mx-auto"
          >
            <TruncatedDescription description={post.description} />
            <img
              src={post.image}
              alt="Post"
              className="w-full h-[400px] object-cover rounded-lg"
              style={{ maxWidth: '90%', margin: '0 auto' }}
            />
            <div className="flex justify-between items-center p-4">
              <div className="flex space-x-8">
                <button className="flex items-center text-zinc-600 hover:text-black">
                  <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                  Like
                </button>
                <button className="flex items-center text-zinc-600 hover:text-black">
                  <FontAwesomeIcon icon={faComment} className="mr-1" />
                  Comment
                </button>
                <button className="flex items-center text-zinc-600 hover:text-black">
                  <FontAwesomeIcon icon={faShare} className="mr-1" />
                  Repost
                </button>
              </div>
              <button className="flex items-center text-zinc-600 hover:text-black">
                <FontAwesomeIcon icon={faPaperPlane} className="mr-1" />
                Send
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
          className="text-blue-500 hover:underline mt-2"
        >
          {isExpanded ? "Show Less" : "....more"}
        </button>
      )}
    </div>
  );
};

export default Home;