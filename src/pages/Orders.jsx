import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import "@fontsource/orbitron/400.css";
import "@fontsource/orbitron/700.css";

const columns = [
  { field: "OrderID", headerName: "Order ID", width: 120 },
  { field: "CustomerName", headerName: "Müşderi", width: 190, editable: true },
  { field: "Product", headerName: "Önüm", width: 210, editable: true },
  {
    field: "TotalAmount",
    headerName: "Jemi ($)",
    type: "number",
    width: 150,
    editable: true,
    // Düzeltilen valueFormatter - undefined / null kontrol
    valueFormatter: value => {
      if (value == null) return "$0"; // null ýa-da undefined bolsa
      return `$${Number(value).toLocaleString()}`;
    }
  },
  {
    field: "Status",
    headerName: "Status",
    width: 160,
    editable: true,
    renderCell: params => {
      const status = params.value || "Unknown";
      let colorClass = "bg-gray-500";

      if (status === "Completed") colorClass = "bg-green-500";
      else if (status === "Pending") colorClass = "bg-yellow-500";
      else if (status === "Cancelled") colorClass = "bg-red-500";

      return (
        <div
          className={`px-4 py-1.5 rounded-full text-white text-sm font-medium ${colorClass}`}
        >
          {status}
        </div>
      );
    }
  },
  { field: "OrderDate", headerName: "Sargyt Senesi", type: "date", width: 170 },
  {
    field: "Location",
    headerName: "Ýerleşýän ýeri",
    width: 180,
    editable: true
  }
];

const rows = [
  {
    id: 1,
    OrderID: 10248,
    CustomerName: "Ahmed Saparow",
    Product: "Smartphone",
    TotalAmount: 1250,
    Status: "Completed",
    OrderDate: "2025-03-01",
    Location: "Aşgabat"
  },
  {
    id: 2,
    OrderID: 10249,
    CustomerName: "Gülşen Myradowa",
    Product: "Laptop",
    TotalAmount: 2450,
    Status: "Pending",
    OrderDate: "2025-03-02",
    Location: "Mary"
  },
  {
    id: 3,
    OrderID: 10250,
    CustomerName: "Berdi Orazow",
    Product: "Headphones",
    TotalAmount: 320,
    Status: "Completed",
    OrderDate: "2025-03-03",
    Location: "Türkmenabat"
  },
  {
    id: 4,
    OrderID: 10251,
    CustomerName: "Mähri Annaýewa",
    Product: "Tablet",
    TotalAmount: 890,
    Status: "Cancelled",
    OrderDate: "2025-03-04",
    Location: "Daşoguz"
  },
  {
    id: 5,
    OrderID: 10252,
    CustomerName: "Sapar Geldiýew",
    Product: "Smart Watch",
    TotalAmount: 450,
    Status: "Pending",
    OrderDate: "2025-03-05",
    Location: "Balkanabat"
  },
  {
    id: 6,
    OrderID: 10253,
    CustomerName: "Aýna Saparowa",
    Product: "Camera",
    TotalAmount: 1250,
    Status: "Completed",
    OrderDate: "2025-03-06",
    Location: "Aşgabat"
  },
  {
    id: 7,
    OrderID: 10254,
    CustomerName: "Oraz Durdyýew",
    Product: "Gaming PC",
    TotalAmount: 3250,
    Status: "Completed",
    OrderDate: "2025-03-07",
    Location: "Mary"
  },
  {
    id: 8,
    OrderID: 10255,
    CustomerName: "Kerim Şahyrow",
    Product: "Wireless Earbuds",
    TotalAmount: 180,
    Status: "Pending",
    OrderDate: "2025-03-08",
    Location: "Türkmenabat"
  }
];

export default function Orders() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#1a0033] to-[#0a0a1f] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-8 border-2 border-cyan-400/30 rounded-3xl shadow-[0_0_60px_#00ffcc,inset_0_0_70px_#ff00ff30] pointer-events-none" />

      <Box className="w-full max-w-7xl z-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white tracking-[4px] font-orbitron">
            ORDERS
          </h1>
          <p className="text-cyan-300 text-xl mt-3">
            3D Neon Futuristic Dashboard
          </p>
        </div>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 15, 20]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } }
          }}
          checkboxSelection
          disableRowSelectionOnClick
          className="border-none rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/60 bg-[#12122b] text-white"
          slotProps={{
            toolbar: {
              className: "bg-[#1a1a3a] border-b-2 border-fuchsia-500 p-4"
            }
          }}
          sx={{
            height: 680,

            "& .MuiDataGrid-columnHeaders": {
              background: "linear-gradient(180deg, #1f1f45, #2a2a5e)",
              borderBottom: "4px solid #00ffcc",
              boxShadow: "0 15px 30px rgba(0, 255, 204, 0.4)"
            },
            "& .MuiDataGrid-columnHeader": {
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "1.15rem",
              textTransform: "uppercase",
              letterSpacing: "2px"
            },
            "& .MuiDataGrid-row": {
              backgroundColor: "rgba(18, 18, 43, 0.92)",
              transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "rgba(42, 42, 94, 0.95)",
              transform: "translateY(-5px) scale(1.02)",
              boxShadow: "0 25px 50px rgba(0, 255, 204, 0.45)"
            },
            "& .MuiDataGrid-cell": {
              color: "#e0e0ff",
              borderColor: "rgba(0, 255, 204, 0.2)",
              fontSize: "1.02rem"
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#1a1a3a",
              borderTop: "3px solid #00ffcc"
            }
          }}
        />
      </Box>
    </div>
  );
}
