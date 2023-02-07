import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Join from '../components/Join';
import Footer from '../components/Footer';
import Card from '../components/Card';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Join />
      <Card />
      <Footer />
    </div>
  )
}

export default Home
