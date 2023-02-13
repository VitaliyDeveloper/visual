import logotype from '../../img/NG.png';
// import { BsInstagram, BsWhatsapp, BsMailbox } from 'react-icons/bs';

import {
  NavigationContainer,
  NavList,
  NavItem,
  Logo,
  NavItemIcon,
  NavLinkStyle,
  InstaIcon,
  WhatsappIcon,
  MailIcon,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavList>
        <NavItem>
          <Logo src={logotype} width="50" height="50" alt="logo" />
        </NavItem>
        <NavItem>
          <NavLinkStyle to="/" end>
            Главная
          </NavLinkStyle>
        </NavItem>
        <NavItem>
          <NavLinkStyle to="/services">Услуги</NavLinkStyle>
        </NavItem>
        <NavItem>
          <NavLinkStyle to="/gallery">Галерея</NavLinkStyle>
        </NavItem>
      </NavList>
      <NavList>
        <NavItemIcon data-info="nurgul.gerassimova">
          <a
            href="https://instagram.com/gerasimova.nurgul?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer nooppener"
          >
            <InstaIcon size="30" />
          </a>
        </NavItemIcon>
        <NavItemIcon data-info="+7-777-777-77-77">
          <a
            href="https://wa.me/77777777777"
            target="_blank"
            rel="noreferrer nooppener"
          >
            <WhatsappIcon size="30" />
          </a>
        </NavItemIcon>
        <NavItemIcon data-info="nurgul.gerassimova@mail.ru">
          <a
            href="mailto:nurgul.gerassimova@mail.ru"
            target="_blank"
            rel="noreferrer nooppener"
          >
            <MailIcon size="30" fill="#FFF4EC" />
          </a>
        </NavItemIcon>
      </NavList>
    </NavigationContainer>
  );
};
