import React from "react";

const DashboardHeader = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h2 className="font-semibold">Dashboard</h2>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gray-200" />
      </div>
    </header>
  );
};

export default DashboardHeader;
