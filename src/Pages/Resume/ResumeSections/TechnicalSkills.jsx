import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import mongoDb from '../../../assets/solid-icons/mongodb.svg';
import expressJs from '../../../assets/solid-icons/expressjs.svg';
import nodeJs from '../../../assets/solid-icons/nodejs.svg';
import jQuery from '../../../assets/solid-icons/jquery.svg';
import handlebars from '../../../assets/solid-icons/handlebars.svg';
import jest from '../../../assets/solid-icons/jest.svg';
import './TechnicalSkills.css';

export default function TechnicalSkills() {
    return (
        <div className='technical-skills'>
            <h2 className='technical-heading'>Technical Skills</h2>
            <div className='technical-container-outer'>
                <div className='technical-container-inner-1'>
                    <b className='technical-subtitle'>Programming Languages:</b>
                    <ul className='technical-list-1'>
                        <li><FontAwesomeIcon icon={faHtml5} className='skills-icon html' /></li>
                        <li><FontAwesomeIcon icon={faCss3Alt} className='skills-icon css' /></li>
                        <li><FontAwesomeIcon icon={faJs} className='skills-icon js' /></li>
                        <li><FontAwesomeIcon icon={faDatabase} className='skills-icon sql' /></li>
                    </ul>
                </div>
                <div className='technical-container-inner-2'>
                    <b className='technical-subtitle'>Frameworks & Systems:</b>
                    <ul className='technical-list-2'>
                        <li><img src={mongoDb} alt="mongo db logo" className='skills-icon mongo' /></li>
                        <li><img src={expressJs} alt="express js logo" className='skills-icon express' /></li>
                        <li><FontAwesomeIcon icon={faReact} className='skills-icon react' /></li>
                        <li><img src={nodeJs} alt="node js logo" className='skills-icon node' /></li>
                        <li><img src={jQuery} alt="jquery logo" className='skills-icon jquery' /></li>
                        <li><FontAwesomeIcon icon={faBootstrap} className='skills-icon bootstrap'/></li>
                        <li><img src={handlebars} alt="handlebars js logo" className='skills-icon-wide handlebars' /></li>
                        <li><img src={jest} alt="jest logo" className='skills-icon jest' /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}