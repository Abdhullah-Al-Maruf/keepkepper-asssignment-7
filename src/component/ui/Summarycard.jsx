import React from 'react';

const Summarycard = () => {
    return (
        <div className=' mt-10 mb-10 grid   w-[90%]  md:grid-cols-2 lg:grid-cols-4  gap-5  container mx-auto'>
            <div className='shadow border border-gray-200  p-4 rounded-md'>
                <h1 className='text-green-900 font-bold text-2xl'>10</h1>
                <p className='text-gray-500'>Total Friends</p>
            </div>
            <div className='shadow border border-gray-200  p-4 rounded-md'>
                <h1 className='text-green-900 font-bold text-2xl'>3</h1>
                <p className='text-gray-500'> On Track</p></div>
            <div className='shadow border border-gray-200  p-4 rounded-md'>
                <h1 className='text-green-900 font-bold text-2xl'> 6</h1>
                <p className='text-gray-500'>Need Attention</p></div>

            <div className='shadow border border-gray-200  p-4 rounded-md'>
                <h1 className='text-green-900 font-bold text-2xl'>12</h1>
                <p className='text-gray-500'>Interactions This Month</p></div>
        </div>
    );
};

export default Summarycard;