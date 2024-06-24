import react from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className=''>
            <nav class="bg-white border-gray-200 dark:bg-white dark:border-gray-700 fixed top-0 left-0 right-0 z-50">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-12 py-3">
                    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/logo2.png" class="h-10" alt="Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" class="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500 dark:bg-green-600 md:dark:bg-transparent" aria-current="page">Beranda</a>
                                {/* <hr className=" border-t-2 border-green-700 w-full" /> */}
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-green-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-green-500 dark:focus:text-white dark:border-green-700 dark:hover:bg-green-700 md:dark:hover:bg-transparent">Klasifikasi <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="informasi" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Informasi</a>
                                        </li>
                                        <li>
                                            <a href="/input_gambar" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Input Gambar</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/masukan" className={`block py-2 px-3 ${location.pathname === '/masukan' ? 'text-green-900 hover:bg-green-100' : 'text-green-900 hover:bg-green-100'} rounded md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                                    Masukan
                                    {/* <hr className="border-t-2 border-green-700 w-full" /> */}
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}