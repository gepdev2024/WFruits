import React, { useState } from 'react';
import Navbar_Me from '../components/navbar_me';
import Footer from '../components/footer';
import FileUpload from '../components/FileUpload'; // Adjust the path as per your file structure

const Klasifikasi = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [predictedClass, setPredictedClass] = useState(null);
    const [error, setError] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            setError('Please select an image file.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        setLoading(true);

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to receive prediction from server');
            }

            const data = await response.json();
            console.log(data);
            setPredictedClass(data.predicted_class);
            setError(null); // Reset error state
            setImageUrl(URL.createObjectURL(selectedFile)); // Set the image URL for display

        } catch (error) {
            console.error('Error:', error.message);
            setError('Failed to make prediction. Please try again.');
            setPredictedClass(null); // Reset predicted class on error
            setImageUrl(null); // Reset image URL on error
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <>
            <Navbar_Me />
            <div>
                <div className="bg-gray-100 py-12 mt-16" style={{
                    width: "100%",
                    minHeight: "563px",  // Set a minimum height for the section
                    backgroundImage: 'url(/images/bg-klasifikasi.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'  // Ensure the background doesn't repeat
                }}>


                    <h1 className='font-kanit text-2xl mt-12 text-center text-white' style={{
                        textShadow: '1px 1px 2px black, 0 0 25px green, 0 0 5px darkgreen'
                    }}>Persiapkan Gambar Untuk Melakukan Klasifikasi</h1>


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
        </>

    );
};

export default Klasifikasi;
