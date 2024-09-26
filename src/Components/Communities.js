import React from "react";

const Communities = () => {
  const communities = [
    { name: "Frontend Developers", members: "500+" },
    { name: "UX/UI Designers", members: "300+" },
    { name: "Data Science", members: "200+" },
  ];

  return (
    <section id="communities" className="py-8">
      <h2 className="text-2xl font-bold text-gray-800">Skill-based Communities</h2>
      <p className="text-gray-600">Connect with like-minded professionals.</p>

      <div className="grid grid-cols-3 gap-6 mt-4">
        {communities.map((community, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">{community.name}</h3>
            <p className="text-gray-600">{community.members} members</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Communities;
