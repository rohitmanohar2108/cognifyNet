import React from "react";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-8">
      <h2 className="text-3xl font-bold text-gray-800">Welcome to GigConnect!</h2>
      <p className="mt-2 text-gray-600">
        Your gateway to the gig economy, professional networking, and personal development.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Freelance Jobs</h3>
          <p className="text-gray-600">Explore the latest gig economy opportunities.</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Micro-Communities</h3>
          <p className="text-gray-600">Join communities aligned with your skills.</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Mentorship Programs</h3>
          <p className="text-gray-600">Upskill with personalized mentorship.</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
