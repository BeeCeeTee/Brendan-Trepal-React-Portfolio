import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import mongoDb from '../../../Assets/solid-icons/mongodb.svg';
import expressJs from '../../../Assets/solid-icons/expressjs.svg';
import nodeJs from '../../../Assets/solid-icons/nodejs.svg';
import jQuery from '../../../Assets/solid-icons/jquery.svg';
import handlebars from '../../../Assets/solid-icons/handlebars.svg';
import jest from '../../../Assets/solid-icons/jest.svg';
import './TechnicalSkills.css';

export default function TechnicalSkills() {
    return (
        <div>
            <h2>Technical Skills</h2>
            <div>
                <div>
                    <b>Programming Languages:</b>
                    <ul>
                        <li><FontAwesomeIcon icon={faHtml5} className='skills-icon' /></li>
                        <li><FontAwesomeIcon icon={faCss3Alt} className='skills-icon' /></li>
                        <li><FontAwesomeIcon icon={faJs} className='skills-icon' /></li>
                        <li><FontAwesomeIcon icon={faDatabase} className='skills-icon' /></li>
                    </ul>
                </div>
                <div>
                    <b>Frameworks & Systems:</b>
                    <ul>
                        <li><img src={mongoDb} alt="mongo db logo" className='skills-icon' /></li>
                        <li><img src={expressJs} alt="express js logo" className='skills-icon' /></li>
                        <li><FontAwesomeIcon icon={faReact} className='skills-icon' /></li>
                        <li><img src={nodeJs} alt="node js logo" className='skills-icon' /></li>
                        <li><img src={jQuery} alt="jquery logo" className='skills-icon' /></li>
                        <li><FontAwesomeIcon icon={faBootstrap} className='skills-icon'/></li>
                        <li><img src={handlebars} alt="handlebars js logo" className='skills-icon-wide' /></li>
                        <li><img src={jest} alt="jest logo" className='skills-icon' /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}