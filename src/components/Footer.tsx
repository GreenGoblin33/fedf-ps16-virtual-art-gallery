import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-lg">FEDF-PS16</h4>
          <p className="mt-2 text-sm">Virtual Art Gallery — showcasing heritage & contemporary works.</p>
        </div>
        <div>
          <h5 className="font-medium">Explore</h5>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Gallery</li><li>Exhibitions</li><li>Tours</li><li>About</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium">Contact</h5>
          <p className="mt-2 text-sm">support@fedf-ps16.gallery</p>
          <p className="text-xs mt-3">© {new Date().getFullYear()} FEDF-PS16</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
