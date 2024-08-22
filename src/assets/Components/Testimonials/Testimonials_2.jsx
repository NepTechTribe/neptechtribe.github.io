import React, { useRef } from 'react';
import Sub_testimonial from './Sub_testimonial'; // Ensure this matches the file name exactly
import userImage from '../user-demo.png'; // Make sure the path is correct and the image exists

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
      <i class="fa-solid fa-arrow-right next-btn" onClick={slideForward}></i>
      <i class="fa-solid fa-arrow-left back-btn" onClick={slideBackward}></i>
      <div className='slider'>
        <ul ref={slider}>
          <Sub_testimonial
            userImage={userImage}
            userName="Prabin Adhikari"
            userTitle="Executive Member"
            userMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam suscipit soluta porro maiores nihil, ut quod autem facere dignissimos atque sed modi ex aliquid voluptate ipsa error. Accusantium, beatae."
          />
          <Sub_testimonial
            userImage={userImage}
            userName="Prabin Adhikari"
            userTitle="Executive Member"
            userMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam suscipit soluta porro maiores nihil, ut quod autem facere dignissimos atque sed modi ex aliquid voluptate ipsa error. Accusantium, beatae."
          />
          <Sub_testimonial
            userImage={userImage}
            userName="Prabin Adhikari"
            userTitle="Executive Member"
            userMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam suscipit soluta porro maiores nihil, ut quod autem facere dignissimos atque sed modi ex aliquid voluptate ipsa error. Accusantium, beatae."
          />
          <Sub_testimonial
            userImage={userImage}
            userName="Prabin Adhikari"
            userTitle="Executive Member"
            userMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam suscipit soluta porro maiores nihil, ut quod autem facere dignissimos atque sed modi ex aliquid voluptate ipsa error. Accusantium, beatae."
          />
        </ul>
      </div>
    </div>
  );
}

export default Testimonials_2;
