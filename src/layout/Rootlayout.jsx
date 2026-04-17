import React from 'react';
import Navbar from '../component/common/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/common/Footer';

const Rootlayout = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <Navbar />
            <main className="flex-1 w-full">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Rootlayout;