import './related-experience.css';
import nutrifit from '../../../Assets/logos/NutriFit-Logo-Combined.svg';
import timecapsule from '../../../Assets/logos/TimeCapsuleFavicon.svg';
import timtrepal from '../../../Assets/logos/TimTrepal.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function RelatedExperience() {
    return (
        <div className='related-experience'>
            <h3 className='related-experience-heading'>Related Experience</h3>
            <div className='related-experience-container'>
                <div className='related-experience-subtitle-container'>
                    <h4 className='related-experience-subtitle'>Freelance Web Designer/Front End Developer</h4>
                    <div className='related-experience-year-location'>
                        <p className='related-experience-year'>2023-present</p>
                        <p className='related-experience-location'>Cleveland, OH</p>
                    </div>
                </div>
                <p className='related-experience-paragraph'>Designed and developed responsive front ends for several clients&#39; websites, as well as personal
                    related-experience. Utilized vector graphics, typography and color theory to produce clean, aesthetically-pleasing
                    designs in styles ranging from minimalism to flat design to skeuomorphism and beyond. Generated
                    interactive fields, constructed a customized css utility class library and assisted in building a
                    RESTful web API for data storage and retrieval from a database.</p>
            </div>
            <div className='related-experience-container'>
                <h4 className='related-experience-subtitle'>NutriFit</h4>
                <div className='related-experience-icon-container'>
                    <a href="https://nutrifit-47ii.onrender.com" target='_blank'><img className='related-experience-logo-1' src={nutrifit} alt="NutriFit Logo" /></a>
                    <a href="https://github.com/rvanetta97/NutriFit" target='_blank'><FontAwesomeIcon icon={faGithub} className='related-experience-icon' /></a>
                </div>
                <ul className='related-experience-list'>
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
            <div className='related-experience-container'>
                <h4 className='related-experience-subtitle'>TimeCapsule</h4>
                <div className='related-experience-icon-container'>
                    <a href="https://beeceetee.github.io/TimeCapsule" target='_blank'><img className='related-experience-logo-2' src={timecapsule} alt="TimeCapsule Logo" width="128" height="128" /></a>
                    <a href="https://github.com/BeeCeeTee/TimeCapsule" target='_blank'><FontAwesomeIcon icon={faGithub} className='related-experience-icon' /></a>
                </div>
                <ul className='related-experience-list'>
                    <li>Site which allows users to select their birthdate and view the top movie, book, and news article
                        from the year they were born.</li>
                    <br />
                    <li>Designed wireframes & graphics, handled front-end coding (HTML, CSS & some JavaScript)</li>
                    <br />
                    <li>HTML, CSS, Bulma, web APIs</li>
                </ul>
            </div>
            <br />
            <div className='related-experience-container'>
                <h4 className='related-experience-subtitle'>Tim Trepal</h4>
                <div className='related-experience-icon-container'>
                    <a href="https://www.timtrepal.com" target='_blank'><img className='related-experience-logo-3' src={timtrepal} alt="Tim Trepal Logo" width="128" height="128" /></a>
                    <a href="https://github.com/thomas-forte/tim-trepal" target='_blank'><FontAwesomeIcon icon={faGithub} className='related-experience-icon' /></a>
                </div>
                <ul className='related-experience-list'>
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