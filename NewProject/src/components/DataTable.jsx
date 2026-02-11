import { FaEdit, FaEye } from "react-icons/fa";

export default function DataTable({ 
  columns, 
  data, 
  onRowAction,
  className = "",
  showActions = true,
  actions = [
    { icon: FaEdit, label: "Edit", key: "edit", hoverColor: "hover:text-blue-600" },
    { icon: FaEye, label: "View", key: "view", hoverColor: "hover:text-green-600" }
  ]
}) {
  const renderCell = (row, column) => {
    // If column has a custom render function, use it
    if (column.render) {
      return column.render(row, (value) => onRowAction?.(column.key, row, value));
    }
    
    // Otherwise, access the data using the key
    return row[column.key];
  };

  return (
    <div className={`bg-white rounded-lg shadow overflow-hidden overflow-x-auto m-2 ${className}`}>
      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-black">
          <tr>
            {columns.map((column) => (
              <th 
                key={column.key} 
                className={`px-4 py-3 text-left font-medium ${column.headerClassName || ''}`}
              >
                {column.label}
              </th>
            ))}
            {showActions && (
              <th className="px-4 py-3 text-left font-medium">Actions</th>
            )}
          </tr>
        </thead>

        <tbody className="divide-y-2 divide-gray-100">
          {data.map((row, rowIndex) => (
            <tr key={row.id || rowIndex} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td 
                  key={column.key} 
                  className={`px-4 py-3 text-gray-700 ${column.cellClassName || ''}`}
                >
                  {renderCell(row, column)}
                </td>
              ))}
              
              {showActions && (
                <td className="px-4 py-3 flex gap-3 text-gray-600">
                  {actions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <Icon
                        key={action.key}
                        className={`cursor-pointer ${action.hoverColor}`}
                        onClick={() => onRowAction?.(action.key, row)}
                        title={action.label}
                      />
                    );
                  })}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}