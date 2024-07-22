import './projects.css';
import nutrifit from '../../../Assets/logos/NutriFit-Logo-Combined.svg';
import timecapsule from '../../../Assets/logos/TimeCapsuleFavicon.svg';
import timtrepal from '../../../Assets/logos/TimTrepal.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
    return (
        <div className='projects'>
            <h2 className='projects-heading'>Projects</h2>
            <div className='projects-container'>
                <h3 className='projects-subtitle'>NutriFit</h3>
                <div className='projects-icon-container'>
                    <a href="https://nutrifit-47ii.onrender.com" target='_blank'><img className='projects-logo' src={nutrifit} alt="NutriFit Logo" /></a>
                    <a href="https://github.com/rvanetta97/NutriFit" target='_blank'><FontAwesomeIcon icon={faGithub} className='projects-icon' /></a>
                </div>
                <ul className='projects-list'>
                    <li>Web app for logging and tracking meals and workouts. Includes a landing page, authentication system,
                        and user dashboards</li>
                    <br />
                    <li>Designed wireframes & graphics, handled front-end coding (CSS, Handlebars), and provided some
                        assistance with back-end coding</li>
                    <br />
                    <li>CSS, JavaScript, Express.js, Node.js, PostgreSQL, Handlebars.js, Charts.js, web APIs</li>
                </ul>
            </div>
            <br />
            <div className='projects-container'>
                <h3 className='projects-subtitle'>TimeCapsule</h3>
                <div className='projects-icon-container'>
                    <a href="https://beeceetee.github.io/TimeCapsule" target='_blank'><img className='projects-logo-wide' src={timecapsule} alt="TimeCapsule Logo" width="128" height="128" /></a>
                    <a href="https://github.com/BeeCeeTee/TimeCapsule" target='_blank'><FontAwesomeIcon icon={faGithub} className='projects-icon' /></a>
                </div>
                <ul className='projects-list'>
                    <li>Site which allows users to select their birthdate and view the top movie, book, and news article
                        from the year they were born.</li>
                    <br />
                    <li>Designed wireframes & graphics, handled front-end coding (HTML, CSS & some JavaScript)</li>
                    <br />
                    <li>HTML, CSS, Bulma, web APIs</li>
                </ul>
            </div>
            <br />
            <div className='projects-container'>
                <h3 className='projects-subtitle'>Tim Trepal</h3>
                <div className='projects-icon-container'>
                    <a href="https://www.timtrepal.com" target='_blank'><img className='projects-logo' src={timtrepal} alt="Tim Trepal Logo" width="128" height="128" /></a>
                    <a href="https://github.com/thomas-forte/tim-trepal" target='_blank'><FontAwesomeIcon icon={faGithub} className='projects-icon' /></a>
                </div>
                <ul className='projects-list'>
                    <li>Custom-designed personal portfolio site for Tim Trepal. Includes unique, creative layout and
                        user-friendly design showcasing the client&#39;s portfolio.</li>
                    <br />
                    <li>Designed wireframes & graphics and provided assistance with coding</li>
                    <br />
                    <li>HTML, CSS, JavaScript</li>
                </ul>
            </div>
        </div>
    );
}