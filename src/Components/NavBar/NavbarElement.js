import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
background: #000;
height: 80px;
// margin-top: 60px;
margin-bottom: 5px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
width:100%;
top: 0;
z-index: 5;

@media Screen and (max-width:960px){
    transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1x;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media Screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }

  &:hover{
    transition: all 0.2s ease-in-out;
    color: background: linear-gradient(90deg, rgba(245,165,191,1) 17%, rgba(255,96,103,1) 77%);
  
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: linear-gradient(90deg, rgba(245,165,191,1) 17%, rgba(255,96,103,1) 77%);
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: linear-gradient(90deg, rgba(228,96,96,1) 17%, rgba(136,254,249,1) 77%);
    color:  #010606;
  }
`;
