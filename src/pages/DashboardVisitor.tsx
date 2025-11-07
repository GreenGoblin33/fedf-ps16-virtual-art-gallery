import React from "react";

const DashboardVisitor: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Visitor Dashboard</h1>
      <p className="mb-4">
        Browse exhibitions, view favorite artworks, and track your purchase history.
      </p>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Recent Purchases</h3>
        <ul className="list-disc ml-6">
          <li>“Sunset Bliss” – ₹1200</li>
          <li>“Ancient Walls” – ₹900</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardVisitor;
