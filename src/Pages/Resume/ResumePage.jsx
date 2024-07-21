import Education from './ResumeSections/Education';
import Experience from './ResumeSections/Experience';
import Projects from './ResumeSections/Projects';
import Summary from './ResumeSections/Summary';
import TechnicalSkills from './ResumeSections/TechnicalSkills';

export default function ResumePage() {
    return (
        <div>
            <h1>Resume</h1>
            <br/>
            <p>Download my <a href="./assets/Brendan_Trepal_Resume.pdf" download>resume</a></p>
            <br/>
            <div>
                <Summary />
            </div>
            <br/>
            <div>
                <TechnicalSkills />
            </div>
            <br/>
            <div>
                <Projects />
            </div>
            <br/>
            <div>
                <Experience />
            </div>
            <br/>
            <div>
                <Education />
            </div>
        </div>
    );
}