import InputArea from './InputArea/InputArea';
import SomeLatestComments from './SomeLatestComments/SomeLatestComments';

//CSS
import './css/CommentsArea.css';


function CommentsArea(){
    return(
        <section className="CommentsArea">
            <h1>Your View Here :</h1>
            <div className="MidLine"></div>
            <div className="ShortLine Middle"></div>
            <InputArea/>
            <button className="PostComment">This button does nothing if against.</button>
            <div className="ShortLine Middle"></div>
            <SomeLatestComments/>
            <div className="ShortLine Middle"></div>
        </section>
    )
}

export default CommentsArea;