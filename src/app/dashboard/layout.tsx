import DashboardHeader from "@/components/shared/DashboardHeader";
import DashboardSidebar from "@/components/shared/DashboardSidebar";
import Header from "@/components/shared/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
