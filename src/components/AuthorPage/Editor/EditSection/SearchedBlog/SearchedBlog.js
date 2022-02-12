import { useContext, useState } from 'react';
import { EditContext } from '../../Editor';

import { MdDeleteSweep } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

import Delete from '../../Delete/Delete';

function SearchedBlog(){

    const { editableContent, setEdit } = useContext(EditContext);
    
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [blogDeleted, setBlogDeleted] = useState(false);

    if(editableContent.length !== 0){

        return(
            <section className='SearchedBlogControl'>
    
                <section className={blogDeleted?'HideSearchedBlog':'SearchedBlog'}>
                    <h1 id='SearchedBlogTitle'>{editableContent.title}</h1>
                    <div id='SearchedBlogAction'>
                        <FiEdit size="2rem" className='SearchedBlogActionBtn' onClick={() => setEdit(true)}/>
                        <MdDeleteSweep size="2rem" className='SearchedBlogActionBtn' onClick={() => setDeleteAlert(!deleteAlert)}/>
                    </div>
                </section>
    
                {deleteAlert?<Delete DeleteBlogFn = {setBlogDeleted} title={editableContent.title} DeleteAlertFn={setDeleteAlert}/>:null}
    
            </section>
        )
    }
    else{
        return(
            <section className='SearchedBlogControl'>
                <h1>No Blog Found!</h1>
            </section>
        )
    }
}

export default SearchedBlog;