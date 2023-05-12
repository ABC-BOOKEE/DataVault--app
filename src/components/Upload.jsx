import React from 'react'
import { useState } from 'react'
import CustomButton from './CustomButton';
import { FileUploader } from "react-drag-drop-files";
import DragAndDrop from './DragAndDrop';
import Sidebar from './Sidebar';
import Dashnav from './Dashnav';

const Upload = () => {

  const fileTypes = ["JPG", "PNG", "GIF"];

  const [isLoading, setIsLoading] = useState(false);

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (

    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Dashnav />
        <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[12px]  sm:min-w-[380px]  bg-[#3a3a43] rounded-[10px]">
        <button className="font-epilogue font-bold sm:text-[20px] text-[14px] leading-[38px] text-white">Select from File explorer 📂 </button>
      </div>

      
      {/* message prop requires a string
    <div className='flex justify-center items-center p-[12px] mt-4  sm:min-w-[380px]  bg-[#3a3a43] rounded-[10px]'>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      </div>    
    */}


      <DragAndDrop  />



      <div className="flex justify-center items-center mt-[40px]">
        <CustomButton
          btnType="submit"
          title="Submit to store in Web3"
          styles="orange_bg_gradient"
        />
      </div>
    </div>
        
      </div>
    </div>



    
  )
}

export default Upload