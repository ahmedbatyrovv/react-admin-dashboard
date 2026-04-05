import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Orders = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "customer",
      headerName: "Customer",
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
            {params.value[0]}
          </div>
          <span className="font-medium">{params.value}</span>
        </div>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            params.value === "completed"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {params.value}
        </span>
      ),
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      valueFormatter: (params) =>
        params?.value ? `$${params.value}` : "$0",
    },
    {
      field: "OrderDate",
      headerName: "Date",
      flex: 1,
      type: "date",
      valueGetter: (params) =>
        params.value ? new Date(params.value) : null,
      valueFormatter: (params) =>
        params?.value ? params.value.toLocaleDateString() : "-",
    },
  ];

  const rows = [
    { id: 1, customer: "Ahmed", status: "completed", amount: 120, OrderDate: "2024-03-12" },
    { id: 2, customer: "John", status: "pending", amount: 80, OrderDate: "2024-02-05" },
    { id: 3, customer: "Sara", status: "completed", amount: 250, OrderDate: "2024-01-22" },
  ];

  return (
    <div className="p-6">
      <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4">Orders Overview</h2>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f9fafb",
              fontWeight: "600",
            },
            "& .MuiDataGrid-row": {
              borderBottom: "1px solid #f1f5f9",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Orders;