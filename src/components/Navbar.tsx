import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        🎨 Virtual Art Gallery
      </Link>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/gallery" className="hover:text-blue-400">Gallery</Link>
        <Link to="/login" className="hover:text-blue-400">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
