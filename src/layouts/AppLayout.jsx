import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../Footer'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout