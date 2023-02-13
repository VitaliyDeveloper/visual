import { Outlet } from 'react-router-dom';

import { Navigation } from '../Navigation/Navigation';
import { Footer } from 'components/Footer/Footer';

import { Main } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Main>
        <Outlet />
      </Main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
