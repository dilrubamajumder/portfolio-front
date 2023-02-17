import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Backgound from "../Images/Background-img1.jpeg";
import foreground from "../Images/Bookgif.gif";
import readin from "../Images/readin.gif";
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
          <div>HOWDY</div>
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
        <Parallax pages={3} ref={ref}>
          <ParallaxLayer 
          offset={1} 
          speed={0.5} 
          factor={1}>
          <h2 className="quote1">
            'Happiness is; a cup of tea and.
            <br /> a good book'
          </h2>
          </ParallaxLayer>

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
            factor={2}
            sticky={{ start: 0.39, end: 2 }}
            style={{ textAlign: "center" }}
            onClick={() => ref.current.scrollTo(3)}
          >
            <h1>Welcome to ReviewED</h1>
          </ParallaxLayer>

          <ParallaxLayer
            className="bookshelf"
            offset={1}
            speed={1}
            factor={1}
            style={{
              backgroundImage: `url('https://i.pinimg.com/originals/f5/37/d4/f537d4e900facfeaae5a0ca55644ec7f.png')`,
              backgroundSize: "fit",
              width: "80vw",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.05}
            factor={1}
            sticky={{ start: 0.6, end: 1 }}
            style={{ textAlign: "right" }}
          >
            <img
              src={
                "https://media1.giphy.com/media/WPT7MrXvO47mWzugDa/giphy.gif"
              }
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={1}
            onClick={() => ref.current.scrollTo(0)}
          >
            <h2>
              'I have lives a thousand lives and I have loved a thousand loves.
              I've walked on distant worlds and seen the end of time. <br />{" "}
              Because I read.'
            </h2>
          </ParallaxLayer>
          <ParallaxLayer
            className="aboutparalex"
            offset={1}
            speed={3}
            factor={1}
            sticky={{ start: 3, end: 2 }}
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
