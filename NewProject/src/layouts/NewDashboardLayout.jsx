import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/Header";
import { faBars, faExpand } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function DashboardLayout({ active }) {

 const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 overflow-x-hidden">
      
      <Sidebar active={active} isOpen={isSidebarOpen}/>

      <div className="flex-1 flex flex-col">
        <Header leftIcon={faBars} onLeftClick={toggleSidebar} rightIcon={faExpand}/>

        <main className="flex-1 flex flex-col min-w-0 p-4">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
