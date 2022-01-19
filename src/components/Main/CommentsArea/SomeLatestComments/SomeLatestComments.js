import Comment from './Comment/Comment';

//CSS
import './css/SomeLatestComments.css';


function SomeLatestComments(){
    return(
        <div className="SomeLatestComments">
            <p className="SomeLatestCommentsLabel">Some Latest Comments</p>
            <div className="MidLine"></div>
            <Comment n="2" view="Great Thoughts" />
            <Comment n="3" view="Great View"/>
            <button className="LoadMoreComments">More</button>
        </div>
    )
}

export default SomeLatestComments;