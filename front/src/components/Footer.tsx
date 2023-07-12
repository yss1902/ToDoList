import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-light py-3">
            <Container className="text-center">
                <p>&copy; 2023 Goorm Fullstack 1st. All rights reserved.</p>
                <p>Visit <a href="https://kdt.goorm.io/">Goorm</a></p>
            </Container>
        </footer>
    );
}

export default Footer;
