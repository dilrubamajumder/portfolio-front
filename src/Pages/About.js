import React from "react";
import "./About.css"
import Moving from "./Movingimages/Moving"

function aboutPg({ aboutRef }) {
  return (
    <div className="about-bg" ref={aboutRef}>
      <div>
        <img 
        src="https://cdni.iconscout.com/illustration/premium/thumb/girl-reading-book-in-restaurant-3454007-2914605.png"
        alt="aboutimg"
      />
      </div>
      <div>
        <h1> What is ReviewED?</h1>
        <p>There are many websites for reviewing books and maybe even buying books, but at ReviewED, we share a space as 
          a community! We come together and celebrate our love for books. Our passion for creating worlds away from our world. <br /> 
          <b>This is a safe space for your imaginations!</b>
         
        </p>
      </div>
      <div>
        <Moving />
      </div>
      
      
    </div>
  );
}

export default aboutPg;
