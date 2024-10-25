// src/components/layout/DefaultLayout/index.tsx
import { ReactNode } from 'react';
import Navbar, {TopHeader} from './components/Header';
import Footer from './components/Footer';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
        <TopHeader/>
          <Navbar/>
      <main>{children}</main>
      <footer><Footer/></footer>
    </div>
  );
};

export default DefaultLayout;
