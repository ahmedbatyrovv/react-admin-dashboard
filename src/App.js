import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import Tooltip from "./components/ui/Tooltip";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";

import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Editor,
  ColorPicker,
  ColorMapping,
  Financial,
  Line,
  Area,
  Bar,
  Pie,
} from "./pages";

import "./App.css";

const App = () => {
  const activeMenu = true;

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* SETTINGS BUTTON */}
        <div className="fixed right-4 bottom-4 z-50">
          <Tooltip content="Settings">
            <button
              type="button"
              className="text-3xl p-3 text-white rounded-full shadow-lg hover:shadow-xl transition"
              style={{ background: "#2563EB" }}
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>

        {/* SIDEBAR */}
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white h-screen">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0">
            <Sidebar />
          </div>
        )}

        {/* MAIN CONTENT */}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          {/* NAVBAR */}
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full p-4 shadow-sm">
            <Navbar />
          </div>

          {/* PAGES */}
          <div className="p-6 mt-12">
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
