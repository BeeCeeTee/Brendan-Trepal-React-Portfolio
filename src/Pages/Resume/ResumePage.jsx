import './resume-page.css'
import resume from '../../assets/Brendan_Trepal_Resume.pdf'
import Education from './ResumeSections/Education';
import Experience from './ResumeSections/Experience';
import Projects from './ResumeSections/Projects';
import Summary from './ResumeSections/Summary';
import TechnicalSkills from './ResumeSections/TechnicalSkills';

export default function ResumePage() {
    return (
        <div className='resume-page'>
            <h1 className='resume-heading'>Resume</h1>
            <br/>
            <p className='resume-paragraph'>Download my <a href={resume} download className='resume-download'>resume</a></p>
            <br/>
            <div className='resume-container'>
                <Summary />
            </div>
            <br/>
            <div className='resume-container'>
                <TechnicalSkills />
            </div>
            <br/>
            <div className='resume-container'>
                <Projects />
            </div>
            <br/>
            <div className='resume-container'>
                <Experience />
            </div>
            <br/>
            <div className='resume-container'>
                <Education />
            </div>
        </div>
    );
}