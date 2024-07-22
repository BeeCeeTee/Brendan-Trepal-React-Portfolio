import './education.css';

export default function Education() {
    return (
        <div className='education'>
            <h2 className='education-heading'>Education</h2>
            <div className='education-container'>
                <div className='education-subtitle-container'>
                    <p className='experience-subtitle'>Full Stack Web Development Boot Camp Certificate</p>
                    <p className='education-type-location'>Case Western Reserve University, Cleveland, OH</p>
                </div>
                <p className='education-paragraph'>An intensive, 6-month program focused on gaining technical programming skills in HTML5, CSS3, JavaScript,
                    JQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.</p>
            </div>
            <div className='education-container'>
                <div className='education-subtitle-container'>
                    <p className='experience-subtitle'>Bachelor of Science in Communication</p>
                    <p className='education-type-location'>Ohio University, Athens, OH</p>
                </div>
                <p className='education-paragraph'>A 4-year undergraduate degree specializing in visual communication.</p>
            </div>
        </div>
    );
}