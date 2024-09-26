import React from "react";

const Wellness = () => {
  return (
    <section id="wellness" className="py-8">
      <h2 className="text-2xl font-bold text-gray-800">Work-life Balance & Wellness</h2>
      <p className="text-gray-600">
        Stay healthy and balanced. Explore wellness programs tailored for freelancers.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Mindfulness Sessions</h3>
          <p className="text-gray-600">Join guided meditation and relaxation programs.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Physical Health</h3>
          <p className="text-gray-600">Access tips and guides on maintaining physical health.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Mental Wellbeing</h3>
          <p className="text-gray-600">Support for mental health and stress management.</p>
        </div>
      </div>
    </section>
  );
};

export default Wellness;
