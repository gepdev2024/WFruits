import React, { useEffect, useState } from 'react';
import Navbar_Me from '../components/navbar_me';

const Informasi = () => {
    return (
        <>
            <Navbar_Me />
            <div className="bg-gray-100 py-12" style={{ height: '100vh', backgroundImage: 'url(/beranda_images/bg-section3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h3 className='text-center mt-7 text-white font-jua font-medium text-3xl'>Daftar Label</h3>


            </div>
        </>
    )
};
export default Informasi;
