import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Employees = () => {
  const columns = [
    {
      field: "name",
      headerName: "Employee",
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/40?u=${params.value}`}
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium">{params.value}</span>
        </div>
      ),
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <span
          className={`px-3 py-1 text-xs rounded-full ${
            params.value === "active"
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {params.value}
        </span>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
    },
  ];

  const rows = [
    { id: 1, name: "Ahmed", role: "Frontend Dev", status: "active", email: "ahmed@mail.com" },
    { id: 2, name: "John", role: "Backend Dev", status: "inactive", email: "john@mail.com" },
    { id: 3, name: "Sara", role: "UI Designer", status: "active", email: "sara@mail.com" },
  ];

  return (
    <div className="p-6">
      {/* TOP CARDS */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <div className="bg-white dark:bg-secondary-dark-bg p-4 rounded-xl shadow w-[180px]">
          <p className="text-gray-400 text-sm">Total</p>
          <h2 className="text-2xl font-bold">24</h2>
        </div>
        <div className="bg-white dark:bg-secondary-dark-bg p-4 rounded-xl shadow w-[180px]">
          <p className="text-gray-400 text-sm">Active</p>
          <h2 className="text-2xl font-bold text-green-500">18</h2>
        </div>
        <div className="bg-white dark:bg-secondary-dark-bg p-4 rounded-xl shadow w-[180px]">
          <p className="text-gray-400 text-sm">Inactive</p>
          <h2 className="text-2xl font-bold text-gray-500">6</h2>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4">Employees</h2>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f9fafb",
              fontWeight: "600",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Employees;