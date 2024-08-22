import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Programs from './assets/Components/Programs/Programs'
import Title from './assets/Components/Title/Title'
import About from './assets/Components/About/About'
import Upcoming from './assets/Components/Upcoming/Upcoming'
import Glimpses from './assets/Components/Glimpses/Glimpses'
import Testimonial from './assets/Components/Testimonials/Testimonial'
import Testimonials_2 from './assets/Components/Testimonials/Testimonials_2'
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
        <Title title='COMMUNITIES AND ORGANIZATIONS' subtitle='Partnership and Collaboration With'></Title>
        <Glimpses></Glimpses>
        <Title title='TESTIMONIALS' subtitle='From Board and Advisors'></Title>
<Testimonials_2></Testimonials_2>
      </div>
    </div>
  )
}

export default App
