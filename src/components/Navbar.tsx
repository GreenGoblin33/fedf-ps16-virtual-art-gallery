import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-white/20 flex items-center justify-center text-2xl font-bold">FA</div>
          <div>
            <div className="text-lg font-semibold">FEDF-PS16</div>
            <div className="text-xs opacity-90">Virtual Art Gallery</div>
          </div>
        </Link>

        <nav aria-label="Main" className="hidden md:flex gap-6 items-center">
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/exhibitions" className="hover:underline">Exhibitions</Link>
          <Link to="/tours" className="hover:underline">Virtual Tours</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/cart" className="px-3 py-1 bg-white/20 rounded-md">Cart</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="px-3 py-1 bg-white text-purple-700 rounded-md">Sign in</Link>
        </div>

        {/* mobile menu button could go here */}
      </div>
    </header>
  );
};

export default Navbar;
