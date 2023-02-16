import React from "react";
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
          <SidebarLink to="/about" onClick={handleClick}>About</SidebarLink>
          <SidebarLink to="/" onClick={toggle}>Books</SidebarLink>
          <SidebarLink to="/addnew" onClick={toggle}>Add New</SidebarLink>
          <SidebarLink to="/signup" onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default SideBar;
