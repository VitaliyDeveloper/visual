import { Menu } from 'components/Menu/Menu';
import { useState } from 'react';

import logotype from '../../img/NG.png';
// import { BsInstagram, BsWhatsapp, BsMailbox } from 'react-icons/bs';

import {
  NavigationContainer,
  MobName,
  NavList,
  NavItem,
  Logo,
  NavItemIcon,
  NavLinkStyle,
  InstaIcon,
  WhatsappIcon,
  MailIcon,
  BtnMenu,
  Line,
} from './Navigation.styled';

export const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <NavigationContainer>
      <Logo src={logotype} width="50" height="50" alt="logo" />
      <MobName>Нургуль Герасимова</MobName>
      <NavList>
        <NavItem></NavItem>
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
        <NavItemIcon data-info="@gerasimova.nurgul">
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
      <BtnMenu onClick={handleClick}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </BtnMenu>
      {active && <Menu handleClick={handleClick} />}
    </NavigationContainer>
  );
};
