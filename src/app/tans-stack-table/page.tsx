import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import { ChevronUp, ChevronDown, Search, ChevronLeft, ChevronRight, Edit, Trash2, Eye } from 'lucide-react';

// Sample API data
const apiData = [
  {
    "id": 1,
    "brand": "SU-United",
    "account": "SU-Bower & Wilkins",
    "reseller": "DC-Deals",
    "market_place": "Amazon",
    "region": "US",
    "seller_enforcement_status": "Unauthorized",
    "seller_type": "New",
    "threat_score": 7.5,
    "research_escalated": true,
    "seller_research_status": "Not Ready",
    "active": true
  },
  {
    "id": 2,
    "brand": "SU-United",
    "account": "SU-Bose",
    "reseller": "TechDeals",
    "market_place": "Amazon",
    "region": "EU",
    "seller_enforcement_status": "Authorized",
    "seller_type": "Existing",
    "threat_score": 3.2,
    "research_escalated": false,
    "seller_research_status": "Ready",
    "active": false
  },
  {
    "id": 3,
    "brand": "SU-United",
    "account": "SU-Sony",
    "reseller": "ElectroWorld",
    "market_place": "eBay",
    "region": "US",
    "seller_enforcement_status": "Under Review",
    "seller_type": "New",
    "threat_score": 8.7,
    "research_escalated": true,
    "seller_research_status": "In Progress",
    "active": true
  }
];

// Universal Reusable DataTable Component
const UniversalDataTable = ({
  data = [],
  columnConfig = {},
  options = {}
}) => {
  const {
    enableGlobalFilter = true,
    enableSorting = true,
    enablePagination = true,
    pageSize = 10,
    className = "",
    onEdit = null,
    onDelete = null,
    onView = null,
    showActions = false
  } = options;

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: pageSize,
  });

  // Generate columns based on data and config
  const columns = useMemo(() => {
    if (!data || data.length === 0) return [];

    const columnHelper = createColumnHelper();
    const sampleRow = data[0];
    const cols = [];

    Object.keys(sampleRow).forEach(key => {
      const config = columnConfig[key] || {};
      const {
        header = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        type = 'text',
        options: selectOptions = [],
        render,
        width,
        sortable = true,
        filterable = true
      } = config;

      cols.push(
        columnHelper.accessor(key, {
          header,
          size: width,
          enableSorting: sortable,
          enableColumnFilter: filterable,
          cell: (info) => {
            const value = info.getValue();
            const rowData = info.row.original;
            const rowIndex = info.row.index;

            // Custom render function
            if (render) {
              return render(value, rowData, rowIndex);
            }

            // Handle different input types
            switch (type) {
              case 'checkbox':
                return (
                  <input
                    type="checkbox"
                    checked={Boolean(value)}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[rowIndex][key] = e.target.checked;
                      // You can emit an event or callback here
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                );

              case 'radio':
                return (
                  <div className="flex space-x-2">
                    {selectOptions.map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          name={`${key}-${rowIndex}`}
                          value={option.value}
                          checked={value === option.value}
                          onChange={(e) => {
                            const newData = [...data];
                            newData[rowIndex][key] = e.target.value;
                            // You can emit an event or callback here
                          }}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-1 text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                );

              case 'select':
                return (
                  <select
                    value={value || ''}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[rowIndex][key] = e.target.value;
                      // You can emit an event or callback here
                    }}
                    className="px-3 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select...</option>
                    {selectOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                );

              case 'input':
                return (
                  <input
                    type="text"
                    value={value || ''}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[rowIndex][key] = e.target.value;
                      // You can emit an event or callback here
                    }}
                    className="px-3 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                );

              case 'badge':
                const badgeColor = selectOptions.find(opt => opt.value === value)?.color || 'gray';
                return (
                  <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${badgeColor}-100 text-${badgeColor}-600`}>
                    {value}
                  </span>
                );

              case 'link':
                return value ? (
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    View Link
                  </a>
                ) : '-';

              case 'number':
                return (
                  <span className="font-mono">
                    {typeof value === 'number' ? value.toFixed(2) : value}
                  </span>
                );

              case 'currency':
                return (
                  <span className="font-mono text-green-600">
                    ${typeof value === 'number' ? value.toFixed(2) : value}
                  </span>
                );

              case 'date':
                return value ? new Date(value).toLocaleDateString() : '-';

              case 'text':
              default:
                return value?.toString() || '-';
            }
          },
        })
      );
    });

    // Add actions column if enabled
    if (showActions) {
      cols.push(
        columnHelper.display({
          id: 'actions',
          header: 'Actions',
          size: 120,
          cell: (info) => (
            <div className="flex space-x-2">
              {onView && (
                <button
                  onClick={() => onView(info.row.original)}
                  className="p-1 text-blue-600 hover:bg-blue-100 rounded"
                  title="View"
                >
                  <Eye className="w-4 h-4" />
                </button>
              )}
              {onEdit && (
                <button
                  onClick={() => onEdit(info.row.original)}
                  className="p-1 text-green-600 hover:bg-green-100 rounded"
                  title="Edit"
                >
                  <Edit className="w-4 h-4" />
                </button>
              )}
              {onDelete && (
                <button
                  onClick={() => onDelete(info.row.original)}
                  className="p-1 text-red-600 hover:bg-red-100 rounded"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ),
        })
      );
    }

    return cols;
  }, [data, columnConfig, showActions, onView, onEdit, onDelete]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      pagination,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableSorting,
    enableGlobalFilter,
  });

  return (
    <div className={`p-4 ${className}`}>
      {/* Global Search */}
      {enableGlobalFilter && (
        <div className="mb-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search all columns..."
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(String(e.target.value))}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    style={{ width: header.getSize() }}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={`flex items-center space-x-2 ${
                          header.column.getCanSort() ? 'cursor-pointer select-none' : ''
                        }`}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <span>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </span>
                        {header.column.getCanSort() && (
                          <span className="flex flex-col">
                            {header.column.getIsSorted() === 'asc' ? (
                              <ChevronUp className="w-4 h-4 text-blue-600" />
                            ) : header.column.getIsSorted() === 'desc' ? (
                              <ChevronDown className="w-4 h-4 text-blue-600" />
                            ) : (
                              <div className="flex flex-col">
                                <ChevronUp className="w-3 h-3 text-gray-400" />
                                <ChevronDown className="w-3 h-3 text-gray-400 -mt-1" />
                              </div>
                            )}
                          </span>
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {enablePagination && (
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">
              Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{' '}
              {Math.min(
                (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                table.getFilteredRowModel().rows.length
              )}{' '}
              of {table.getFilteredRowModel().rows.length} results
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              First
            </button>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="p-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm text-gray-700">
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </span>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="p-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Last
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Example Usage Component
const App = () => {
  // Column Configuration for the table
  const columnConfig = {
    id: {
      header: 'ID',
      type: 'text',
      width: 80,
      sortable: true
    },
    brand: {
      header: 'Brand',
      type: 'text',
      width: 120
    },
    account: {
      header: 'Account',
      type: 'text',
      width: 150
    },
    reseller: {
      header: 'Reseller',
      type: 'input',
      width: 150
    },
    market_place: {
      header: 'Marketplace',
      type: 'select',
      width: 120,
      options: [
        { value: 'Amazon', label: 'Amazon' },
        { value: 'eBay', label: 'eBay' },
        { value: 'Walmart', label: 'Walmart' }
      ]
    },
    region: {
      header: 'Region',
      type: 'radio',
      width: 150,
      options: [
        { value: 'US', label: 'US' },
        { value: 'EU', label: 'EU' }
      ]
    },
    seller_enforcement_status: {
      header: 'Status',
      type: 'badge',
      width: 130,
      options: [
        { value: 'Authorized', label: 'Authorized', color: 'green' },
        { value: 'Unauthorized', label: 'Unauthorized', color: 'red' },
        { value: 'Under Review', label: 'Under Review', color: 'yellow' }
      ]
    },
    threat_score: {
      header: 'Threat Score',
      type: 'number',
      width: 110,
      render: (value) => {
        const colorClass = value >= 7 ? 'text-red-600 bg-red-100' :
                          value >= 5 ? 'text-yellow-600 bg-yellow-100' :
                          'text-green-600 bg-green-100';
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
            {value}
          </span>
        );
      }
    },
    research_escalated: {
      header: 'Escalated',
      type: 'checkbox',
      width: 100
    },
    active: {
      header: 'Active',
      type: 'checkbox',
      width: 80
    }
  };

  const handleView = (row) => {
    console.log('View:', row);
  };

  const handleEdit = (row) => {
    console.log('Edit:', row);
  };

  const handleDelete = (row) => {
    console.log('Delete:', row);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Universal Data Table</h1>

        {/* Example 1: Full featured table with actions */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Full Featured Table with Actions</h2>
          <UniversalDataTable
            data={apiData}
            columnConfig={columnConfig}
            options={{
              enableGlobalFilter: true,
              enableSorting: true,
              enablePagination: true,
              pageSize: 5,
              showActions: true,
              onView: handleView,
              onEdit: handleEdit,
              onDelete: handleDelete,
              className: "bg-white rounded-lg shadow-lg"
            }}
          />
        </div>

        {/* Example 2: Table without search */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Table Without Search</h2>
          <UniversalDataTable
            data={apiData}
            columnConfig={columnConfig}
            options={{
              enableGlobalFilter: false,
              enableSorting: true,
              enablePagination: true,
              pageSize: 10,
              showActions: false,
              className: "bg-white rounded-lg shadow-lg"
            }}
          />
        </div>

        {/* Example 3: Simple table - no pagination, no search */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Simple Table (No Pagination, No Search)</h2>
          <UniversalDataTable
            data={apiData}
            columnConfig={columnConfig}
            options={{
              enableGlobalFilter: false,
              enableSorting: true,
              enablePagination: false,
              showActions: false,
              className: "bg-white rounded-lg shadow-lg"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;