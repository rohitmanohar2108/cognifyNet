import React from "react";

const FreelanceBoard = () => {
  const jobs = [
    { id: 1, title: "React Developer", skills: "React, Node.js", pay: "$60/hr" },
    { id: 2, title: "UX Designer", skills: "Figma, Adobe XD", pay: "$40/hr" },
    { id: 3, title: "Data Scientist", skills: "Python, TensorFlow", pay: "$80/hr" },
  ];

  return (
    <section id="freelance" className="py-8">
      <h2 className="text-2xl font-bold text-gray-800">Freelance Opportunities</h2>
      <p className="text-gray-600">Browse and apply for the latest gigs in the market.</p>
      
      <div className="grid grid-cols-3 gap-6 mt-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
            <p className="text-gray-600">Skills: {job.skills}</p>
            <p className="text-gray-600">Pay: {job.pay}</p>
            <button className="mt-4 bg-blue-600 text-white py-1 px-4 rounded">Apply</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreelanceBoard;
