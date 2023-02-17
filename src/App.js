import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { UserProvider } from "./UserContext";


import NavBar from "./Components/NavBar/NavIndex";
import SideBar from "./Components/SideBar/SideIndex";
import Login from "./Components/Login/Login";

//Pages
import Intro from "./Pages/Intro";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Signup from "./Pages/Signup";
import UsersBooks from "./Pages/UsersBooks";

function App() {
  const introRef = useRef();
  const bookRef = useRef();
  const aboutRef = useRef

  const scrollToSection = (section) => {
    //section.current.scrollIntoView();
    const yOffset = -80;
    const y =
      section.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
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
          <NavBar
            toggle={toggle}
            introRef={introRef}
            bookRef={bookRef}
            scrollToSection={scrollToSection}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Intro
                  introRef={introRef}
                  style={{
                    height: "100vh",
                    width: "100%",
                    backgroundColor: "black",
                  }}
                />
              }
            />
            <Route
              exact
              path="/books"
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
            <Route path="mybooks" element={<UsersBooks />} />
            <Route path="signup" element={<Signup />} />

            <Route path="signin" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
