// src/components/layout/DefaultLayout/index.tsx
import { ReactNode } from 'react';
import { Header } from './components/Header';
import Footer from './components/Footer';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      <header><Header/></header>
      <main>{children}</main>
      <footer><Footer/></footer>
    </div>
  );
};

export default DefaultLayout;
