import React, { useState } from 'react';

const FileUpload = ({ handleFileChange, handleSubmit, error, predictedClass, imageUrl }) => {
    const [image, setImage] = useState(null);

    const onFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        // Call the parent handler if needed
        if (handleFileChange) {
            handleFileChange(e);
        }
    };

    return (
        <>
            <div className="flex mx-auto justify-center w-full mt-3">
                {/* Image Preview Column */}
                <div className="flex flex-wrap items-center justify-center w-1/3">
                    {image && (
                        <div>
                            <h2 className=' font-kanit text-xl text-center text-white' style={{
                                textShadow: '1px 1px 2px black, 0 0 25px green, 0 0 5px darkgreen'
                            }}>Gambar Input</h2>

                            <div className="w-40 m-2">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Upload Preview"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* File Upload Column */}
                <div className="flex flex-col items-center justify-center w-1/3 ">
                    <label htmlFor="dropzone-file" className="flex px-10 flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                            <p className="text-xs text-gray-500 dark:text-gray-400"> PNG or JPG</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={onFileChange} accept="image/*" required />
                    </label>


                </div>

                {/* Form Column */}
                <div className="w-1/3 flex flex-col justify-center items-center">
                    {predictedClass && (
                        <div className="text-center mt-2">
                            <h2 className=' font-kanit text-xl text-center text-white' style={{
                                textShadow: '1px 1px 2px black, 0 0 25px green, 0 0 5px darkgreen'
                            }}>Hasil</h2>

                            <h2 className='mt-3 font-kanit text-xl text-center text-white' style={{
                                textShadow: '1px 1px 2px black, 0 0 25px green, 0 0 5px darkgreen'
                            }}>Nama Buah: {predictedClass}</h2>

                            <a href={`https://www.google.com/search?q=${encodeURIComponent(predictedClass)}`} target="_blank" rel="noopener noreferrer">
                                Klik Untuk Memastikan
                            </a>
                        </div>
                    )}
                </div>

            </div>
            <form onSubmit={handleSubmit} className="w-full">
                <div className='flex justify-center'>
                    <button type="submit" className="mt-4 text-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-36 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Cek Hasil
                    </button>
                </div>
            </form>
            {error && <p className=" text-red-500 text-center mt-0">{error}</p>}

        </>
    );
};

export default FileUpload;
