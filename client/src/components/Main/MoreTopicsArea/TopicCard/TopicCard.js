import DemoTopicContent from './DemoTopicContent/DemoTopicContent';

//CSS
import './css/TopicCard.css';


function TopicCard(){
    return(
        <article className="TopicCard">
            <h3 className="TopicTitle">Some Title For The Topic</h3>
            <DemoTopicContent/>
            <button className="TopicReadBtn">Read</button>
        </article>
    )
}

export default TopicCard;