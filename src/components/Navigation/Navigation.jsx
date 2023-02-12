import logotype from '../../img/NG.png';

import {
  NavigationContainer,
  NavList,
  NavItem,
  NavLinkStyle,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavList>
        <NavItem>
          <img src={logotype} width="80" height="80" alt="logo" />
        </NavItem>
        <NavItem>
          <NavLinkStyle to="/" end>
            Главная
          </NavLinkStyle>
        </NavItem>
        <NavItem>
          <NavLinkStyle to="/servises">Услуги</NavLinkStyle>
        </NavItem>
        <NavItem>
          <NavLinkStyle to="/gallery">Галерея</NavLinkStyle>
        </NavItem>
      </NavList>
    </NavigationContainer>
  );
};
