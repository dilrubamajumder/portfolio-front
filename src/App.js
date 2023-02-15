import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

import NavBar from "./Components/NavBar/NavIndex";
import SideBar from "./Components/SideBar/SideIndex";
// import Login from "./Components/Login/Login";

//Pages
// import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";


function App() {

  const greenBoxRef = useRef();
  const aboutRef = useRef();
  const bookRef = useRef();

  const scrollToSection = (section) => {
    section.current.scrollIntoView();
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Router>
        {/* <Home scrollToSection={scrollToSection} greenBoxRef={greenBoxRef} aboutRef={aboutRef} bookRef={bookRef} /> */}
        <SideBar
          isOpen={isOpen}
          toggle={toggle}
          scrollToSection={scrollToSection}
          greenBoxRef={greenBoxRef}
          aboutRef={aboutRef}
          bookRef={bookRef}
        />
        <NavBar
          toggle={toggle}
          scrollToSection={scrollToSection}
          greenBoxRef={greenBoxRef}
          aboutRef={aboutRef}
          bookRef={bookRef}
        />
        <button onClick={() => greenBoxRef.current.scrollIntoView()}>
          SCROLL TO GREEN BOX
        </button>
        {/* <Login /> */}
        {/* <div
          style={{ height: "100vh", width: "100%", backgroundColor: "red" }}
        ></div>
        <div
          ref={greenBoxRef}
          style={{ height: "100vh", width: "100%", backgroundColor: "green" }}
        ></div> */}
        {/* <About aboutRef={aboutRef}/> */}
        <Routes>
          <Route
            exact
            path="/books"
            element={
              <Index
                ref={bookRef}
                style={{
                  height: "100vh",
                  width: "100%",
                  backgroundColor: "white",
                }}
              />
            }
          />
          <Route exact path="/books/:id" element={<Show />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
