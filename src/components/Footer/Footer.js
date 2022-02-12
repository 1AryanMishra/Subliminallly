import { Link } from 'react-router-dom';

//CSS
import './css/Footer.css';

function Footer(){
    return(
        <footer className="FooterContainer">
            <Link to="/" className="OtherPagesLinks"><p>Home</p></Link>
            <Link to="/About" className="OtherPagesLinks"><p>About Us</p></Link>
            <Link to="/AuthorPage" className="OtherPagesLinks"><p>Write Here</p></Link>
        </footer>
    )
}

export default Footer;