import ToggleSwitch from "./ToggleSwitch";
import StatusBadge from "./StatusBadge";
import { FaEdit, FaEye } from "react-icons/fa";

export default function DriverTable({ data, onToggle, onEditClick, onProfileClick }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden overflow-x-auto m-2">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-black">
          <tr>
            {[
              "ID",
              "Name",
              "Phone",
              "Vehicle",
              "Status",
              "Available for ride",
              "Action",
            ].map((h) => (
              <th key={h} className="px-4 py-3 text-left font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y-2 divide-gray-100">
          {data.map((driver) => (
            <tr key={driver.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-700">{driver.id}</td>
              <td className="px-4 py-3 text-gray-700">{driver.name}</td>
              <td className="px-4 py-3 text-gray-700">{driver.phone}</td>
              <td className="px-4 py-3 text-gray-700">{driver.vehicle}</td>

              <td className="px-4 py-3">
                <StatusBadge label={driver.status} status={driver.available} />
              </td>

              <td className="px-4 py-3">
                <ToggleSwitch
                  checked={driver.available}
                  onChange={(value) => onToggle?.(driver.id, value)}
                />
              </td>

              <td className="px-4 py-3 flex gap-3 text-gray-600">
                <FaEdit
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => onEditClick?.(driver)}
                />
                <FaEye className="cursor-pointer hover:text-green-600"
                onClick={() => onProfileClick?.(driver)}
                />
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
