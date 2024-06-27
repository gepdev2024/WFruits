import react from 'react';
import Navbar_Me from '../components/navbar_me';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';


export default function Beranda() {
    return (
        <>
            <Navbar_Me />
            <div className="bg-gray-100 py-12" style={{ height: "100vh", backgroundImage: 'url(/beranda_images/section1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 lg:px-8 h-full flex items-center justify-center">
                    <div className="lg:flex lg:items-center lg:justify-between w-full h-full">
                        {/* Left Column (Image) */}
                        <div className="lg:w-1/2 mb-10 lg:mb-0 flex items-center justify-center h-full">
                            <img src="/images/logo2.png" alt="Left Column Image" className="rounded-lg" />
                        </div>

                        {/* Right Column (Text) */}
                        <div className="lg:w-1/2 flex items-center justify-center h-full">
                            <div className="text-center lg:text-left">
                                <h2 className="text-start text-3xl font-extrabold text-green-500 sm:text-4xl font-jua">Apa itu WFruit?</h2>
                                <p className="text-start mt-4 text-lg text-gray-900 font-kanit">
                                    Wfruit adalah website yang menggunakan deep learning untuk mengklasifikasikan nama dan jenis buah dari gambar. Unggah gambar buah, dan dapatkan informasi lengkap secara instan!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 2 */}
            <div className="bg-gray-100 py-12" style={{ height: "95vh" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
                    <div className="lg:flex lg:items-center lg:justify-between w-full h-full">
                        <div className="lg:w-1/2 flex items-center justify-center h-full">
                            <div className=" lg:text-left">
                                <h2 className="text-start text-3xl font-extrabold text-green-500 sm:text-4xl font-jua">Cara Kerja WFruits</h2>
                                <ul className="text-start mt-4 text-lg text-gray-900 font-kanit mb-3">
                                    <li className='font-kanit'>1. Unggah gambar buah 1 saja</li>
                                    <li className='font-kanit'>2. Aplikasi akan menganalisis gambar</li>
                                    <li className='font-kanit'>3. Dapatkan hasil nama dan jenis buah beserta <br />informasi lengkap tentang buah tersebut.</li>
                                </ul>
                                <Link
                                    to="/input_gambar"
                                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  text-sm px-10 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-center"
                                >
                                    Coba Sekarang
                                </Link>
                            </div>

                        </div>
                        <div className="lg:w-1/2 mb-10 lg:mb-0 flex items-center justify-center h-full">
                            <img src="/beranda_images/section2.png" alt="Left Column Image" className="rounded-lg" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-gray-100" style={{ height: "80vh", backgroundImage: 'url(/beranda_images/bg-section3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
                    <div className="lg:flex lg:items-center lg:justify-between w-full h-full">
                        {/* Left Column (Image) */}
                        <div className="lg:w-1/2 mb-10 lg:mb-0 flex items-center justify-center h-full">
                            <img src="/beranda_images/section3.png" alt="Left Column Image" className="rounded-lg" />
                        </div>

                        {/* Right Column (Text) */}
                        <div className="lg:w-1/2 flex items-center justify-center h-full mt-10">
                            <div className="text-center lg:text-left">
                                <h2 className="text-start text-3xl font-extrabold text-green-500 sm:text-4xl font-jua">Manfaat Menggunakan Wfruit:</h2>
                                <ul className="text-start mt-4 text-lg text-gray-900 font-kanit mb-3">
                                    <li className='font-kanit'>- Unggah gambar buah 1 saja</li>
                                    <li className='font-kanit'>- Aplikasi akan menganalisis gambar</li>
                                    <li className='font-kanit'>- Dapatkan hasil nama dan jenis buah beserta <br />informasi lengkap tentang buah tersebut.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}