import React, { useState } from 'react';

const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log('File uploaded:', selectedFile);
    // You can send the file to the server or perform any other action
  };

  return (
    <div>
        <h2 className='text-center text-4xl font-serif font-black'>Upload Your Resume</h2>
      <div className='mt-10'>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-4 w-96 text-2xl bg-green-300"
        />
        <span className='mx-6'></span>
        <button
          onClick={handleUpload}
          disabled={!selectedFile}
          className={`py-2 px-4 bg-blue-500 text-white rounded ${
            selectedFile ? 'cursor-pointer hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          Upload
        </button>
      </div>
    </div>


  );
};

export default ResumeUpload;
