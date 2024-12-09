import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaTimes } from 'react-icons/fa'; // Import Font Awesome Icons

const Sidebar = ({ isSidebarOpen, toggleSidebar, closeSidebar }) => {
  return (
    <>
      {/* Overlay for the rest of the body */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998]"
          onClick={toggleSidebar} // Close sidebar when clicking outside
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-red-500 lg:bg-gray-900 text-white p-4 dark:bg-black z-[999] 
        ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}
      >
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-white text-xl lg:hidden"
          onClick={toggleSidebar}
        >
          <FaTimes />
        </button>

        {/* Logo Section */}
        <div className="flex items-center justify-center h-14 border-b border-gray-700 mb-3">
          <h1 className="text-xl font-bold">Logo</h1>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="flex items-center p-3 hover:bg-blue-500 dark:hover:bg-gray-600 rounded"
            >
              <FaHome className="mr-3" /> {/* Home Icon */}
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center p-3 hover:bg-blue-500 dark:hover:bg-gray-600 rounded"
            >
              <FaInfoCircle className="mr-3" /> {/* About Icon */}
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center p-3 hover:bg-blue-500 dark:hover:bg-gray-600 rounded"
            >
              <FaEnvelope className="mr-3" /> {/* Contact Icon */}
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
