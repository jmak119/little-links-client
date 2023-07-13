import React from "react";
import Facebook from "../../assets/icons/Icon-facebook.svg";
import Instagram from "../../assets/icons/Icon-instagram.svg";
import Twitter from "../../assets/icons/Icon-twitter.svg";
import './Footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__social-container">
                    <img src={Facebook} alt="facebook" className="footer__social" />
                    <img src={Instagram} alt="ig" className="footer__social" />
                    <img src={Twitter} alt="twitter" className="footer__social" />
                </div>

                <p className="footer__image-credits">
                    <a href="http://www.freepik.com" className="footer__image-credits">Image designed by brgfx / Freepik</a>
                </p>
            </div>

        </footer>
    );
}