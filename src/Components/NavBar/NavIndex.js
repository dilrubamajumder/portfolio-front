import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";

function NavBar({toggle, scrollToSection, greenBoxRef, aboutRef, bookRef}) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">BookEx</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={() => scrollToSection(greenBoxRef)}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollToSection(bookRef)}>Books</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="add">Add book</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
