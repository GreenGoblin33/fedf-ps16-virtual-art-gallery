import React from "react";

const DashboardAdmin: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-4">
        Manage users, gallery settings, exhibitions, and monitor overall analytics.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">User Management</h3>
          <p>Approve or remove users, assign roles.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Sales Overview</h3>
          <p>Total sales and visitor engagement summary.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
