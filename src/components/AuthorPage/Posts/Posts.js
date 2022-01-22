import Post from "./Post/Post";

//CSS
import './css/Posts.css';

function Posts(){
    return (
        <section id="Posts">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </section>
    )
}

export default Posts;