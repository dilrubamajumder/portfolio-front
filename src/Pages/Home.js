import React, { useState } from 'react'
import SideBar from '../Components/SideBar/SideIndex'
import NavBar from '../Components/NavBar/NavIndex'



const Home = ({scrollToSection, greenBoxRef, aboutRef, bookRef}) => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}


  return (
    <>
    <SideBar isOpen= {isOpen} toggle= {toggle} scrollToSection={scrollToSection} greenBoxRef={greenBoxRef} aboutRef={aboutRef} bookRef={bookRef}/>
    <NavBar toggle= {toggle} scrollToSection={scrollToSection} greenBoxRef={greenBoxRef} aboutRef={aboutRef} bookRef={bookRef}/>
    </>
  )
}

export default Home