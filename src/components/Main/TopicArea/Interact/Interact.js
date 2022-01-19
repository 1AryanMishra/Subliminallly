import { useState } from 'react';

//CSS
import './css/Interact.css';

//Icons
import { FcLike, FcLikePlaceholder, FcDislike } from 'react-icons/fc';
import { BsShare } from 'react-icons/bs';
import { RiDislikeLine } from 'react-icons/ri';

function Interact(){

    const [likes, setLikes] = useState(269);
    const [liked, setLiked] = useState(false);
    const [dislikes, setDislikes] = useState(10);
    const [disliked, setDisliked] = useState(false);

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
                if(liked){
                    setLikes(likes-1);
                }
                else{
                    setLikes(likes+1);
                    if(disliked){
                        setDisliked(!disliked);
                        setDislikes(dislikes-1);
                    }
                }
                setLiked(!liked);
            }}>
                {liked?<FcLike size='2rem'/>:<FcLikePlaceholder size='2rem'/>}
                {likes}
            </button>
            <button className="Dislike" onClick={() => {
                if(disliked){
                    setDislikes(dislikes-1);
                }
                else{
                    if(liked){
                        setLiked(!liked);
                        setLikes(likes-1);
                    }
                    setDislikes(dislikes+1);
                }
                setDisliked(!disliked);
            }}>
                {disliked?<FcDislike size='2rem'/>:<RiDislikeLine size='2rem'/>}
                {dislikes}
            </button>
            <button className="Share" onClick={ShareTopic}>
                <BsShare size='2rem'/>
            </button>
        </div>
    )
}

export default Interact;