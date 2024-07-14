import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import ResumePage from '../pages/ResumePage';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <AboutPage />;
        }
        if (currentPage === 'Portfolio') {
            return <PortfolioPage />;
        }
        if (currentPage === 'Contact') {
            return <ContactPage />;
        }
        return <ResumePage />;
    };

    return (
        <div>
            <Header />
            <main className="mx-3">{renderPage()}</main>
            <Footer />
        </div>
    );
}
