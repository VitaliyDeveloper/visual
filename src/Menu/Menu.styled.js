import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsInstagram, BsWhatsapp, BsMailbox } from 'react-icons/bs';

export const MenuMob = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 20px;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(--second-color);

  &:hover,
  :focus {
    color: var(--accent-color);
  }
  &.active {
    color: var(--accent-color);
  }
`;

export const NavListSocial = styled.ul`
  display: flex;
  list-style: none;
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
