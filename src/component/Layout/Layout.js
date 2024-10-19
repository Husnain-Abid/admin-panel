import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import WhatsAppButton from '../subComponent/WhatsAppButton/WhatsAppButton';

export default function Layout({ children }) {
  return (
    <>
      <div className='main'>

        <Header />
        <div className='main-content'> {children} </div>

        <WhatsAppButton></WhatsAppButton>
        <Footer />

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  )
}
