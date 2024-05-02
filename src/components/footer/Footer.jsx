import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item">
                        <a href="https://t.me/mkurylovich"><FontAwesomeIcon icon={faTelegram} className='svg-icon'/></a>
                    </li>
                    <li className="social__item">
                        <a href="https://www.instagram.com/m.kurylovich"><FontAwesomeIcon icon={faInstagram} className='svg-icon'/></a>
                    </li>
                    <li className="social__item">
                        <a href="https://github.com/Matthew160503"><FontAwesomeIcon icon={faGithub} className='svg-icon'/></a>
                    </li>
                </ul>
                <p className="copyright">© Matthew Kurylovich 2024</p>
            </div>
        </div>
    </footer>
    );
}
 
export default Footer;