import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "name", headerName: "Ady", width: 210, editable: true },
  { field: "position", headerName: "Wezipe", width: 230, editable: true },
  { field: "department", headerName: "Bölüm", width: 170, editable: true },
  {
    field: "age",
    headerName: "Ýaşy",
    type: "number",
    width: 110,
    editable: true
  },
  {
    field: "salary",
    headerName: "Maaş ($)",
    type: "number",
    width: 160,
    editable: true
  },
  {
    field: "startDate",
    headerName: "Işe başlan senesi",
    type: "date",
    width: 180,
    valueFormatter: params =>
      params.value ? new Date(params.value).toLocaleDateString("tr-TR") : ""
  }
];

const rows = [
  {
    id: 1,
    name: "Aýna Saparowa",
    position: "Frontend Developer",
    department: "IT",
    age: 28,
    salary: 1850,
    startDate: "2023-05-15"
  },
  {
    id: 2,
    name: "Berdi Orazow",
    position: "Backend Engineer",
    department: "IT",
    age: 34,
    salary: 2450,
    startDate: "2021-11-01"
  },
  {
    id: 3,
    name: "Gülşen Myradowa",
    position: "HR Manager",
    department: "HR",
    age: 31,
    salary: 1650,
    startDate: "2022-03-20"
  },
  {
    id: 4,
    name: "Sapar Geldiýew",
    position: "Marketing Specialist",
    department: "Marketing",
    age: 26,
    salary: 1350,
    startDate: "2024-01-10"
  },
  {
    id: 5,
    name: "Mähri Annaýewa",
    position: "UI/UX Designer",
    department: "Design",
    age: 24,
    salary: 1720,
    startDate: "2023-08-05"
  },
  {
    id: 6,
    name: "Oraz Durdyýew",
    position: "Project Manager",
    department: "IT",
    age: 39,
    salary: 2950,
    startDate: "2020-06-12"
  },
  {
    id: 7,
    name: "Aýjemal Baýramowa",
    position: "Accountant",
    department: "Finance",
    age: 29,
    salary: 1480,
    startDate: "2022-09-18"
  },
  {
    id: 8,
    name: "Kerim Şahyrow",
    position: "Sales Executive",
    department: "Sales",
    age: 32,
    salary: 1580,
    startDate: "2021-02-28"
  },
  {
    id: 9,
    name: "Nurýa Hojaýewa",
    position: "Data Analyst",
    department: "IT",
    age: 27,
    salary: 1920,
    startDate: "2023-10-01"
  }
];

export default function Employees() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#1a0033] to-[#0a0a1f] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Neon çarçywa */}
      <div className="absolute inset-6 border-2 border-cyan-400/30 rounded-3xl neon-frame pointer-events-none" />

      <Box className="w-full max-w-7xl z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white tracking-widest font-orbitron">
            EMPLOYEES DASHBOARD
          </h1>
          <p className="text-cyan-300 text-lg mt-2">3D Neon Futuristic Table</p>
        </div>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 8, 10, 20]}
          initialState={{
            pagination: { paginationModel: { pageSize: 8 } }
          }}
          checkboxSelection
          disableRowSelectionOnClick
          className="neon-grid border-none rounded-3xl overflow-hidden bg-[#12122b] text-white"
          slotProps={{
            toolbar: {
              className: "bg-[#1a1a3a] border-b-2 border-fuchsia-500 p-4"
            }
          }}
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              background: "linear-gradient(180deg, #1f1f45, #2a2a5e)",
              borderBottom: "3px solid #00ffcc",
              boxShadow: "0 10px 25px rgba(0, 255, 204, 0.4)"
            },
            "& .MuiDataGrid-columnHeader": {
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "1.1rem",
              textTransform: "uppercase",
              letterSpacing: "1.5px"
            },
            "& .MuiDataGrid-row": {
              backgroundColor: "rgba(18, 18, 43, 0.92)",
              transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "rgba(42, 42, 94, 0.95)",
              transform: "translateY(-4px) scale(1.02)",
              boxShadow: "0 20px 45px rgba(0, 255, 204, 0.4)"
            },
            "& .MuiDataGrid-cell": {
              color: "#e0e0ff",
              borderColor: "rgba(0, 255, 204, 0.18)"
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#1a1a3a",
              borderTop: "2px solid #00ffcc"
            }
          }}
        />
      </Box>
    </div>
  );
}
s;
