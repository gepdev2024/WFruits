import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar_Me from "../components/navbar_me";
import Footer from "../components/footer";
import BackToTop from "../components/BackToTop";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const DaftarLabel = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const importImages = async () => {
      const context = await import.meta.glob("/public/daftarBuah/*.jpg");
      const imageList = Object.keys(context).map((key) => {
        const name = key.replace("/public/daftarBuah/", "").replace(".jpg", "");
        return { src: `/daftarBuah/${name}.jpg`, name };
      });
      setImages(imageList);
    };

    importImages();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCardClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
<>

    <div
      className="bg-orange-300 flex flex-col min-h-screen px-3 lg:px-0"
      style={{
        backgroundImage: 'url("/images/gambar-informasi.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      <Navbar_Me />
      <div className="flex-1 container mx-auto mb-10">
        <div className="flex justify-between items-center w-full pt-24 pb-8">
          <h1 className="bg-white py-3 px-7 rounded-md text-green-700 font-jua font-bold text-center lg:text-2xl">
            Daftar Label Pada Dataset
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Cari..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="sm:w-72 px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
              className="absolute left-3 top-4 h-5 w-5 text-gray-400 pointer-events-none"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="4"
              >
                <path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z" />
                <path
                  strokeLinecap="round"
                  d="M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              style={{ userSelect: "none" }}
              onClick={() => handleCardClick(image)}
              className="hover:shadow-2xl transition-transform duration-400 transform hover:scale-110 p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
            >
              <img className="rounded-t-lg mx-auto" src={image.src} alt="" />
              <div className="">
                <h5 className="text-center font-bold tracking-tight text-green-800 dark:text-white">
                  {image.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
                style={{ userSelect: "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative bg-white p-5 rounded-lg shadow-lg w-1/4 max-w-sm "
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              exit={{ opacity: 0 }}
              transition={{ type: "twin", stiffness: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="text-green-900 absolute top-0 right-0 mr-3 text-5xl"
              >
                &times;
              </button>
              {selectedImage && (
                <>
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.name}
                    className="mt-2 w-full h-auto"
                  />
                  <h2 className="text-center font-bold text-xl text-green-800">
                    {selectedImage.name}
                  </h2>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <BackToTop />
    </div>
      <Footer />
</>
  );
};

export default DaftarLabel;
