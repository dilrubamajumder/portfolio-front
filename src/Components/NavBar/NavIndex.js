import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
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

function NavBar({toggle, scrollToSection, introRef, bookRef }) {
  const { user, setUser } = useContext(UserContext)

  const handleLogout = () => {
    window.localStorage.removeItem('book-review-token')
    setUser(null)
    window.location.href = '/'
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => scrollToSection(introRef, bookRef)}>Book Review</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/" onClick={() => scrollToSection(bookRef, introRef)}>Books</NavLinks>
            </NavItem>
            { user && <NavItem>
              <NavLinks to="/books/new">Add book</NavLinks>
            </NavItem>}
            {!user && <NavItem>
              <NavLinks to="/signup">Sign Up</NavLinks>
            </NavItem>}
          </NavMenu>
          {!user && <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>}
          {user && <NavBtn>
            <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
          </NavBtn>}
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
