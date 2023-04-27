import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      <main className='main'>{children}</main> 
      <Footer/>
    </>
  )
}

export default Layout;