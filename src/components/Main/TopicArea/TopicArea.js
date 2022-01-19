import TopicContent from './TopicContent/TopicContent';
import Interact from './Interact/Interact';

//CSS
import './css/TopicArea.css';


function TopicArea(){
    return(
        <article className="TopicArea">
            
            <h2 className="TopicTitle">Education System</h2>

            <TopicContent/>

            <Interact/>

        </article>
    )
}

export default TopicArea;