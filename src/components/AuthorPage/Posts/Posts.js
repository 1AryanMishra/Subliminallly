import { useContext } from "react";
import Post from "./Post/Post";

//Importing All Blogs Snippets Data Context
import { DataContext } from "../../App/App";

//CSS
import './css/Posts.css';

function Posts(){


    const { BlogsSnippets } = useContext(DataContext);

    
    return (
        <section id="Posts">
            <p className="MyPostsLabel">My Posts</p>
            {
                BlogsSnippets.map(snip => {
                    return(
                        <article key = {snip._id} className="PostArea">
                            <Post snip={snip}/>
                            <hr className="postDivider"/>
                        </article>
                    )
                })
            }
        </section>
    )
}

export default Posts;