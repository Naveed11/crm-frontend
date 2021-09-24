import React from 'react'
import Footer from './Footer.comp'
import Header from './Header.comp'
import '../../App.css';
export const DefaultLayout = () => {
    return (
        <div className="default-layout">
            <header className="header">
                <Header />
            </header>
            
            <main className="main">
                Main Page Content
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}
