import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

import Tooltip from "./ui/Tooltip";
import { links } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900) setActiveMenu(false)
  }
  const activeLink =
    "flex items-center gap-4 pl-4 py-2.5 rounded-xl text-white text-sm m-2 bg-gradient-to-r from-blue-500 to-blue-600 shadow-md";

  const normalLink =
    "flex items-center gap-4 pl-4 py-2.5 rounded-xl text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 m-2 transition-all duration-200";

  return (
    <div className="ml-3 h-screen overflow-auto pb-10">
      {activeMenu && (
        <>
          {/* LOGO */}
          <div className="flex justify-between items-center pr-3">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <div className="p-2 rounded-lg bg-blue-500 text-white shadow">
                <SiShopware />
              </div>
              <span>Shoppy</span>
            </Link>

            <Tooltip content="Close Menu">
              <button
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                type="button"
                className="text-xl rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 mt-4 block transition md;hidden"
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>

          {/* LINKS */}
          <div className="mt-8">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 text-[11px] font-semibold m-3 mt-6 uppercase tracking-widest">
                  {item.title}
                </p>

                {item.links.map((link) => (
                  <NavLink
                    key={link.name}
                    onClick={handleCloseSidebar}
                    to={`/${link.name}`}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
