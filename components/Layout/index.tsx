import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

function Layout({children}:any) {
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout