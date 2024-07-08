import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar_Me from "../components/navbar_me";
import Footer from "../components/footer";
import FileUpload from "../components/FileUpload"; // Adjust the path as per your file structure
import funfact from "../assets/funfact.json";

const Klasifikasi = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictedClass, setPredictedClass] = useState(null);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("Pilih gambar dahulu!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to receive prediction from server");
      }

      const data = await response.json();
      console.log(data);
      setPredictedClass(data.predicted_class);
      setError(null); // Reset error state
      setImageUrl(URL.createObjectURL(selectedFile)); // Set the image URL for display
      setIsModalOpen(true); // Open the modal
    } catch (error) {
      console.error("Error:", error.message);
      setError("Failed to make prediction. Please try again.");
      setPredictedClass(null); // Reset predicted class on error
      setImageUrl(null); // Reset image URL on error
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar_Me />
      <div>
        <div
          className="bg-gray-100 py-12 mt-12 sm:mt-16"
          style={{
            width: "100%",
            minHeight: "85vh", // Set a minimum height for the section
            backgroundImage: "url(/images/bg-klasifikasi.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", // Ensure the background doesn't repeat
          }}
        >
          <h1
            className="font-kanit text-2xl lg:mt-9 text-center text-white"
            style={{
              textShadow:
                "1px 1px 2px black, 0 0 25px green, 0 0 5px darkgreen",
            }}
          >
            Persiapkan Gambar Untuk Melakukan Klasifikasi
          </h1>

          {/* FileUpload Component */}
          <FileUpload
            handleFileChange={handleFileChange}
            handleSubmit={handleSubmit}
            error={error}
            predictedClass={predictedClass}
            imageUrl={imageUrl}
            loading={loading}
          />
        </div>
        <Footer />
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative bg-white p-8 rounded-lg shadow-lg w-4/5 max-w-2xl"
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", stiffness: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="text-green-900 absolute top-0 right-0 mr-3 text-5xl"
              >
                &times;
              </button>
              {predictedClass && funfact[predictedClass] && (
                <>
                  <h2 className="text-center font-bold text-xl text-green-800">
                    Fun Facts Pada Buah <i>{predictedClass}</i>
                  </h2>
                  <ul className="list-disc ml-5 mt-2">
                    {funfact[predictedClass].facts.map((fact, index) => (
                      <li key={index} className="text-green-800">
                        {fact}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Klasifikasi;
