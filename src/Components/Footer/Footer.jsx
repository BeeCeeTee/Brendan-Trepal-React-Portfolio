import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

export default function Education() {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <a href="https://github.com/BeeCeeTee"><FontAwesomeIcon icon={faGithub} className='footer-icon'/></a>
                <a href="https://linkedin.com/in/brendan-trepal"><FontAwesomeIcon icon={faLinkedin} className='footer-icon'/></a>
                <a href="https://beeceetee.github.io/CWRU-02-Portfolio"><FontAwesomeIcon icon={faBriefcase} className='footer-icon'/></a>
            </div>
        </div>
    );
}