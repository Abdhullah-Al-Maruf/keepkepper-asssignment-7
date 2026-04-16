import React from 'react';
import Navbar from '../component/common/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/common/Footer';

const Rootlayout = () => {
    return (
        <div     >
           <Navbar/>
           <div className='container mx-auto'>
           <Outlet/>
           </div>
           <Footer/>
         
        </div>
    );
};

export default Rootlayout;