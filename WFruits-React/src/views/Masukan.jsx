import react from 'react';
import Navbar_Me from '../components/navbar_me';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';


export default function Masukan() {
    return (
        <>
            <Navbar_Me />
            <div className="bg-gray-100 py-12" style={{ backgroundImage: 'url(bg-masukan.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='mt-10 text-3xl text-white  font-kanit text-center'>Bantu Kami Jadi Lebih Baik 😁</h1>
                <form className="max-w-sm mx-auto">
                    <div className="mb-5 mt-5">
                        <label for="nama" className="block mb-2 font-kanit text-2xl font-light text-white dark:text-white">Nama</label>
                        <input type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label for="email" className="block mb-2 font-kanit text-2xl font-light text-white dark:text-white">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label for="rating" className="block mb-2 font-kanit text-2xl font-light text-white dark:text-white">Rating</label>
                        <input type="text" id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label for="komentar" className="block mb-2 font-kanit text-2xl font-light text-white dark:text-white">komentar</label>
                        <textarea type="text" rows={4} id="komentar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <Link
                        to="/input_gambar"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  text-sm px-10 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-center"
                    >
                        Kirim
                    </Link>
                </form>

            </div>
            <Footer/>
        </>
    )
}