// "use client";

// import { Menu } from "antd";
// import { usePathname, useRouter } from "next/navigation";

// import { MdDashboard, MdTour, MdPeople, MdShoppingCart } from "react-icons/md";

// const items = [
//   {
//     key: "/dashboard",
//     icon: <MdDashboard size={20} />,
//     label: <span className="font-medium">Dashboard</span>,
//   },
//   {
//     key: "/tours",
//     icon: <MdTour size={20} />,
//     label: <span className="font-medium">Tours</span>,
//   },
//   {
//     key: "/users",
//     icon: <MdPeople size={20} />,
//     label: <span className="font-medium">Users</span>,
//   },
//   {
//     key: "/bookings",
//     icon: <MdShoppingCart size={20} />,
//     label: <span className="font-medium">Bookings</span>,
//   },
// ];

// const DashboardSidebar = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   return (
//     <div className="w-[250px] h-screen bg-white shadow-sm">
//       <div className="h-16 flex items-center px-6 text-xl font-bold">
//         Admin Panel
//       </div>

//       <div className="dashboard_manu px-3 sm:px-4">
//         <Menu
//           mode="inline"
//           selectedKeys={[pathname]}
//           items={items}
//           onClick={({ key }) => router.push(key)}
//           className="!border-none"
//         />
//       </div>
//     </div>
//   );
// };

// export default DashboardSidebar;

"use client";

import { Menu, Button } from "antd";
import type { MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";

import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlineCalendarMonth,
  MdOutlineDirectionsBus,
  MdOutlineMap,
  MdOutlinePhotoLibrary,
  MdOutlineAttachMoney,
  MdOutlinePayments,
  MdOutlineSettings,
  MdOutlinePeople,
  MdOutlineGroups,
  MdOutlineReviews,
  MdOutlineSupportAgent,
  MdOutlineCardGiftcard,
  MdOutlineMailOutline,
  MdOutlineLogout,
  MdOutlineFolder,
} from "react-icons/md";

const items: MenuProps["items"] = [
  {
    type: "group",
    label: "OVERVIEW",
    children: [
      {
        key: "/dashboard",
        icon: <MdOutlineDashboard size={20} />,
        label: "Dashboard",
      },
      {
        key: "/analytics",
        icon: <MdOutlineAnalytics size={20} />,
        label: "Analytics",
      },
    ],
  },

  {
    type: "group",
    label: "BOOKINGS",
    children: [
      {
        key: "/bookings",
        icon: <MdOutlineCalendarMonth size={20} />,
        label: "Bookings",
      },
      {
        key: "/transportation",
        icon: <MdOutlineDirectionsBus size={20} />,
        label: "Transportation",
      },
    ],
  },

  {
    type: "group",
    label: "TOURS",
    children: [
      {
        key: "/tours",
        icon: <MdOutlineMap size={20} />,
        label: "Tours",
      },
      {
        key: "/tour-images",
        icon: <MdOutlinePhotoLibrary size={20} />,
        label: "Tour Images",
      },
    ],
  },

  {
    type: "group",
    label: "PRICING",
    children: [
      {
        key: "/transport-pricing",
        icon: <MdOutlineAttachMoney size={20} />,
        label: "Transport Pricing",
      },
      {
        key: "/excursion-pricing",
        icon: <MdOutlineAttachMoney size={20} />,
        label: "Excursion Pricing",
      },
      {
        key: "/airport-pricing",
        icon: <MdOutlineAttachMoney size={20} />,
        label: "Airport Pricing",
      },
      {
        key: "/hotel-pricing",
        icon: <MdOutlineAttachMoney size={20} />,
        label: "Hotel Pricing",
      },
    ],
  },

  {
    type: "group",
    label: "FINANCIAL",
    children: [
      {
        key: "/financials",
        icon: <MdOutlineFolder size={20} />,
        label: "Financials",
      },
      {
        key: "/payments",
        icon: <MdOutlinePayments size={20} />,
        label: "Payments",
      },
    ],
  },

  {
    type: "group",
    label: "MANAGEMENT",
    children: [
      {
        key: "/users",
        icon: <MdOutlinePeople size={20} />,
        label: "Users & Invites",
      },
      {
        key: "/customers",
        icon: <MdOutlineGroups size={20} />,
        label: "Customers",
      },
      {
        key: "/reviews",
        icon: <MdOutlineReviews size={20} />,
        label: "Reviews",
      },
      {
        key: "/support",
        icon: <MdOutlineSupportAgent size={20} />,
        label: (
          <div className="flex justify-between items-center w-full">
            <span>Support Tickets</span>

            <span className="rounded-full bg-red-500 px-2 py-[2px] text-[10px] text-white">
              2
            </span>
          </div>
        ),
      },
      {
        key: "/gift-cards",
        icon: <MdOutlineCardGiftcard size={20} />,
        label: "Gift Cards",
      },
      {
        key: "/contact-messages",
        icon: <MdOutlineMailOutline size={20} />,
        label: (
          <div className="flex justify-between items-center w-full">
            <span>Contact Messages</span>

            <span className="rounded-full bg-blue-500 px-2 py-[2px] text-[10px] text-white">
              13
            </span>
          </div>
        ),
      },
    ],
  },

  {
    type: "group",
    label: "SYSTEM",
    children: [
      {
        key: "/settings",
        icon: <MdOutlineSettings size={20} />,
        label: "Settings",
      },
    ],
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="flex h-screen w-[250px] flex-col shadow-sm  bg-white">
      {/* Logo */}

      <div className="flex h-16 items-center border-b border-b-gray-200 px-6">
        <h2 className="text-lg font-bold tracking-wide">Admin Panel</h2>
      </div>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <Menu
          className="dashboard_menu !border-none"
          mode="inline"
          selectedKeys={[pathname]}
          items={items}
          onClick={({ key }) => router.push(key)}
        />
      </div>

      {/* Logout */}

      <div className="border-t border-t-gray-200 p-4">
        <Button danger block size="large" icon={<MdOutlineLogout size={20} />}>
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
