import React, { useState } from 'react';
import Navbar_Me from '../components/navbar_me';
import Footer from '../components/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from 'react-simple-star-rating';
import '../App.css';

export default function Masukan() {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        rating: '', // Rating state as a string
        masukan: ''
    });

    const [ratingKey, setRatingKey] = useState(1); // Add key state

    const handleRating = (rate) => {
        let ratingString = ''; // Initialize rating string
        switch (rate) { // Convert numeric rating to string representation
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
            rating: ratingString // Update rating state with the string representation
        });

        // Increment key to force Rating component to re-render
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
            const response = await fetch('http://localhost:4000/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setFormData({
                    nama: '',
                    email: '',
                    rating: '', // Reset rating to empty string after successful submission
                    masukan: ''
                });

                // Reset key to force Rating component to re-render
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

    return (
        <div>
            <Navbar_Me />
            <div className="bg-gray-100 pt-12 pb-6 h-max" style={{ backgroundImage: 'url(bg-masukan.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='mt-10 text-3xl text-white font-kanit text-center'>Bantu Kami Jadi Lebih Baik 😁</h1>
                <form className="max-w-sm mx-auto h-fit" onSubmit={handleSubmit}>
                    <div className="mb-5 mt-5">
                        <label htmlFor="nama" className="block mb-2 font-kanit text-2xl font-light text-white dark:text-white">Nama</label>
                        <input type="text" id="nama" value={formData.nama} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 font-kanit text-2xl font-light text-white dark:text-white">Email</label>
                        <input type="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 font-kanit text-2xl font-light text-white dark:text-white">Rating</label>
                        <div>
                            <Rating
                                key={ratingKey} // Use key to force re-render
                                onClick={handleRating}
                                ratingValue={formData.rating} // Pass rating state here
                                size={35} // Adjust size as needed
                                transition
                                fillColor='gold' // Change fill color of stars
                                emptyColor='gray' // Change empty color of stars
                                className="my-rating" // Add any additional classes here
                                totalStars={5} // Total number of stars to display
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
                        <textarea id="masukan" value={formData.masukan} onChange={handleChange} rows={5} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-center">Kirim</button>
                </form>
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
                transition:Bounce />
        </div>
    );
}
