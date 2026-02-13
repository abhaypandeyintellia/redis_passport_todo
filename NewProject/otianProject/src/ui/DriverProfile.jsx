import Button from "../components/Button";

const DriverProfile = ({onClose, driver}) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg" onClick={(e)=> e.stopPropagation()}>

        <div className="flex items-center justify-between px-6 py-4 border-b-blue-500">
          <h2 className="text-lg font-semibold text-blue-600 border-b-blue-600">
            Driver Profile
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
            aria-label="Close add driver form"
          >
            X
          </button>
        </div>

        <div className="px-6 py-6">
          
          <div className="px-4 py-4 border border-gray-400 grid grid-cols-1 md:grid-cols-2">
            <div className="pb-2">
                <h1 className="text-lg font-semibold">Name</h1>
                <p className="text-lg font-light py-2 text-gray-600">{driver.name}</p>
            </div>
            <div>
                <h1 className="text-lg font-semibold">Phone</h1>
                <p className="text-lg font-light py-2 text-gray-600">{driver.phone}</p>
            </div>
            <div>
                <h1 className="text-lg font-semibold">Vehicle</h1>
                <p className="text-lg font-light py-2 text-gray-600">{driver.vehicle}</p>
            </div>
            <div>
                <h1 className="text-lg font-semibold">Status</h1>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${driver.available ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
      {driver.status}
    </span>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button type="submit" className="bg-red-600 hover:bg-red-500">Block Driver</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;

