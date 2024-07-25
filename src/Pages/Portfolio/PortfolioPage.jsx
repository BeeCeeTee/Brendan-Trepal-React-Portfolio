import './portfolio-page.css';
import Project from './Project';
import nutrifitScreen from '../../Assets/images/nutrifitscreenshot.jpg';
import nutrifitLogo from '../../Assets/logos/NutriFit-Logo-Combined.svg';
import timecapsuleScreen from '../../Assets/images/timecapsulescreenshot.jpg';
import timecapsuleLogo from '../../Assets/logos/TimeCapsuleFavicon.svg';
import timtrepalScreen from '../../Assets/images/timtrepalscreenshot.jpg';
import timtrepalLogo from '../../Assets/logos/TimTrepal.svg';

const nutrifit = {
    image: nutrifitScreen,
    name: 'NutriFit',
    link: 'https://nutrifit-47ii.onrender.com',
    logo: nutrifitLogo,
    github: 'https://github.com/rvanetta97/NutriFit',
    techs: 'CSS, JavaScript, Express.js, Node.js, PostgreSQL, Handlebars.js, Charts.js, web APIs',
};

const timecapsule = {
    image: timecapsuleScreen,
    name: 'TimeCapsule',
    link: 'https://beeceetee.github.io/TimeCapsule',
    logo: timecapsuleLogo,
    github: 'https://github.com/BeeCeeTee/TimeCapsule',
    techs: 'HTML, CSS, Bulma, web APIs',
};

const timtrepal = {
    image: timtrepalScreen,
    name: 'Tim Trepal',
    link: 'https://www.timtrepal.com',
    logo: timtrepalLogo,
    github: 'https://github.com/thomas-forte/tim-trepal',
    techs: 'HTML, CSS, JavaScript',
};

export default function PortfolioPage() {
    return (
        <div className='portfolio-page'>
            <h2 className='portfolio-heading'>Portfolio</h2>
            <div className='portfolio-container'>
                <Project image={nutrifit.image} name={nutrifit.name} link={nutrifit.link} logo={nutrifit.logo} github={nutrifit.github} techs={nutrifit.techs} />
                <Project image={timecapsule.image} name={timecapsule.name} link={timecapsule.link} logo={timecapsule.logo} github={timecapsule.github} techs={timecapsule.techs} />
                <Project image={timtrepal.image} name={timtrepal.name} link={timtrepal.link} logo={timtrepal.logo} github={timtrepal.github} techs={timtrepal.techs} />
            </div>
        </div>
    );
}