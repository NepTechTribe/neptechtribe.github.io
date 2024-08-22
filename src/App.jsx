import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Programs from './assets/Components/Programs/Programs'
import Title from './assets/Components/Title/Title'
import About from './assets/Components/About/About'
import Upcoming from './assets/Components/Upcoming/Upcoming'
import Glimpses from './assets/Components/Glimpses/Glimpses'
import Testimonial from './assets/Components/Testimonials/Testimonial'
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
        <Title title='ANNOUNCEMENTS' subtitle='Our Upcoming Event'></Title>
        <Upcoming></Upcoming>
        <Title title='Glimpses' subtitle='sneekpeek from past events'></Title>
        <Glimpses>        </Glimpses>
        <Title title='TESTIMONIALS' subtitle='What student says'></Title>
        <Testimonial></Testimonial>
      </div>
    </div>
  )
}

export default App
