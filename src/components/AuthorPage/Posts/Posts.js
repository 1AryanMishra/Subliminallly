import Post from "./Post/Post";

//CSS
import './css/Posts.css';

function Posts(){
    return (
        <section id="Posts">
            <p className="MyPostsLabel">My Posts</p>
            <Post likes={193} dislikes={22}/>
            <hr className="postDivider"/>
            <Post likes={112} dislikes={34}/>
            <hr className="postDivider"/>
            <Post likes={235} dislikes={54}/>
            <hr className="postDivider"/>
            <Post likes={453} dislikes={12}/>
            <hr className="postDivider"/>
        </section>
    )
}

export default Posts;