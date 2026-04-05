import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Orders = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },

    { field: "customer", headerName: "Customer", width: 180 },

    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            params.value === "completed"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {params.value}
        </span>
      ),
    },

    {
      field: "amount",
      headerName: "Amount",
      width: 130,
      valueFormatter: (params) =>
        params?.value ? `$${params.value}` : "$0",
    },

    {
      field: "OrderDate",
      headerName: "Order Date",
      width: 180,
      type: "date",

      // 🔥 FIX DATE HERE
      valueGetter: (params) => {
        if (!params.value) return null;
        return new Date(params.value);
      },

      // 🔥 SAFE FORMATTER
      valueFormatter: (params) => {
        if (!params?.value) return "-";
        return params.value.toLocaleDateString();
      },
    },
  ];

  const rows = [
    {
      id: 1,
      customer: "Ahmed",
      status: "completed",
      amount: 120,
      OrderDate: "2024-03-12",
    },
    {
      id: 2,
      customer: "John",
      status: "pending",
      amount: 80,
      OrderDate: "2024-02-05",
    },
    {
      id: 3,
      customer: "Sara",
      status: "completed",
      amount: 250,
      OrderDate: "2024-01-22",
    },
  ];

  return (
    <div className="p-6">
      <div className="bg-white dark:bg-secondary-dark-bg p-4 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Orders</h2>

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;