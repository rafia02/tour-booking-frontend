"use client";

import { Avatar, Button, Layout, Grid } from "antd";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

const { Header } = Layout;
const { useBreakpoint } = Grid;

interface Props {
  openSidebar: () => void;
}

const DashboardHeader = ({ openSidebar }: Props) => {
  const screens = useBreakpoint();

  return (
    <Header
      style={{
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
      }}
      className="flex items-center justify-between !px-4 !md:px-5 !h-16"
    >
      <div className="flex items-center gap-3">
        {!screens.md && (
          <Button type="text" onClick={openSidebar}>
            <HiOutlineMenuAlt2 size={24} />
          </Button>
        )}

        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>

      <Avatar size={40} icon={<FaUser />} />
    </Header>
  );
};

export default DashboardHeader;
