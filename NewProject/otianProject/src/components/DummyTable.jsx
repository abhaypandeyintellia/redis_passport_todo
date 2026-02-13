import { useState } from "react";
import { FaEdit, FaEye, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function DummyTable({ 
  columns, 
  data, 
  onRowAction,
  className = "",
  showActions = true,
  actions = [
    { icon: FaEdit, label: "Edit", key: "edit", hoverColor: "hover:text-blue-600" },
    { icon: FaEye, label: "View", key: "view", hoverColor: "hover:text-green-600" }
  ],
  itemsPerPage = 5,
  showPagination = true
}) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const renderCell = (row, column) => {
    if (column.render) {
      return column.render(row, (value) => onRowAction?.(column.key, row, value));
    }
    return row[column.key];
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow overflow-hidden m-2 ${className}`}>
      <div className="overflow-x-auto">
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
                <th className="px-4 py-3 text-left font-medium">Action</th>
              )}
            </tr>
          </thead>

          <tbody className="divide-y-2 divide-gray-100">
            {currentData.map((row, rowIndex) => (
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
                  <td className="px-4 py-3">
                    <div className="flex gap-3 text-gray-600">
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
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, data.length)} from {data.length}
          </div>

          <div className="flex items-center gap-1">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded ${
                currentPage === 1
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaChevronLeft size={12} />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) => (
              page === '...' ? (
                <span key={`ellipsis-${index}`} className="px-3 py-1 text-gray-400">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 rounded text-sm ${
                    currentPage === page
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              )
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded ${
                currentPage === totalPages
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}