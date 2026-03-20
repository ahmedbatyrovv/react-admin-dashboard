import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import Tooltip from "./ui/Tooltip";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) =>
  <Tooltip content={title}>
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      {dotColor &&
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />}
      {icon}
    </button>
  </Tooltip>;

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(
    () => {
      if (screenSize <= 900) setActiveMenu(false);
      else setActiveMenu(true);
    },
    [screenSize]
  );

  return (
    <div className="flex justify-between items-center p-3 md:px-6 relative bg-white dark:bg-main-dark-bg shadow-sm">
      {/* LEFT */}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu(prev => !prev)}
        color="#2563EB"
        icon={<AiOutlineMenu />}
      />

      {/* RIGHT */}
      <div className="flex items-center gap-2">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="#2563EB"
          icon={<FiShoppingCart />}
        />

        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color="#2563EB"
          icon={<BsChatLeft />}
        />

        <NavButton
          title="Notifications"
          dotColor="#FF5C8E"
          customFunc={() => handleClick("notification")}
          color="#2563EB"
          icon={<RiNotification3Line />}
        />

        {/* PROFILE */}
        <Tooltip content="Profile">
          <div
            className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition"
            onClick={() => handleClick("userProfile")}
          >
            <img
              className="rounded-full w-8 h-8 object-cover"
              src={avatar}
              alt="user"
            />
            <p className="hidden sm:flex items-center">
              <span className="text-gray-400 text-sm">Hi,</span>
              <span className="text-gray-700 dark:text-gray-200 font-semibold ml-1 text-sm">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-lg" />
          </div>
        </Tooltip>

        {/* DROPDOWNS */}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
