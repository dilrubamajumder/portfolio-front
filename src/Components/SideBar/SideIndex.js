import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

function SideBar({isOpen, toggle, scrollToSection, introRef, bookRef}) {
  const { user, setUser } = useContext(UserContext)

  const handleLogout = () => {
    window.localStorage.removeItem('book-review-token')
    setUser(null)
    window.location.href = '/'
  }

  const handleClick = () => {
    toggle()
    scrollToSection({introRef, bookRef})
  }
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          { user && <SidebarLink to="/mybooks" onClick={handleClick}>My Books</SidebarLink>}
          <SidebarLink to="/books" onClick={toggle}>Books</SidebarLink>
          { user && <SidebarLink to="/books/new" onClick={toggle}>Add New</SidebarLink>}
          { !user && <SidebarLink to="/signup" onClick={toggle}>Sign Up</SidebarLink>}
        </SidebarMenu>
        { !user && <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>}
        { user && <SideBtnWrap>
          <SidebarRoute onClick={handleLogout}>Logout</SidebarRoute>
        </SideBtnWrap>}
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default SideBar;
