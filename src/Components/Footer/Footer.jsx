import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

export default function Education() {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <a href="https://github.com/BeeCeeTee" target='_blank'><FontAwesomeIcon icon={faGithub} className='footer-icon'/></a>
                <a href="https://linkedin.com/in/brendan-trepal" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='footer-icon'/></a>
                <a href="https://www.facebook.com/brendan.trepal/" target='_blank'><FontAwesomeIcon icon={faFacebook} className='footer-icon'/></a>
            </div>
        </div>
    );
}