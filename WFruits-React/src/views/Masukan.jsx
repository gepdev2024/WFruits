import React, { useState } from 'react';
import axios from 'axios';
import Navbar_Me from '../components/navbar_me';
import Footer from '../components/footer';
import { ToastContainer, toast } from 'react-toastify';
import { Rating } from 'react-simple-star-rating';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

export default function Masukan() {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        rating: '',
        masukan: ''
    });

    const [ratingKey, setRatingKey] = useState(1);

    const handleRating = (rate) => {
        let ratingString = '';
        switch (rate) {
            case 1:
                ratingString = 'Buruk';
                break;
            case 2:
                ratingString = 'Kurang Bagus';
                break;
            case 3:
                ratingString = 'Bagus';
                break;
            case 4:
                ratingString = 'Sangat Bagus';
                break;
            case 5:
                ratingString = 'Sempurna';
                break;
            default:
                ratingString = '';
        }
        setFormData({
            ...formData,
            rating: ratingString
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const timestamp = new Date().toLocaleDateString('id-ID', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            });

            const formDataWithTimestamp = {
                ...formData,
                timestamp: timestamp
            };

            const response = await axios.post('http://localhost:4000/send-message', formDataWithTimestamp);
            const result = await response.data;
            if (response.status === 200) {
                setFormData({
                    nama: '',
                    email: '',
                    rating: '',
                    masukan: ''
                });
                setRatingKey(prevKey => prevKey + 1);
                toast.success('Berhasil dikirim, terimakasih!', {});
            } else {
                toast.error(result.error || 'Something went wrong!');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to submit the form. Please try again.');
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const slideUp = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div>
            <Navbar_Me />
            <div className="bg-gray-100 pt-12 pb-6" style={{ backgroundImage: 'url(bg-masukan.png)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight:'100vh' }}>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 1 }}
                    className="mt-10 text-3xl text-white font-kanit text-center bg-green-700 py-1"
                >
                    Bantu Kami Jadi Lebih Baik 😁
                </motion.h1>
                <motion.form
                    initial="hidden"
                    animate="visible"
                    variants={slideUp}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-sm mx-3 sm:mx-auto h-fit"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-5 mt-5">
                        <label htmlFor="nama" className="block mb-2 font-kanit text-2xl font-light text-white dark:text-white">Nama</label>
                        <input
                            type="text"
                            id="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 font-kanit text-2xl font-light text-white dark:text-white">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 font-kanit text-2xl font-light text-white dark:text-white">Rating</label>
                        <div>
                            <Rating
                                key={ratingKey}
                                onClick={handleRating}
                                ratingValue={formData.rating}
                                size={35}
                                transition
                                fillColor="gold"
                                emptyColor="gray"
                                className="my-rating"
                                totalStars={5}
                                showTooltip
                                tooltipArray={[
                                    'Buruk',
                                    'Kurang Bagus',
                                    'Bagus',
                                    'Sangat Bagus',
                                    'Sempurna'
                                ]}
                                fillColorArray={[
                                    '#f14f45',
                                    '#f16c45',
                                    '#f18845',
                                    '#f1b345',
                                    '#f1d045'
                                ]}
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="masukan" className="block mb-2 font-kanit text-2xl font-light text-white dark:text-white">Masukan</label>
                        <textarea
                            id="masukan"
                            value={formData.masukan}
                            onChange={handleChange}
                            rows={5}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-center"
                    >
                        Kirim
                    </button>
                </motion.form>
            </div>
            <Footer />
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
}
