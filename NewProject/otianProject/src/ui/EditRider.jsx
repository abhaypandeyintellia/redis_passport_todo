import Input from "../components/Input";
import Button from "../components/Button";
import SelectInput from "../components/SelectInput";

const EditDriver = ({ driver, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg" onClick={(e)=> e.stopPropagation()}>

        <div className="flex items-center justify-between px-6 py-4 border-b-blue-500">
          <h2 className="text-lg font-semibold text-blue-600">
            {driver ? `Edit Driver ${driver.id}` : "Edit Driver"}
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

        <form className="px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Driver Name" />
            <Input label="Phone Number" />

            <SelectInput
              label="Vehicle Type"
              options={["Car", "Bike", "Truck"]}
            />

          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button type="submit">Update</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDriver;

