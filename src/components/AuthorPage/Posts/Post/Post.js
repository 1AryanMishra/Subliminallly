import { useState, useContext } from 'react';

import axios from 'axios';
import moment from 'moment';

//Importing Blog Display Component
import BlogDisplay from '../../../BlogDisplay/BlogDisplay';

//EditContext
import { EditContext } from '../../Editor/Editor';

//CSS
import { MdOutlineMoreVert } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin4Line } from 'react-icons/ri';

//Importing Delete Component
import Delete from '../.././Editor/Delete/Delete';


function Post({snip}){

    const [moreAction, setMoreAction] = useState(false);
    const{setEdit, setEditableContent } = useContext(EditContext);
    const [deleteAlert, setDeleteAlert] = useState(false);
    const[blogDeleted, setBlogDeleted] = useState(false);


    return(
        <div className={blogDeleted ? 'Hide':'Post'}>
            <div className='blogMoreAction'>
                <MdOutlineMoreVert className='moreActionIcon' size='1.8rem' onClick={() => setMoreAction(!moreAction)}/>
                <div className={moreAction ? 'showMoreAction':'showMoreAction hideMoreAction'}>
                    <p className='PostedDate'><b>Posted </b>{moment(snip.createdAt).fromNow()}</p>
                    <button className='moreActionItem' onClick={() => {
                        const url = `https://subliminally.herokuapp.com/blog/${snip.title}`;
                        //const url = `http://localhost:5000/blog/${snip.title}`;
                        axios.get(url)
                        .then(res => {
                            setEditableContent(res.data[0]);
                            setEdit(true);
                        })
                        .catch(err => console.log(err));
                    }}><FiEdit2 size='2rem'/></button>
                    <button className='moreActionItem' onClick={() => setDeleteAlert(true)}><RiDeleteBin4Line size='2rem'/></button>
                </div>
            </div>
            <hr className='rightHr'/>
            <BlogDisplay isMainTopic = {false} title={snip.title} content={snip.snippet} interactions={snip.interactions}/>
            <hr className='leftHr'/>
            
            {deleteAlert?<Delete DeleteBlogFn = {setBlogDeleted} title={snip.title} DeleteAlertFn = {setDeleteAlert}/>:null}

        </div>
    )
}

export default Post;