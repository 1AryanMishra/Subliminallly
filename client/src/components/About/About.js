//CSS
import './css/About.css';

import linkedin from '../../SocialLinksPNGs/linkedin_png.png';
import gmail from '../../SocialLinksPNGs/Gmail_png.png';
import ig from '../../SocialLinksPNGs/insta_png.png';
import twitter from '../../SocialLinksPNGs/twitter_png.png';

function About(){
    return(
        <main className='AboutArea'>

            <section id='About'>
                <h1>About</h1>
                <p>Somewhere</p>
            </section>

            <section id='Developer'>
                <h1>Developer</h1>
                <p>Something about the Developer.</p>
            </section>

            <div className="SocialLinks">
                <img src={linkedin} alt="linkedin link"></img>
                <img src={gmail} alt="Gmail link"></img>
                <img src={ig} alt="Instagram link"></img>
                <img src={twitter} alt="twitter link"></img>
            </div>
        </main>
    )
}

export default About;