import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white s ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Company Name */}
            <div className="flex items-center flex-shrink-0">
              <h1 className="text-2xl font-bold text-black ">Grow</h1>
            </div>
          </div>

          {/* Menu Items */}
          <div className="items-center hidden space-x-4 md:flex">
            <Link
              to=""
              className="px-2 py-1 font-semibold text-black rounded-md cursor-pointer hover:bg-orange-500 hover:text-white"
            >
              Home
            </Link>
            <Link
              to=""
              className="px-2 py-1 font-semibold text-black rounded-md cursor-pointer hover:bg-orange-500 hover:text-white"
            >
              About
            </Link>
            <Link
              to=""
              className="px-2 py-1 font-semibold text-black rounded-md cursor-pointer hover:bg-orange-500 hover:text-white"
            >
              Service
            </Link>
            <Link
              to=""
              className="px-2 py-1 font-semibold text-black rounded-md cursor-pointer hover:bg-orange-500 hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              to=""
              className="px-2 py-1 font-semibold text-black rounded-md cursor-pointer hover:bg-orange-500 hover:text-white"
            >
              Blogs
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-4 pt-2 pb-3 space-y-1 sm:px-3 ">
            <Link to="" className="font-semibold text-black ">
              Home
            </Link>
            <Link to="" className="font-semibold text-black ">
              About
            </Link>
            <Link to="" className="font-semibold text-black ">
              Service
            </Link>
            <Link to="" className="font-semibold text-black ">
              Contact Us
            </Link>
            <Link to="" className="font-semibold text-black ">
              Blogs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
