import Button from "../components/Button";
import { Stat } from "../components/Stat";
import DriverTable from "../components/DriverTable";
import { useState } from "react";
import EditDriver from "../ui/EditDriver";
import DriverProfile from "../ui/DriverProfile";
import DummyAddNew from "../components/DummyAddNew";
import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import FileInput from "../components/FileInput";

export default function DriversDashboard() {
  const [showAddDriver, setShowAddDriver] = useState(false);
  const [showEditDriver, setShowEditDriver] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [showDriverProfile, setShowDriverProfile] = useState(false);

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

  const handleEditClick = (driver) => {
    setSelectedDriver(driver);
    setShowEditDriver(true);
  };

  const handleCloseEdit = () => {
    setShowEditDriver(false);
    setSelectedDriver(null);
  };

  const handleProfileClick = (driver) => {
    setSelectedDriver(driver);
    setShowDriverProfile(true);
  }

  const handleProfileClose = () => {
    setShowDriverProfile(false);
    setSelectedDriver(null);
  }

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

      <div className="mx-2 mt-2 bg-white px-4 py-3 rounded-t-lg border-b border-gray-100">
        <h1 className="text-lg font-bold">DRIVER LIST</h1>
      </div>

      <DriverTable
        data={drivers}
        onToggle={handleToggle}
        onEditClick={handleEditClick}
        onProfileClick={handleProfileClick}
      />

      {showAddDriver && (
        <DummyAddNew title={"Add New Driver"} onClose={() => setShowAddDriver(false)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Driver Name" />
            <Input label="Phone Number" />

            <SelectInput
              label="Vehicle Type"
              options={["Car", "Bike", "Truck"]}
            />

            <Input label="License Number" />

            <div className="md:col-span-2">
              <FileInput label="Documents" />
            </div>
          </div>
        </DummyAddNew>
      )}

      {showEditDriver && (
        <EditDriver driver={selectedDriver} onClose={handleCloseEdit} />
      )}

      {showDriverProfile && (
        <DriverProfile driver={selectedDriver} onClose={handleProfileClose} />
      )}
    </>
  );
}
