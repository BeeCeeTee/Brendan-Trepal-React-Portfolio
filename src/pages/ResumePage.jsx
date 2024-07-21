import Education from '../components/ResumeSections/Education';
import Experience from '../components/ResumeSections/Experience';
import Projects from '../components/ResumeSections/Projects';
import Summary from '../components/ResumeSections/Summary';
import TechnicalSkills from '../components/ResumeSections/TechnicalSkills';

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