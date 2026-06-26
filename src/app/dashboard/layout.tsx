"use client";

import { useState } from "react";
import { Drawer } from "antd";

import DashboardHeader from "@/components/shared/DashboardHeader";
import DashboardSidebar from "@/components/shared/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <DashboardSidebar />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Admin Panel"
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        size={250}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <DashboardSidebar />
      </Drawer>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader openSidebar={() => setOpen(true)} />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
