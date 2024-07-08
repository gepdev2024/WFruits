import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const ToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <div>
      <nav style={{ userSelect:"none" }} className="bg-white border-gray-200 dark:bg-white dark:border-gray-700 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-12 py-3">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/logo2.png" className="h-10" alt="Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg md:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200 dark:text-green-400 dark:hover:bg-green-700 dark:focus:ring-green-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isToggleOpen}
            onClick={ToggleOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isToggleOpen ? "block" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-green-800 md:dark:bg-green-900 dark:border-green-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 ${
                    location.pathname === "/"
                      ? "  rounded md:bg-transparent text-green-700 dark:text-green-500  dark:bg-transparent"
                      : "hover:text-green-900 text-green-700 dark:text-white"
                  } md:p-0`}
                  aria-current="page"
                >
                  Beranda
                </Link>
                {location.pathname === "/" && (
                  <hr className="border-t-2 border-green-700 w-full" />
                )}
              </li>
              <li>
                <Link
                  to="/informasi"
                  className={`block py-2 px-3 ${
                    location.pathname === "/informasi"
                      ? "  rounded md:bg-transparent text-green-700 dark:text-green-500  dark:bg-transparent"
                      : "hover:text-green-900 text-green-700 dark:text-white"
                  } md:p-0`}
                  aria-current="page"
                >
                  Informasi
                </Link>
                {location.pathname === "/informasi" && (
                  <hr className="border-t-2 border-green-700 w-full" />
                )}
              </li>
              <li className="relative">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-green-500 dark:focus:text-white dark:border-green-700 dark:hover:bg-green-700 md:dark:hover:bg-transparent"
                  onClick={toggleDropdown}
                >
                  Klasifikasi
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {(location.pathname === "/daftar-label" ||
                  location.pathname === "/input_gambar") && (
                  <hr className="border-t-2 border-green-700  text-center mx-auto" />
                )}
                <div
                  id="dropdownNavbar"
                  className={`z-10 ${
                    isDropdownOpen ? "block" : "hidden"
                  } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to="/daftar-label"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Daftar Label
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/input_gambar"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Input Gambar
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/masukan"
                  className={`block py-2 px-3 ${
                    location.pathname === "/masukan"
                      ? " rounded md:bg-transparent text-green-700 dark:text-green-500 dark:bg-green-600 dark:bg-transparent"
                      : "hover:text-green-900 text-green-700 dark:text-white"
                  } md:p-0`}
                  aria-current="page"
                >
                  Masukan
                </Link>
                {location.pathname === "/masukan" && (
                  <hr className="border-t-2 border-green-700 w-full" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
