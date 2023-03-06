import { Outlet } from 'react-router-dom';
import { LayoutStyled } from './MainLayoutStyled';

const MainLayout = () => {
  return (
    <LayoutStyled>
      <h1 className="heading">STAR-WARS</h1>
      <main>
        <Outlet />
      </main>
      <footer className="footer">Made by @enroco</footer>
    </LayoutStyled>
  );
};

export default MainLayout;
