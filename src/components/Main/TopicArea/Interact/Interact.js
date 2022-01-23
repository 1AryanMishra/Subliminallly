import { useState } from 'react';

//CSS
import './css/Interact.css';

//Icons
import { FcLike, FcLikePlaceholder, FcDislike } from 'react-icons/fc';
import { BsShare } from 'react-icons/bs';
import { RiDislikeLine } from 'react-icons/ri';

function Interact(props){

    const [postLikes, setPostLikes] = useState(props.likes);
    const [postLiked, setPostLiked] = useState(false);
    const [postDislikes, setPostDislikes] = useState(props.dislikes);
    const [postDisliked, setPostDisliked] = useState(false);

    async function ShareTopic(){
        try{
            await Navigator.share({
                    title : 'Subliminal Thoughts',
                    topic : document.querySelector('.TopicTitle').textContent,
                    url : document.URL
            });
        }
        catch(err){
            console.log("Can't share", err);
        }
    }

    return(
        <div className="Interact">
            <button className="Like" onClick={() => {
                if(postLiked){
                    setPostLikes(postLikes-1);
                }
                else{
                    setPostLikes(postLikes+1);
                    if(postDisliked){
                        setPostDisliked(!postDisliked);
                        setPostDislikes(postDislikes-1);
                    }
                }
                setPostLiked(!postLiked);
            }}>
                {postLiked?<FcLike size='2rem'/>:<FcLikePlaceholder size='2rem'/>}
                {postLikes}
            </button>
            <button className="Dislike" onClick={() => {
                if(postDisliked){
                    setPostDislikes(postDislikes-1);
                }
                else{
                    if(postLiked){
                        setPostLiked(!postLiked);
                        setPostLikes(postLikes-1);
                    }
                    setPostDislikes(postDislikes+1);
                }
                setPostDisliked(!postDisliked);
            }}>
                {postDisliked?<FcDislike size='2rem'/>:<RiDislikeLine size='2rem'/>}
                {postDislikes}
            </button>
            <button className="Share" onClick={ShareTopic}>
                <BsShare size='2rem'/>
            </button>
        </div>
    )
}

export default Interact;