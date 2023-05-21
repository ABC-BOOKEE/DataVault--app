// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Dashnav from '../components/Dashnav';
import Sidebar from '../components/Sidebar';
import StoredFiles from '../components/StoredFiles';
import Upload from '../components/Upload';
import Home from './Home';

const Dashboard = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Dashnav />
        <Routes>
            <Route path='/' element={<StoredFiles/>} />
            <Route path='/dashboard/upload' element={<Upload/>} />
            <Route path='/dashboard/home' element={<Home/>} />
        </Routes>
        
      </div>
    </div>
  )
}

export default Dashboard