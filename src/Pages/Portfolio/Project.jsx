import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './project.css';

export default function Project(props) {
    return (
        <div className='project'>
            <img className='project-image' src={props.image} alt={`Image of deployed ${props.name} site`} />
            <div className='project-container'>
                <h3 className='project-subtitle'>{props.name}</h3>
                <div className='project-links'>
                    <a href={props.link} target="_blank"><img className='project-logo' src={props.logo} alt={`${props.name} logo`} /></a>
                    <a href={props.github} target="_blank"><FontAwesomeIcon icon={faGithub} className='project-github' /></a>
                </div>
                <p className='project-techs'>{props.techs}</p>
            </div>
        </div>
    );
}