import React from 'react'
import { useSelector } from 'react-redux'
import { FaBlog } from "react-icons/fa";
import { Link, Navigate, Outlet } from "react-router";
import { Navbar } from '../components/Navbar';

const AdminLayout = () => {
        const {isLoggedIn} = useSelector((state)=>state.auth)
      
        console.log(isLoggedIn)

  return (
    <>
    {isLoggedIn ? 
   (
     <div>
        <Navbar/>
        <div className="flex h-[80vh] ">
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
      <div className="w-5/6 px-8 py-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
    </div>
   )
    : <Navigate to= "/login" />}
    </>
  )
}

export default AdminLayout