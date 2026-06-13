import Link from "next/link";

const menu = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Tours", href: "/tours" },
  { name: "Users", href: "/users" },
  { name: "Bookings", href: "/bookings" },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r hidden md:block">
      <div className="p-6 font-bold text-xl">Admin Panel</div>

      <nav className="space-y-2 p-4">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
