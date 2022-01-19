import { Link } from 'react-router-dom';

//CSS
import './css/Footer.css';

function Footer(){
    return(
        <footer className="FooterContainer">
            <Link to="/"><p className="OtherPagesLinks">Home</p></Link>
            <Link to="/About"><p className="OtherPagesLinks">About Us</p></Link>
            <Link to="/AuthorPage"><p className="OtherPagesLinks">Write Here</p></Link>
        </footer>
    )
}

export default Footer;