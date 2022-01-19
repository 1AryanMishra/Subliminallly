import TopicCard from './TopicCard/TopicCard';

//CSS
import './css/MoreTopicsArea.css';


function MoreTopicsArea(){
    return(
        <section className="MoreTopicsArea">
            
            <h3>More Topics:</h3>

            <div className="MidLine"></div>

            <div className="GenreTypeArea">
                <p className="GenreLabelText">Genre</p>
                <div className="AvailableGenres">
                    <p className="GenreType">Social</p>
                    <p className="GenreType">Religious</p>
                    <p className="GenreType">Politics</p>
                    <p className="GenreType">Space</p>
                </div>
            </div>

            <div className="ShortLine"></div>

            <div className="TopicsArea">
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
                <TopicCard/>
            </div>
            
            <div className="ShortLine"></div>

        </section>
    )
}

export default MoreTopicsArea;