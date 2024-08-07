// import React, { useState } from 'react';
// import FileUpload from './FileUpload';

// const YourFormComponent = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [predictedClass, setPredictedClass] = useState(null);
//     const [error, setError] = useState(null);
//     const [imageUrl, setImageUrl] = useState(null);

//     const handleFileChange = (event) => {
//         setSelectedFile(event.target.files[0]);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!selectedFile) {
//             setError('Input Gambar Dahulu!');
//             return;
//         }
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <FileUpload handleFileChange={handleFileChange} />
//                 <div>
//                     <button className='background' type="submit">Predict</button>
//                 </div>
//                 {error && <p>{error}</p>}
//                 {predictedClass && (
//                     <div>
//                         <h3>Prediction Result:</h3>
//                         <p>Nama dan Jenis Buah: {predictedClass}</p>
//                         {imageUrl && <img src={imageUrl} alt="Selected" style={{ width: '200px', height: '200px' }} />}
//                     </div>
//                 )}
//             </form>
//         </>
//     );
// };

// export default YourFormComponent;
