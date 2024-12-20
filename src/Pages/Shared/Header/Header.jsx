import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-black text-white bg-opacity-35  fixed z-40 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to={"/"}
                // className={({ isActive }) => {
                //   return isActive
                //     ? "bg-red-700 text-white hover:bg-red-800"
                //     : "";
                // }}
              >
                Home
              </NavLink>
            </li>

            {/* <li>
              <a>CONTACT us</a>
            </li>
            <li>
              <a>DASHBOARD</a>
            </li> */}

            <li>
              <NavLink
                to={"/menu"}
                // className={({ isActive }) => {
                //   return isActive
                //     ? "bg-red-700 text-white hover:bg-red-800 hover:text-white"
                //     : "text-white";
                // }}
              >
                Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                // className={({ isActive }) => {
                //   return isActive
                //     ? "bg-red-700 text-white hover:bg-red-800"
                //     : "text-white";
                // }}
              >
                Our Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/login"}
                // className={({ isActive }) => {
                //   return isActive
                //     ? "bg-red-700 text-white hover:bg-red-800"
                //     : "";
                // }}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <h1 className="font-bold lg:text-[26px] leading-[43.14px] font-cinzel">
          <NavLink
            to={"/"}
            // className={({ isActive }) => {
            //   return isActive ? "bg-red-700 text-white hover:bg-red-800" : "";
            // }}
          >
            BISTRO BOSS
          </NavLink>
        </h1>

        {/* <a className="btn btn-ghost text-xl"> Restaurant</a> */}
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase font-semibold">
          <li>
            <NavLink
              to={"/"}
              // className={({ isActive }) => {
              //   return isActive ? "bg-red-700 text-white hover:bg-red-800" : "";
              // }}
            >
              Home
            </NavLink>
          </li>

          {/* <li>
            <a>CONTACT us</a>
          </li>
          <li>
            <a>DASHBOARD</a>
          </li> */}

          <li>
            <NavLink
              to={"/menu"}
              // className={({ isActive }) => {
              //   return isActive ? "bg-red-700 text-white hover:bg-red-800" : "";
              // }}
            >
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/shop"}
              // className={({ isActive }) => {
              //   return isActive ? "bg-red-700 text-white hover:bg-red-800" : "";
              // }}
            >
              Our Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/login"}
              // className={({ isActive }) => {
              //   return isActive ? "bg-red-700 text-white hover:bg-red-800" : "";
              // }}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
