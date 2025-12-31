import React from "react";
import { FiUsers, FiBarChart2, FiLock, FiLayers } from "react-icons/fi";

export default function ServicesUs() {
  const services = [
    {
      title: "Employee Data Management",
      desc: "Add, update, and delete employee records seamlessly through a connected Spring Boot API.",
      icon: <FiUsers size={40} className="text-indigo-600" />,
    },
    {
      title: "Department Tracking",
      desc: "Organize employees by department and role to maintain a clear internal structure.",
      icon: <FiLayers size={40} className="text-indigo-600" />,
    },
    {
      title: "Analytics & Reports",
      desc: "Generate insightful reports to monitor workforce distribution, growth, and performance.",
      icon: <FiBarChart2 size={40} className="text-indigo-600" />,
    },
    {
      title: "Secure Authentication",
      desc: "Only authorized personnel can access or modify sensitive employee data.",
      icon: <FiLock size={40} className="text-indigo-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-10">
          Our Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h2 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
