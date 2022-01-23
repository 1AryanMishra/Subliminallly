import Post from "./Post/Post";

//CSS
import './css/Posts.css';

function Posts(){
    return (
        <section id="Posts">
            <p className="MyPostsLabel">My Posts</p>
            <Post likes={193} dislikes={22}/>
            <Post likes={112} dislikes={34}/>
            <Post likes={235} dislikes={54}/>
            <Post likes={453} dislikes={12}/>
        </section>
    )
}

export default Posts;