import React from "react";

const VirtualTour: React.FC = () => {
  return (
    <div className="p-8 bg-black text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">🎥 Virtual Gallery Tour</h2>
      <p className="mb-4">
        Experience the gallery as if you were there! Move around, zoom into artworks,
        and explore exhibitions interactively.
      </p>

      <div className="bg-gray-800 h-64 flex items-center justify-center rounded-md">
        <p>🌀 360° Viewer Placeholder (Integrate 3D / Panorama Later)</p>
      </div>
    </div>
  );
};

export default VirtualTour;
