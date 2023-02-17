/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Backgound from "../Images/Background-img1.jpeg";

import "./paralex.css";
import About from "./About";

function Intro({ aboutRef }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [pageWidth, setPageWidth] = useState(0);

  // Creates event listener to listen for any resizing on the page
  // Updates the pageWidth state everytime the page is resized
  // Removes the event listener after its used
  useEffect(() => {
    function updateSize() {
      setPageWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // If the page width is less than 769px, set is mobile to true
  // else set it to false
  useEffect(() => {
    if (pageWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [pageWidth]);

  const ref = useRef();
  return (
    <div className="paralex">
      {isMobile && (
        <div className="mobile-homepg">
          <div>
          <img
      className="mobile-home-img"
        src="https://i.pinimg.com/originals/dd/64/29/dd642929459cf1fedc793b3da6d4aab6.gif"
        alt="aboutimg"
      />
          </div>
          <div className="mobile-welcome-msg"><h1>Welcome to ReviewED</h1>
          <p className="mobile-p">Find your fellow book lovers here!</p></div>
          <div className="mobile-aboutpg">
            <About
              aboutRef={aboutRef}
              style={{
                height: "100vh",
              }}
            />
          </div>
        </div>
      )}

      {!isMobile && (
        <Parallax pages={2} ref={ref}>
          

          <ParallaxLayer
            offset={0}
            speed={1}
            style={{
              backgroundImage: `url('${Backgound}')`,
              backgroundSize: "cover",
            }}
          />
          
          <ParallaxLayer
            className="title"
            offset={1}
            speed={0.05}
            factor={1}
            sticky={{ start: 0.39, end: 0.50 }}
            style={{ textAlign: "center" }}
            onClick={() => ref.current.scrollTo(0)}
          >
            <h1>Welcome to ReviewED</h1>
          </ParallaxLayer>

        

          <ParallaxLayer
            className="aboutparalex"
            offset={1}
            speed={3}
            factor={1}
            sticky={{ start: 1, end: 1 }}
            style={{ 
              textAlign: "center",
               
          }}
            onClick={() => ref.current.scrollTo(0)}
          >
            <About
              aboutRef={aboutRef}
              style={{
                height: "100vh",
              }}
            />
          </ParallaxLayer>
        </Parallax>
      )}
    </div>
  );
}
// }

export default Intro;
