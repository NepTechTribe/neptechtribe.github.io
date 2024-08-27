import React, { useRef } from 'react';
import Sub_testimonial from './Sub_testimonial'; 
import userImage from '../user-demo.png'; 
import bijaydai from '../bijaydai.jpg'
import sudhirdai from '../sudhirdai.jpg'
import prabindai from '../prabindai.jpg'
import sushantdai from '../sushantdai.jpg'
const Testimonials_2 = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  return (
    <div className='testimonials'>
      <i className="fa-solid fa-arrow-right next-btn" onClick={slideForward}></i>
      <i className="fa-solid fa-arrow-left back-btn" onClick={slideBackward}></i>
      <div className='slider'>
        <ul ref={slider}>
          <Sub_testimonial
            userImage={prabindai}
            userName="Prabin Adhikari"
            userTitle="Community Leader"
            userMessage="Being part of NepTech Tribe has been a truly rewarding experience. Our community thrives on the simple yet powerful motto of 'Learn and Grow.' Every event, workshop, and discussion is centered around this philosophy, providing a space where everyone can enhance their skills, share knowledge, and support one another. The connections I've made here have been invaluable, as we've all grown together both personally and professionally. I’m proud to be part of a community that is dedicated to continuous learning and mutual growth, making a lasting impact in the society."
          />
          <Sub_testimonial
            userImage={sushantdai}
            userName="MinRaj Adhikari"
            userTitle="Program Coordinator"
            userMessage="At NepTech, we value the utmost enthusiasm of students from all over Nepal to create an enhanced environment to Learn & Grow. Getting along with similar-minded people alongside hands-on experience in community operations, collaboration on various projects, and personal life development skills is what we serve on the table. We foresee every member as the future shaper for a better IT environment in Nepal.
Moreover, we're just a young group willing to make an impact and a change in our IT education platform.
"
          />
          <Sub_testimonial
            userImage={sudhirdai}
            userName="Sudhir Aryal"
            userTitle="Secretary"
            userMessage="As a proud member of NepTech Tribe, I’ve witnessed firsthand the incredible impact this organization has on the IT community. Their commitment to fostering innovation and collaboration among tech professionals is truly inspiring. NepTech Tribe not only supports personal and professional growth but also drives meaningful change in the technology sector. I am honored to be part of this transformative journey."
          />
          <Sub_testimonial
            userImage={bijaydai}
            userName="Bijay Koirala"
            userTitle="Event Manager"
            userMessage="From the initial days, being a part of NepTech Tribe has been an exceptionally rewarding experience. I've had an opportunity to witness personally the growth and impact of this community via organizing events and collaborating with dedicated individuals. Besides providing  a platform for learning and growth, NepTech Tribe has given me a feeling of connection and focus. As an integral part of a movement that is shaping technology and empowering the next phase of tech enthusiasts is inspiring."
          />
        </ul>
      </div>
    </div>
  );
}

export default Testimonials_2;
