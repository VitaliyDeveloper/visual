import { Outlet } from 'react-router-dom';

import { Navigation } from '../Navigation/Navigation';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
