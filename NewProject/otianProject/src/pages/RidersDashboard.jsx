import Button from "../components/Button";
import { Stat } from "../components/Stat";
import RiderTable from "../components/RiderTable";
import { useState } from "react";
import EditRider from "../ui/EditDriver";
import RiderProfile from "../ui/DriverProfile";
import DummyAddNew from "../components/DummyAddNew";
import Input from "../components/Input";

export default function RidersDashboard() {
    const [showAddRider, setShowAddRider] = useState(false);
    const [showEditRider, setShowEditRider] = useState(false);
    const [selectedRider, setSelectedRider] = useState(null);
    const [showRiderProfile, setShowRiderProfile] = useState(false);

    const [riders, setRiders] = useState([
        {
            id: "#R1023",
            name: "Amit Kumar",
            phone: "9876543210",
            totalrides: 42,
            status: "Active",
            available: true,
        },
    ]);

    const handleToggle = (id, value) => {
        setRiders((prev) =>
            prev.map((d) => (d.id === id ? { ...d, available: value } : d))
        );
    };

    const handleEditClick = (riders) => {
        setSelectedRider(riders);
        setShowEditRider(true);
    };

    const handleCloseEdit = () => {
        setShowEditRider(false);
        setSelectedRider(null);
    };

    const handleProfileClick = (riders) => {
        setSelectedRider(riders);
        setShowRiderProfile(true);
    }

    const handleProfileClose = () => {
        setShowRiderProfile(false);
        setSelectedRider(null);
    }

    return (
        <>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="font-semibold text-xl">Driver Management</h3>
                <Button onClick={() => setShowAddRider(true)}>
                    + Add Rider
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                <Stat text="Total Riders" count={342} />
                <Stat text="Active Riders" count={280} />
                <Stat text="Blocked Riders" count={20} />
            </div>

            <div className="mx-2 mt-2 bg-white px-4 py-3 rounded-t-lg border-b border-gray-100">
                <h1 className="text-lg font-bold">DRIVER LIST</h1>
            </div>

            <RiderTable
                data={riders}
                onToggle={handleToggle}
                onEditClick={handleEditClick}
                onProfileClick={handleProfileClick}
            />

            {showAddRider && (
                <DummyAddNew onClose={() => setShowAddRider(false)} title={"Add New Rider"}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Driver Name" />
                        <Input label="Phone Number" />

                        <div className="md:col-span-2">
                            <Input label="Email (Optional)" type="email" />
                        </div>
                    </div>
                </DummyAddNew>
            )}

            {showEditRider && (
                <EditRider driver={selectedRider} onClose={handleCloseEdit} />
            )}

            {showRiderProfile && (
                <RiderProfile driver={selectedRider} onClose={handleProfileClose} />
            )}
        </>
    );
}
