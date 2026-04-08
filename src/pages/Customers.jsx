import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

import { customersData } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  const [rows, setRows] = useState(
    customersData.map((item, index) => ({
      id: index + 1,
      ...item,
    })),
  );

  // 🔥 DELETE FUNCTION
  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const columns = [
    {
      field: "CustomerName",
      headerName: "Customer",
      flex: 1,
      renderCell: (params) => (
        <div className="flex items-center gap-3">
          <img
            src={params.row.CustomerImage}
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium">{params.value}</span>
        </div>
      ),
    },

    {
      field: "CustomerEmail",
      headerName: "Email",
      flex: 1.2,
    },

    {
      field: "ProjectName",
      headerName: "Project",
      flex: 1,
    },
    // hello world
    {
      field: "Status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <span
          className={`px-3 py-1 text-xs rounded-full ${
            params.value === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {params.value}
        </span>
      ),
    },

    {
      field: "Weeks",
      headerName: "Weeks",
      flex: 0.5,
    },

    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="m-2 md:m-10 p-4 md:p-6 bg-white dark:bg-[#1E293B] rounded-2xl shadow">
      <Header category="Page" title="Customers" />

      <div style={{ height: 500, width: "100%", marginTop: "20px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5, 8, 10]}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            border: "none",

            // HEADER STYLE
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f9fafb",
              fontWeight: "600",
            },

            // ROW STYLE
            "& .MuiDataGrid-row": {
              borderBottom: "1px solid #f1f5f9",
            },

            // DARK MODE
            "& .MuiDataGrid-columnHeaders.dark": {
              backgroundColor: "#0F172A",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Customers;
