import headshot from '../../Assets/images/Brendan_Headshot.jpg';
import './about-page.css'
export default function AboutPage() {
    return (
        <div className='about-page'>
            <h2 className='about-heading'>About Me</h2>
            <img src={headshot} alt="Photo of Brendan Trepal" className='about-headshot' />
            <div className='about-paragraph-container'>
                <p className='about-paragraph'>
                    From a young age, I&#39;ve had a fascination with building and creating things. My weekends as a child were spent making forts in the backyard or building mansions out of Legos. In the evening, I could be found glued to the computer as I designed the next grand megalopolis in SimCity. You can still find me glued to the computer most days, only now my “Legos” are computer code and my designs come in the form of websites.
                </p>
                <p className='about-paragraph'>
                    With a robust foundation in full-stack web development, evidenced by collaboration on multiple projects and completion of a 24-week intensive bootcamp, my journey in the creative industry has been marked by a commitment to excellence and innovation. As a Web Designer & Frontend Developer, my proficiency with exceptional, responsive design is matched by a dedication to crafting web applications that resonate with users.
                </p>
                <p className='about-paragraph'>
                    My skill set extends beyond development to include creative multimedia management—spanning graphic design, video production, and editing. As a certified drone pilot, I bring an aerial perspective to digital storytelling, ensuring our content soars above the ordinary.
                </p>
            </div>
        </div>
    );
}