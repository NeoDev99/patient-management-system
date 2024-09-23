import React from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const AboutLayout: React.FC<{children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AboutLayout;
