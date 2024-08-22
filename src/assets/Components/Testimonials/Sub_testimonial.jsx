import React from 'react';

const Sub_Testimonial = ({ userImage, userName, userTitle, userMessage }) => {
  
  const renderSub_Testimonial = (image, name, title, message) => (
    <div className="slide">
      <div className="user-info">
        <img src={image} alt={`${name}'s avatar`} />
        <div>
          <h3>{name}</h3>
          <span>{title}</span>
        </div>
      </div>
      <p>{message}</p>
    </div>
  );

  return (
   
      
        
          <li>
            {renderSub_Testimonial(userImage, userName, userTitle, userMessage)}
          </li>
       
   

  );
}

export default Sub_Testimonial;
