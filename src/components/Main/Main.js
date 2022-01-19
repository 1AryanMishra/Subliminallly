import MoreTopicsArea from './MoreTopicsArea/MoreTopicsArea';
import TopicArea from './TopicArea/TopicArea';
import AboutAuthorArea from './AboutAuthorArea/AboutAuthorArea';
import CommentsArea from './CommentsArea/CommentsArea';

//CSS
import './css/Main.css';



function Main(){
    return(
        <main className="MainContainer">

            <div className="MoreTopicsAreaContainer">
                <MoreTopicsArea/>
            </div>

            <div className='ContentContainer'>
                <div className="MidLine InMiddle" id='Main-Content-Separator'></div>
                <TopicArea/>
                <div className="MidLine InMiddle"></div>
                <AboutAuthorArea/>
                <div className="MidLine InMiddle"></div>
                <CommentsArea/>
                <div className="MidLine InMiddle"></div>
            </div>
            
        </main>
    )
}

export default Main;