import React from "react";
import { FaBlog } from "react-icons/fa";
import { Link, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex h-screen ">
      <div className="w-1/6">
        <div className="flex flex-col gap-4 bg-gray-500 items-center rounded-sm  py-4 text-white  h-full">
          <Link
            to="createblog"
            style={{
              textDecoration: "none",
            }}
            className="no-underline flex gap-2 items-center rounded-lg justify-center text-lg font-semibold w-full hover:bg-black hover:text-white"
          >
            <FaBlog />
            Blogs
          </Link>
            <Link
            to="category"
            style={{
              textDecoration: "none",
            }}
            className="no-underline flex gap-2 items-center rounded-lg justify-center text-lg font-semibold w-full hover:bg-black hover:text-white"
          >
            <FaBlog />
            Category
          </Link>  <Link
            to="createblog"
            style={{
              textDecoration: "none",
            }}
            className="no-underline flex gap-2 items-center rounded-lg justify-center text-lg font-semibold w-full hover:bg-black hover:text-white"
          >
            <FaBlog />
            Blogs
          </Link>
        </div>
      </div>
      <div className="w-5/6 px-8 py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
