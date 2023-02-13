import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsInstagram, BsWhatsapp, BsMailbox } from 'react-icons/bs';

export const NavigationContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 2fr auto;
  align-items: center;
  width: 100%;
  transition: 300ms linear;
  /* background-color: var(--second-color); */

  :hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 20px;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
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
    background-color: var(--second-color);
    padding: 10px;
    color: var(--some-white-color);
    right: 50%;
    top: 100%;
    min-width: 150px;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: 300ms linear;
  }
  :hover:before {
    visibility: visible;
    opacity: 1;
  }
`;

export const InstaIcon = styled(BsInstagram)``;
export const WhatsappIcon = styled(BsWhatsapp)``;
export const MailIcon = styled(BsMailbox)``;
