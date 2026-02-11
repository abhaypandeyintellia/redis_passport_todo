import {
  FaThLarge,
  FaUserTie,
  FaUsers,
  FaCar,
  FaMoneyBillWave,
  FaTags,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

export const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: FaThLarge },
  { id: "drivers", label: "Drivers", icon: FaUserTie },
  { id: "riders", label: "Riders", icon: FaUsers },
  { id: "vehicles", label: "Vehicles", icon: FaCar },
  { id: "payments", label: "Payments", icon: FaMoneyBillWave },
  { id: "offers", label: "Offers & Plans", icon: FaTags },
  { id: "reports", label: "Reports", icon: FaFileAlt },
  { id: "settings", label: "Settings", icon: FaCog },
];
