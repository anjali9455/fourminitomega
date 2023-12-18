import React from 'react'
import Header from './components/HeaderComponent/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/FooterComponent/Footer'


function Layout() {
    return (
      <>
      <Header/>
      <Outlet />
      <Footer />
      </>
    )
  }
  
  export default Layout