import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

import Tooltip from "./ui/Tooltip";
import { links } from "../data/dummy";

const Sidebar = () => {
  const activeMenu = true;

  const activeLink =
    "flex items-center gap-4 pl-4 py-2.5 rounded-lg text-white text-sm m-2 bg-blue-500";

  const normalLink =
    "flex items-center gap-4 pl-4 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 m-2 transition";

  return (
    <div className="ml-3 h-screen overflow-auto pb-10">
      {activeMenu && (
        <>
          {/* LOGO */}
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center gap-3 ml-3 mt-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <SiShopware className="text-blue-500" />
              <span>Shoppy</span>
            </Link>

            <Tooltip content="Close Menu">
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 mt-4 block md:hidden transition"
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>

          {/* LINKS */}
          <div className="mt-8">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 text-xs font-semibold m-3 mt-6 uppercase tracking-wider">
                  {item.title}
                </p>

                {item.links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={`/${link.name}`}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
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
