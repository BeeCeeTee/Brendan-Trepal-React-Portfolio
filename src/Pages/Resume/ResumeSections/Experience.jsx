import './experience.css';

export default function Experience() {
    return (
        <div className='experience'>
            <h2 className='experience-heading'>Experience</h2>
            <div className='experience-container'>
                <div className='experience-subtitle-container'>
                    <p className='experience-subtitle'>Freelance Web Designer/Front End Developer</p>
                    <div className='experience-year-location'>
                        <p className='experience-year'>2023-present</p>
                        <p className='experience-location'>Cleveland, OH</p>
                    </div>
                </div>
                <p className='experience-paragraph'>Designed and developed responsive front ends for several clients&#39; websites, as well as personal
                    projects. Utilized vector graphics, typography and color theory to produce clean, aesthetically-pleasing
                    designs in styles ranging from minimalism to flat design to skeuomorphism and beyond. Generated
                    interactive fields, constructed a customized css utility class library and assisted in building a
                    RESTful web API for data storage and retrieval from a database.</p>
            </div>
            <div className='experience-container'>
                <div className='experience-subtitle-container'>
                    <p className='experience-subtitle'>Team Leader at Party Safari</p>
                    <div className='experience-year-location'>
                        <p className='experience-year'>2015-2024</p>
                        <p className='experience-location'>North Randall, OH</p>
                    </div>
                </div>
                <p className='experience-paragraph'>Coordinated logistics on day-to-day operations of an event equipment rental company by directing and
                    supervising team members, communicating with customers, managing orders and organizing delivery
                    logistics.</p>
            </div>
            <div className='experience-container'>
                <div className='experience-subtitle-container'>
                    <p className='experience-subtitle'>Freelance Video Production</p>
                    <div className='experience-year-location'>
                        <p className='experience-year'>2012-2015</p>
                        <p className='experience-location'>Cleveland, OH</p>
                    </div>
                </div>
                <p className='experience-paragraph'>Shot, edited, and collaborated on multiple video production projects in locations across Ohio. Worked
                    with clients to deliver polished final products on time and within budget.</p>
            </div>
        </div>
    );
}