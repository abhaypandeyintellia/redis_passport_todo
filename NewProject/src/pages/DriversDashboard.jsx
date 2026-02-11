import Button from "../components/Button";
import { Stat } from "../components/Stat";
import DriverTable from "../components/DriverTable";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNewDriver from "./AddNewDriver";

export default function DriversDashboard() {

  const navigate = useNavigate();

  const [showAddDriver, setShowAddDriver] = useState(false);

  const [drivers, setDrivers] = useState([
    {
      id: "#R1023",
      name: "Amit Kumar",
      phone: "9876543210",
      vehicle: "EV Auto",
      status: "Active",
      available: true,
    },
  ]);

  const handleToggle = (id, value) => {
    setDrivers((prev) =>
      prev.map((d) => (d.id === id ? { ...d, available: value } : d))
    );
  };

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <h3 className="font-semibold text-xl">Driver Management</h3>
        <Button onClick={() => setShowAddDriver(true)}>
          + Add Driver
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
        <Stat text="Total Drivers" count={342} />
        <Stat text="Active" count={280} />
        <Stat text="Pending" count={42} />
        <Stat text="Blocked" count={20} />
      </div>

      <DriverTable data={drivers} onToggle={handleToggle} />

       {showAddDriver && (
        <AddNewDriver onClose={() => setShowAddDriver(false)} />
      )}
    </>
  );
}

