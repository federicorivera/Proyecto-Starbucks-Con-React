import React from 'react';
import "../css/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <a href="/" className="footer__links-items">Iniciar sesión</a>
                <a href="/" className="footer__links-items">Regístrate</a>
            </div>
            <div className="footer__iconos-contactos">
                <i className="footer__icon bi bi-whatsapp"></i>
                <i className="footer__icon bi bi-facebook"></i>
                <i className="footer__icon bi bi-twitter"></i>
            </div>
            <div className="footer__contactanos">
                <a href="/" className="footer__contactanos-items">Contáctanos aquí</a>
            </div>
        </footer>
    );
}

export default Footer;
