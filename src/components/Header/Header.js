//CSS
import './css/Header.css';


function Header(){

    return(
        <header className="MainHeader">

            <h1 className="Logo">Subliminal</h1>

            <div className="TopicSectionTypeArea">
                <p className="TopicSectionType">Trending Here</p>
                <p className="TopicSectionType" id="MidTopicSectionType">Topic-Wise</p>
                <p className="TopicSectionType">Daily-Updates</p>    
            </div>
            
        </header>
    )
}

export default Header;