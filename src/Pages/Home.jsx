import React from 'react'
import './Home.css' 
import Navbar from '../Home-Components/Navbar'
import Frontpage from '../Home-Components/Frontpage'
import Trainers from '../Home-Components/Trainers'
import Descriptions from '../Home-Components/Descriptions'
import Footer from '../Home-Components/Footer'

function Home() {
  return (
    <>
        <Navbar/>
        <Frontpage/>
        <Trainers/>
        <Descriptions/>
        <Footer/>
    </>
  )
}

export default Home