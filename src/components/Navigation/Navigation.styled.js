import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div`
  position: absolute;
  width: 100%;
  /* background-color: var(--second-color); */
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
  &:hover,
  :focus {
    color: var(--accent-color);
  }
  &.active {
    color: var(--accent-color);
  }
`;
