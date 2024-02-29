import React, { useEffect, useState } from 'react';

const HackathonThankYouPage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        textAlign: 'center',
        fontSize: windowWidth > 768 ? '18px' : '16px',
        color: '#ffffff',
        backgroundColor: '#0A0A0A',
        fontFamily: '"Lucida Console", Monaco, monospace'
    };

    const headingStyle = {
        color: '#4CAF50',
        fontSize: windowWidth > 768 ? '32px' : '28px'
    };

    const linkStyle = {
        color: '#4CAF50',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: windowWidth > 768 ? '20px' : '18px',
        margin: '10px'
    };

    return (
        <div style={pageStyle}>
            <h1 style={headingStyle}>Thank You!</h1>
            <p>Thank you for joining our BostonBridge Hackathon 2024. We will be back in the near future.</p>
            <p>In the meantime, please follow us for more information:</p>
            <a href="https://www.instagram.com/umb_csc/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</a>
            <a href="https://discord.com/invite/xJZhRBtX" target="_blank" rel="noopener noreferrer" style={linkStyle}>Discord</a>
        </div>
    );
};

export default HackathonThankYouPage;
