import { useState } from 'react';
import Interact from '../../../Main/TopicArea/Interact/Interact';

//CSS
import { MdOutlineMoreVert } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin4Line } from 'react-icons/ri';



function Post(props){

    const [moreAction, setMoreAction] = useState(false);

    return(
        <div className="Post">
            <div className='blogMoreAction'>
                <MdOutlineMoreVert className='moreActionIcon' size='1.8rem' onClick={() => setMoreAction(!moreAction)}/>
                <div className={moreAction ? 'showMoreAction':'showMoreAction hideMoreAction'}>
                    <p className='PostedDate'><b>Posted : </b>05/12/2021</p>
                    <p className='moreActionItem'><FiEdit2 size='2rem'/></p>
                    <p className='moreActionItem'><RiDeleteBin4Line size='2rem'/></p>
                </div>
            </div>
            <hr className='rightHr'/>
            <article className="blogSnip">
                <h1 className="blogHeading">
                    Heading
                </h1>
                <p className="blogPara">
                    Some para blog Some para blog Some para blog 
                    Some para blog Some para blog Some para blog 
                    Some para blog Some para blog Some para blog 
                    Some para blog Some para blog Some para blog
                </p>
            </article>
            <button className="readMore">More...</button>
            <hr className='leftHr'/>
            <Interact likes={props.likes} dislikes={props.dislikes}/>
        </div>
    )
}

export default Post;