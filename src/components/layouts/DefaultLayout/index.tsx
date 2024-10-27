// src/components/layout/DefaultLayout/index.tsx
import { ReactNode } from 'react';
import Navbar, { TopHeader } from './components/Header';
import Footer from './components/Footer';

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div className="relative"> {/* Thêm lớp relative cho container */}
            <TopHeader />
            <Navbar className="absolute top-0 left-0 right-0 z-10" /> {/* Đặt Navbar với z-index cao */}
            <main className="pt-16"> {/* Thêm padding-top cho main để không bị che bởi Navbar */}
                {children}
            </main>
            <footer><Footer /></footer>
        </div>
    );
};

export default DefaultLayout;
