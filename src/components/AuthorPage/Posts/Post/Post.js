import { useState, useContext } from 'react';
import Interact from '../../../Main/TopicArea/Interact/Interact';

//EditContext
import { EditContext } from '../../Editor/Editor';

//CSS
import { MdOutlineMoreVert } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin4Line } from 'react-icons/ri';

//Importing Delete Component
import Delete from '../.././Editor/Delete/Delete';


function Post(props){

    const [moreAction, setMoreAction] = useState(false);
    const{setEdit} = useContext(EditContext);
    const [deleteAlert, setDeleteAlert] = useState(false);
    const[blogDeleted, setBlogDeleted] = useState(false);

    return(
        <div className={blogDeleted ? 'Hide':'Post'}>
            <div className='blogMoreAction'>
                <MdOutlineMoreVert className='moreActionIcon' size='1.8rem' onClick={() => setMoreAction(!moreAction)}/>
                <div className={moreAction ? 'showMoreAction':'showMoreAction hideMoreAction'}>
                    <p className='PostedDate'><b>Posted : </b>05/12/2021</p>
                    <button className='moreActionItem' onClick={() => setEdit(true)}><FiEdit2 size='2rem'/></button>
                    <button className='moreActionItem' onClick={() => setDeleteAlert(true)}><RiDeleteBin4Line size='2rem'/></button>
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
                    Some para blog Some para blog Some para blog 
                    Some para blog Some para blog Some para blog 
                    Some para blog Some para blog Some para blog 
                    Some Some para blog Some para blog Some para blog 
                    Some para blog Some para blog Some para blog 
                    Some para blog Some para blog Some para blog 
                    Some
                </p>
            </article>
            <button className="readMore">More...</button>
            <hr className='leftHr'/>
            <Interact likes={props.likes} dislikes={props.dislikes}/>
            
            {deleteAlert?<Delete DeleteBlogFn = {setBlogDeleted} DeleteAlertFn = {setDeleteAlert}/>:null}

        </div>
    )
}

export default Post;