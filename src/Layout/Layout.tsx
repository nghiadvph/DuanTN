import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className="block">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default Layout