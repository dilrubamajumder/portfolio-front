import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

import NavBar from "./Components/NavBar/NavIndex";
import SideBar from "./Components/SideBar/SideIndex";
import Login from "./Components/Login/Login";

//Pages
// import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import { UserProvider } from './UserContext'


function App() {
  const introRef = useRef();
  const bookRef = useRef();

  const scrollToSection = (section) => {
    //section.current.scrollIntoView();
    const yOffset = -80; 
    const y = section.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UserProvider>
    <div>
      <Router>
        {/* <Home scrollToSection={scrollToSection} greenBoxRef={greenBoxRef} aboutRef={aboutRef} bookRef={bookRef} /> */}
        <SideBar
          isOpen={isOpen}
          toggle={toggle}
          scrollToSection={scrollToSection}
          introRef={introRef}
          bookRef={bookRef}
        />
        <NavBar toggle={toggle} introRef={introRef} bookRef={bookRef} scrollToSection={scrollToSection} />

        <Routes>
          <Route
            exact
            path="/"
            element={
                <Index
                  bookRef={bookRef}
                  style={{
                    height: "100vh",
                    width: "100%",
                    backgroundColor: "black",
                  }}
                />
                
            }
          />
          <Route exact path="/books/:id" element={<Show />} />
          <Route path="/books/:id/edit" element={<Edit />} />
          <Route path="/books/new" element={<New />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />

          <Route path="signin" element={<Login />} />
        </Routes>
      </Router>
    </div>
    </UserProvider>
  );
}

export default App;
