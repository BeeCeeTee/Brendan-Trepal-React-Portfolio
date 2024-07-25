import './resume-page.css'
import resume from '../../Assets/Brendan_Trepal_Resume.pdf'
import Education from './ResumeSections/Education';
import OtherExperience from './ResumeSections/OtherExperience';
import RelatedExperience from './ResumeSections/RelatedExperience';
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
                <RelatedExperience />
            </div>
            <br/>
            <div className='resume-container'>
                <OtherExperience />
            </div>
            <br/>
            <div className='resume-container'>
                <Education />
            </div>
        </div>
    );
}