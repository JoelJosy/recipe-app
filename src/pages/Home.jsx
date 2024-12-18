import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Example from '../components/Example'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="home">
        <NavBar />
        <Hero />
        <Footer />
    </div>
  )
}
