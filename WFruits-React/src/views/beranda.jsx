import React from 'react';
import Navbar_Me from '../components/navbar_me';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import { motion, useInView } from 'framer-motion';

export default function Beranda() {
    const section1Ref = React.useRef(null);
    const section2Ref = React.useRef(null);
    const section3Ref = React.useRef(null);

    const isInViewSection1 = useInView(section1Ref, { once: true });
    const isInViewSection2 = useInView(section2Ref, { once: true });
    const isInViewSection3 = useInView(section3Ref, { once: true });

    return (
        <div>
            <Navbar_Me />
            <div ref={section1Ref} className="bg-gray-100" style={{ height: "100vh", backgroundImage: 'url(/beranda_images/section1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 mt-16 lg:px-8 h-full flex items-center justify-center">
                    <div className="lg:flex lg:items-center lg:justify-between lg:w-full lg:h-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: isInViewSection1 ? 1 : 0, x: isInViewSection1 ? 0 : -50 }}
                            transition={{ duration: 1 }}
                            className="mt-36 lg:mt-0 lg:w-1/2 mb-10 lg:mb-0 flex items-center justify-center h-full"
                        >
                            <img src="/images/logo2.png" alt="Left Column Image" className="rounded-lg" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: isInViewSection1 ? 1 : 0, x: isInViewSection1 ? 0 : 50 }}
                            transition={{ duration: 1 }}
                            className="lg:w-1/2 flex items-center justify-center h-full"
                        >
                            <div className="text-center lg:text-left">
                                <h2 className="text-start text-3xl font-extrabold text-green-500 sm:text-4xl font-jua">Apa itu WFruit?</h2>
                                <p className="text-start mt-2 text-lg text-gray-900 font-kanit">
                                    Wfruit adalah website yang menggunakan deep learning untuk mengklasifikasikan nama dan jenis buah dari gambar. Unggah gambar buah, dan dapatkan informasi lengkap secara instan!
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* section 2 */}
            <div ref={section2Ref} className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 h-full flex items-center justify-center">
                    <div className="lg:flex lg:items-center pt-3 lg:py-5 lg:justify-between lg:w-full lg:h-full">
                        <motion.div
                            animate={{ opacity: isInViewSection2 ? 1 : 0, scale: isInViewSection2 ? 1 : 0 }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className="lg:w-1/2 mt-3 lg:mt-0 flex items-center justify-center lg:h-full"
                        >
                            <div className="lg:text-left">
                                <h2 className="text-start text-3xl font-extrabold text-green-500 sm:text-4xl font-jua">Cara Kerja WFruits</h2>
                                <ul className="text-start text-lg text-gray-900 font-kanit mb-3">
                                    <li className='font-kanit'>1. Unggah gambar buah 1 saja</li>
                                    <li className='font-kanit'>2. Aplikasi akan menganalisis gambar</li>
                                    <li className='font-kanit'>3. Dapatkan hasil nama dan jenis buah beserta <br />informasi lengkap tentang buah tersebut.</li>
                                </ul>
                                <Link
                                    to="/input_gambar"
                                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-center"
                                >
                                    Coba Sekarang
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ opacity: isInViewSection2 ? 1 : 0, scale: isInViewSection2 ? 1 : 0 }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className="lg:w-1/2 mt-4 lg:mt-0 lg:mb-0 flex items-center justify-center lg:h-full"
                        >
                            <img src="/beranda_images/section2.png" alt="Left Column Image" className="rounded-lg" />
                        </motion.div>
                    </div>
                </div>
            </div>
            <div ref={section3Ref} className="bg-gray-100" style={{ backgroundImage: 'url(/beranda_images/bg-section3.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%' }}>
                <div className="mx-auto px-4 sm:px-6 lg:px-8 lg:h-full flex items-center justify-center">
                    <div className="lg:flex lg:items-center lg:justify-between py-8 lg:my-24">
                        {/* Left Column (Image) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: isInViewSection3 ? 1 : 0, x: isInViewSection3 ? 0 : -50 }}
                            transition={{ duration: 1 }}
                            className="lg:w-1/2 lg:mb-0 flex items-center justify-center"
                        >
                            <img src="/beranda_images/section3.png" alt="Left Column Image" className="w-full px-16" />
                        </motion.div>

                        {/* Right Column (Text) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: isInViewSection3 ? 1 : 0, x: isInViewSection3 ? 0 : 50 }}
                            transition={{ duration: 1 }}
                            className="lg:w-1/2 flex items-center lg:ps-10 lg:h-full mt-10"
                        >
                            <div className="text-center lg:text-left">
                                <h2 className="text-start text-3xl font-extrabold text-green-500 sm:text-4xl font-jua">Manfaat Menggunakan Wfruit:</h2>
                                <ul className="text-start text-lg text-gray-900 font-kanit mb-3">
                                    <li className='font-kanit'>- Mudah digunakan</li>
                                    <li className='font-kanit'>- Hasil atau proses yang cepat</li>
                                    <li className='font-kanit'>- Mendukung lebih dari 130 jenis buah</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Back to Top Button */}
                <BackToTop />
                <Footer />
            </div>
        </div>
    );
}
