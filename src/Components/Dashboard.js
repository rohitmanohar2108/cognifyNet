import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUsers,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const connectionsPercentage = 500; // Example percentage
  const followersCount = 1.2; // Example count
  const mentorshipCount = 5; // Example count

  // Data for the growth graph
  const growthData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Profile Growth",
        data: [20, 40, 60, 80, 100, 120, 150], // Example growth data
        fill: false,
        borderColor: "#4b8bf4",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#4b8bf4",
      },
      {
        label: "Total Reviews",
        data: [5, 8, 30, 65, 82, 110, 80], // Example review data
        fill: false,
        borderColor: "#ff7f50",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#ff7f50",
      },
    ],
  };

  const growthOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 200,
      },
    },
  };

  const recentActivities = [
    "Connected with John Doe",
    "Commented on 'How to Network Effectively'",
    "Joined 'Mentorship Program'",
    "Received endorsement for JavaScript",
  ];

  const topSkills = [
    { skill: "JavaScript", level: 80 },
    { skill: "React", level: 90 },
    { skill: "Node.js", level: 70 },
    { skill: "Python", level: 90 },
    { skill: "DSA", level: 80 },
    { skill: "AI/ML", level: 70 },
  ];

  const achievements = [
    { title: "Top Performer", date: "2023" },
    { title: "Completed 5 Courses", date: "2024" },
    { title: "Mentorship Achieved", date: "2024" },
  ];

  return (
    <section id="dashboard" className="py-8 px-5 sm:px-6 lg:px-16 ">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
        Welcome to Cognify{" "}
        <span className="border border-black px-2 py-1 rounded-md hover:bg-gray-100 text-blue-600">
          Net
        </span>
      </h2>
      <h3 className="text-2xl font-semibold text-gray-600 text-center mt-2">
        India's First Platform for NET Professionals
      </h3>
      <p className="mt-2 text-gray-600 text-center">
        Your gateway to the net economy, professional networking, and personal
        development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Active Connections */}
        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center border border-gray-200">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="text-4xl text-blue-600 mb-2"
          />
          <div className="progress-circle">
            <span className="percentage">{connectionsPercentage}+</span>
          </div>
          <h3 className="text-xl font-semibold text-blue-600 mt-4">
            Active Connections
          </h3>
        </div>

        {/* Followers */}
        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center border border-gray-200">
          <FontAwesomeIcon
            icon={faUsers}
            className="text-4xl text-blue-600 mb-2"
          />
          <div className="progress-circle">
            <span className="percentage">{followersCount}K+</span>
          </div>
          <h3 className="text-xl font-semibold text-blue-600 mt-4">
            Followers
          </h3>
        </div>

        {/* Mentorships */}
        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center border border-gray-200">
          <FontAwesomeIcon
            icon={faChalkboardTeacher}
            className="text-4xl text-blue-600 mb-2"
          />
          <div className="progress-circle">
            <span className="percentage">{mentorshipCount}</span>
          </div>
          <h3 className="text-xl font-semibold text-blue-600 mt-4">
            Mentorships
          </h3>
        </div>
      </div>

      {/* Profile Growth Graph */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
          Profile Growth & Total Reviews Over Time
        </h3>
        <div style={{ width: "100%", height: "300px" }}>
          <Line data={growthData} options={growthOptions} />
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Recent Activities
        </h3>
        <ul className="list-disc list-inside">
          {recentActivities.map((activity, index) => (
            <li key={index} className="text-gray-700">
              {activity}
            </li>
          ))}
        </ul>
      </div>

      {/* Top Skills Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Top Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topSkills.map((skill, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold">{skill.skill}</h4>
              <div className="h-4 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Achievements</h3>
        <ul className="list-disc list-inside">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-gray-700">
              {achievement.title} - {achievement.date}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .progress-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1rem 0;
        }

        .progress-circle::before {
          content: "";
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: conic-gradient(
            #4b8bf4 0deg,
            #4b8bf4 ${connectionsPercentage * 3.6}deg,
            #e0e0e0 ${connectionsPercentage * 3.6}deg,
            #e0e0e0 360deg
          );
          animation: rotate 2s linear forwards;
        }

        .percentage {
          position: absolute;
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(${connectionsPercentage * 3.6}deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Dashboard;
