import './other-experience.css';

export default function Otherexperience() {
    return (
        <div className='other-experience'>
            <h2 className='other-experience-heading'>Other other-experience</h2>
            <div className='other-experience-container'>
                <div className='other-experience-subtitle-container'>
                    <p className='other-experience-subtitle'>Team Leader at Party Safari</p>
                    <div className='other-experience-year-location'>
                        <p className='other-experience-year'>2015-2024</p>
                        <p className='other-experience-location'>North Randall, OH</p>
                    </div>
                </div>
                <p className='other-experience-paragraph'>Coordinated logistics on day-to-day operations of an event equipment rental company by directing and
                    supervising team members, communicating with customers, managing orders and organizing delivery
                    logistics.</p>
            </div>
            <div className='other-experience-container'>
                <div className='other-experience-subtitle-container'>
                    <p className='other-experience-subtitle'>Freelance Video Production</p>
                    <div className='other-experience-year-location'>
                        <p className='other-experience-year'>2012-2015</p>
                        <p className='other-experience-location'>Cleveland, OH</p>
                    </div>
                </div>
                <p className='other-experience-paragraph'>Shot, edited, and collaborated on multiple video production projects in locations across Ohio. Worked
                    with clients to deliver polished final products on time and within budget.</p>
            </div>
        </div>
    );
}