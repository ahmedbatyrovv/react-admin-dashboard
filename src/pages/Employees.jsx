import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { CssBaseline } from '@mui/material';
import '@fontsource/orbitron/400.css';
import '@fontsource/orbitron/700.css';

// 3D Futuristic Tema
const futuristicTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00ffcc' },
    secondary: { main: '#ff00ff' },
    background: { default: '#0a0a1f', paper: '#12122b' },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", sans-serif',
  },
});

// Employees üçin sütunlar
const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Ady', width: 180, editable: true },
  { field: 'position', headerName: 'Wezipe', width: 200, editable: true },
  { field: 'department', headerName: 'Bölüm', width: 160, editable: true },
  { field: 'age', headerName: 'Ýaşy', type: 'number', width: 100, editable: true },
  { field: 'salary', headerName: 'Maaş ($)', type: 'number', width: 140, editable: true },
  { 
    field: 'startDate', 
    headerName: 'Işe başlan senesi', 
    type: 'date', 
    width: 160,
    valueFormatter: (params) => {
      if (!params.value) return '';
      return new Date(params.value).toLocaleDateString('tr-TR');
    }
  },
];

// Employees maglumatlary
const rows = [
  { id: 1, name: 'Aýna Saparowa', position: 'Frontend Developer', department: 'IT', age: 28, salary: 1850, startDate: '2023-05-15' },
  { id: 2, name: 'Berdi Orazow', position: 'Backend Engineer', department: 'IT', age: 34, salary: 2450, startDate: '2021-11-01' },
  { id: 3, name: 'Gülşen Myradowa', position: 'HR Manager', department: 'HR', age: 31, salary: 1650, startDate: '2022-03-20' },
  { id: 4, name: 'Sapar Geldiýew', position: 'Marketing Specialist', department: 'Marketing', age: 26, salary: 1350, startDate: '2024-01-10' },
  { id: 5, name: 'Mähri Annaýewa', position: 'UI/UX Designer', department: 'Design', age: 24, salary: 1720, startDate: '2023-08-05' },
  { id: 6, name: 'Oraz Durdyýew', position: 'Project Manager', department: 'IT', age: 39, salary: 2950, startDate: '2020-06-12' },
  { id: 7, name: 'Aýjemal Baýramowa', position: 'Accountant', department: 'Finance', age: 29, salary: 1480, startDate: '2022-09-18' },
  { id: 8, name: 'Kerim Şahyrow', position: 'Sales Executive', department: 'Sales', age: 32, salary: 1580, startDate: '2021-02-28' },
];

export default function EmployeesDataGrid() {
  return (
    <ThemeProvider theme={futuristicTheme}>
      <CssBaseline />
      <Box
        sx={{
          height: '90vh',
          width: '100%',
          p: 3,
          background: 'linear-gradient(135deg, #0a0a1f 0%, #1a0033 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Neon çarçywa effekt */}
        <Box
          sx={{
            position: 'absolute',
            inset: 20,
            border: '2px solid rgba(0, 255, 204, 0.3)',
            boxShadow: 
              0 0 30px rgba(0, 255, 204, 0.6),
              inset 0 0 40px rgba(255, 0, 255, 0.2)
            ,
            borderRadius: '20px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: { paginationModel: { pageSize: 8 } },
          }}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            height: 650,
            width: '100%',
            maxWidth: 1200,
            border: 'none',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: 
              0 0 60px rgba(0, 255, 204, 0.5),
              0 25px 50px -12px rgb(0 0 0 / 0.6)
            ,
            backgroundColor: '#12122b',
            position: 'relative',
        zIndex: 2,
    // 3D Header
            '& .MuiDataGrid-columnHeaders': {
              background: 'linear-gradient(180deg, #1f1f45 0%, #2a2a5e 100%)',
              borderBottom: '3px solid #00ffcc',
              boxShadow: '0 10px 20px rgba(0, 255, 204, 0.3)',
              '& .MuiDataGrid-columnHeader': {
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1.05rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 204, 0.15)',
                },
              },
              '& .MuiDataGrid-columnSeparator': {
                color: '#00ffcc',
              },
            },

            // 3D Setirler (hover-da ýokary göterilýär)
            '& .MuiDataGrid-row': {
              backgroundColor: 'rgba(18, 18, 43, 0.85)',
              borderBottom: '1px solid rgba(0, 255, 204, 0.1)',
              transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
              '&:hover': {
                backgroundColor: 'rgba(42, 42, 94, 0.9)',
                transform: 'translateY(-4px) scale(1.01)',
                boxShadow: '0 15px 30px rgba(0, 255, 204, 0.25)',
                zIndex: 10,
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(255, 0, 255, 0.2) !important',
                boxShadow: 'inset 0 0 20px rgba(255, 0, 255, 0.4)',
              },
            },

            // Öýjükler
            '& .MuiDataGrid-cell': {
              color: '#e0e0ff',
              borderColor: 'rgba(0, 255, 204, 0.15)',
              fontSize: '1rem',
              '&.MuiDataGrid-cell--editing': {
                backgroundColor: '#1f1f45',
                boxShadow: 'inset 0 0 15px #00ffcc',
              },
            },

            // Toolbar we Footer
            '& .MuiDataGrid-toolbarContainer': {
              backgroundColor: '#1a1a3a',
              borderBottom: '2px solid #ff00ff',
              padding: '12px',
            },

            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#1a1a3a',
              borderTop: '2px solid #00ffcc',
              color: '#ffffff',
            },

            // Neon Scrollbar
            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
            },
            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
              background: 'linear-gradient(#00ffcc, #ff00ff)',
              borderRadius: '10px',
              boxShadow: '0 0 10px #00ffcc',
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
}