import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import mongoDb from '../../../Assets/solid-icons/mongodb.svg';
import expressJs from '../../../Assets/solid-icons/expressjs.svg';
import nodeJs from '../../../Assets/solid-icons/nodejs.svg';
import jQuery from '../../../Assets/solid-icons/jquery.svg';
import handlebars from '../../../Assets/solid-icons/handlebars.svg';
import jest from '../../../Assets/solid-icons/jest.svg';
import graphQl from '../../../Assets/solid-icons/graphql.svg';
import './technical-skills.css';

export default function TechnicalSkills() {
    return (
        <div className='technical-skills'>
            <h3 className='technical-heading'>Technical Skills</h3>
            <div className='technical-container-outer'>
                <div className='technical-container-inner-1'>
                    <h4 className='technical-subtitle'>Front End:</h4>
                    <ul className='technical-list-1'>
                        <div className='technical-subgroup'>
                            <div className='technical-list-1-group-1'>
                                <li><FontAwesomeIcon icon={faHtml5} className='skills-icon html' /></li>
                                <li><FontAwesomeIcon icon={faCss3Alt} className='skills-icon css' /></li>
                                <li><FontAwesomeIcon icon={faJs} className='skills-icon js' /></li>
                            </div>
                            <div className='technical-list-1-group-2'>
                                <li><FontAwesomeIcon icon={faReact} className='skills-icon react' /></li>
                            </div>
                        </div>
                        <div className='technical-list-1-group-3'>
                            <li><img src={jQuery} alt="jquery logo" className='skills-icon jquery' /></li>
                            <li><FontAwesomeIcon icon={faBootstrap} className='skills-icon bootstrap' /></li>
                            <li><img src={handlebars} alt="handlebars js logo" className='skills-icon-wide handlebars' /></li>
                        </div>
                    </ul>
                </div>
                <div className='technical-container-inner-1'>
                    <h4 className='technical-subtitle'>Back End:</h4>
                    <ul className='technical-list-2'>
                        <li><FontAwesomeIcon icon={faDatabase} className='skills-icon sql' /></li>
                        <li><img src={expressJs} alt="express js logo" className='skills-icon express' /></li>
                        <li><img src={nodeJs} alt="node js logo" className='skills-icon node' /></li>
                        <li><img src={mongoDb} alt="mongo db logo" className='skills-icon mongo' /></li>
                    </ul>
                </div>
                <div className='technical-container-inner-2'>
                    <h4 className='technical-subtitle'>Other:</h4>
                    <ul className='technical-list-3'>
                        <li><img src={jest} alt="jest logo" className='skills-icon jest' /></li>
                        <li><img src={graphQl} alt="graph ql logo" className='skills-icon graphql' /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}