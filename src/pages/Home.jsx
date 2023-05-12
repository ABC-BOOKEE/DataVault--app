import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='main-bg'>
      <div className='app'>
        <Navbar />
        <Hero />
      </div>
      <Footer />

    </div>
  )
}

export default Home