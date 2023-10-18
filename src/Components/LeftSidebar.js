import React from "react";
import {
  LuLayoutDashboard,
  LuBadgePercent,
} from "react-icons/lu";
import { RiDashboard2Line, RiCustomerService2Fill } from "react-icons/ri";
import { CgProductHunt } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import { MdHelpCenter } from "react-icons/md";
import Random from "../Assets/images.jpeg";
import arrow from '../Assets/arrow.png'

function LeftSidebar() {
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen flex justify-between flex-col bg-blue-900">
      <aside
        id="default-sidebar"
        aria-label="Sidebar"
      >
        <div className="flex items-center p-4 text-white">
          <RiDashboard2Line className="w-6 h-6 mr-2 text-gray-500" />
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto dark:bg-blue-900">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-100 group hover:text-black"
              >
                <span className="mx-2">
                  <LuLayoutDashboard />
                </span>
                Dashboard
              </a>
            </li>
            <li className="flex items-center justify-between space-x-2 p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-100 group hover:text-black">
              <a
                href="#"
                className="flex items-center "
              >
                <span className="mx-2">
                  <CgProductHunt />
                </span>
                Product
              </a>
              <div className="text-gray-400">{">"}</div>
            </li>
            <li className="flex items-center justify-between space-x-2 p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-100 group hover:text-black">
              <a
                href="#"
                className="flex items-center "
              >
                <span className="mx-2">
                  <RiCustomerService2Fill />
                </span>
                Customers
              </a>
              <div className="text-gray-400">{">"}</div>
            </li>
            <li className="flex items-center justify-between space-x-2 p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-100 group hover-text-black">
              <a
                href="#"
                className="flex items-center "
              >
                <span className="mx-2">
                  <IoWalletOutline />
                </span>
                Income
              </a>
              <div className="text-gray-400">{">"}</div>
            </li>
            <li className="flex items-center justify-between space-x-2 p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-100 group hover-text-black">
              <a
                href="#"
                className="flex items-center "
              >
                <span className="mx-2">
                  <LuBadgePercent />
                </span>
                Promote
              </a>
              <div className="text-gray-400">{">"}</div>
            </li>
            <li className="flex items-center justify-between space-x-2 p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-100 group hover:text-black">
              <a
                href="#"
                className="flex items-center "
              >
                <span className="mx-2">
                  <MdHelpCenter />
                </span>
                Help
              </a>
              <div className="text-gray-400">{">"}</div>
            </li>
          </ul>
        </div>
      </aside>
      <div className="flex items-center mb-8 justify-between p-2 mx-2 bg-white text-gray-700 rounded-lg dark:text-white hover-bg-gray-100 hover-text-black">
        <a href="#" className="flex items-center ">
          <span className="mx-2">
            <img
              className="w-10 h-10 rounded-full"
              src={Random}
              alt="Rounded avatar"
            />
          </span>
          <div className="text-black">
            <h2>Help</h2>
            <p className="text-sm">Vikas Singh</p>
          </div>
        </a>
        <div className="text-gray-800"><span><img className="w-3 h-3 ml-2.5" src={arrow} alt=""/></span></div>
        
      </div>
    </div>
  );
}

export default LeftSidebar;
