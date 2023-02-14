import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsInstagram, BsWhatsapp, BsMailbox } from 'react-icons/bs';

export const NavigationContainer = styled.div`
  /* position: absolute;
  top: 0; */
  display: grid;
  grid-template-columns: 55px 2fr auto;
  align-items: center;
  width: 100%;
  transition: 300ms linear;
  /* background-color: var(--second-color); */
  z-index: 1000;

  @media screen and (max-width: 769px) {
    grid-template-columns: 0.5fr 1fr auto;
  }

  :hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const MobName = styled.p`
  color: var(--second-color);
  font-size: 18px;
  font-weight: bold;
  display: none;
  @media screen and (max-width: 769px) {
    display: flex;
  }

  animation: show 1000ms linear;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 20px;
`;

export const Logo = styled.img`
  margin: 5px 20px;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: var(--second-color);
  /* color: var(--some-white-color); */
  /* text-shadow: 0 0 10px #000; */

  &:hover,
  :focus {
    color: var(--accent-color);
  }
  &.active {
    color: var(--accent-color);
  }
`;

export const NavItemIcon = styled.li`
  position: relative;
  margin: 20px;
  :before {
    content: attr(data-info);
    /* border: 19px solid transparent;
    border-bottom: 19px solid rgba(61, 61, 61, 0.95); */
    position: absolute;
    background-color: var(--accent-color);
    padding: 10px;
    color: var(--some-white-color);
    right: 50%;
    top: 100%;
    min-width: 150px;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: 300ms linear;
    transform: perspective(600px) rotateX(-90deg);
    transform-origin: 0% 0%;
    z-index: 100;
  }
  :hover:before {
    visibility: visible;
    opacity: 1;
    transform: perspective(600px) rotateX(0deg);
  }
`;

export const InstaIcon = styled(BsInstagram)`
  fill: var(--second-color);

  :hover {
    fill: var(--accent-color);
  }
`;
export const WhatsappIcon = styled(BsWhatsapp)`
  fill: var(--second-color);

  :hover {
    fill: var(--accent-color);
  }
`;
export const MailIcon = styled(BsMailbox)`
  fill: var(--second-color);

  :hover {
    fill: var(--accent-color);
  }
`;

////////////////////////////////////////////
export const BtnMenu = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: var(--accent-color); */
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  @media screen and (min-width: 770px) {
    display: none;
  }

  :hover .hover {
    background-color: var(--accent-color);
  }
`;

export const Line = styled.span`
  width: 30px;
  height: 5px;
  border-radius: 10px;
  margin: 2px;
  background-color: var(--second-color);
`;
