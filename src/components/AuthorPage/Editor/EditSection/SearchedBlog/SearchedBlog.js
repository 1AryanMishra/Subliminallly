import { useContext, useState } from 'react';
import uuid from 'react-uuid';
import { EditContext } from '../../Editor';

import { MdDeleteSweep } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

import Delete from '../../Delete/Delete';

function SearchedBlog(){

    const { setEdit, setEditableContent } = useContext(EditContext);
    
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [blogDeleted, setBlogDeleted] = useState(false);

    return(
        <section className='SearchedBlogControl'>

            <section className={blogDeleted?'HideSearchedBlog':'SearchedBlog'}>
                <h1 id='SearchedBlogTitle'>Title of the Blog</h1>
                <div id='SearchedBlogAction'>
                    <FiEdit size="2rem" className='SearchedBlogActionBtn' onClick={() => {
                        setEdit(true);
                        setEditableContent([{
                            key : uuid(),
                            type : 'p',
                            content : 'Jeene k lea, Socha hi nahiii, dard samhalne honge.'
                        },
                        {
                            key : uuid(),
                            type : 'p',
                            content : 'Muskurae to, muskurane k, karz utarane honge.'
                        }
                    ])
                        }}/>
                    <MdDeleteSweep size="2rem" className='SearchedBlogActionBtn' onClick={() => setDeleteAlert(!deleteAlert)}/>
                </div>
            </section>

            {deleteAlert?<Delete DeleteBlogFn = {setBlogDeleted} DeleteAlertFn={setDeleteAlert}/>:null}

        </section>
    )
}

export default SearchedBlog;