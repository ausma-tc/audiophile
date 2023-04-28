import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.scss';

const Layout = ({children}) => {
  const root = document.getElementById('root');
  if (window.location.pathname === '/') {
    root.classList.add('home')
  } else {
    root.classList.remove('home')
  }
  return (
    <>
      <Navbar/>
      <main className='main'>{children}</main> 
      <Footer/>
    </>
  )
}

export default Layout;