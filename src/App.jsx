import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Programs from './assets/Components/Programs/Programs'
import Title from './assets/Components/Title/Title'
import About from './assets/Components/About/About'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
     <div className='container'>
     <Title title='ABOUT NEPTECH TRIBE' subtitle='What We Are'></Title>
      <About></About>
     <Title title='OUR PROGRAMS' subtitle='What We Offer'></Title>
     <Programs></Programs>
     </div>
    </div>
  )
}

export default App
