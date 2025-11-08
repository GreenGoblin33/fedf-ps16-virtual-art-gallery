import React from "react";

const DashboardCurator: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Curator Dashboard</h1>
      <p className="mb-4">
        Organize exhibitions, review submissions, and provide cultural insights for artworks.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Current Exhibitions</h3>
          <p>“Colors of Heritage” - Now Live!</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Pending Approvals</h3>
          <p>2 artist submissions awaiting review.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCurator;
