import { useContext, useState } from 'react';
import { EditContextMain } from '../EditSection';

import { MdDeleteSweep } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { FcApproval } from 'react-icons/fc';
import { AiOutlineClose, AiFillAlert } from 'react-icons/ai';


function SearchedBlog(){

    const { setEdit } = useContext(EditContextMain);
    
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [deleteBlogConfirmation, setDeleteBlogConfirmation] = useState(false);
    const [blogDeleted, setBlogDeleted] = useState(false);

    return(
        <section className='SearchedBlogControl'>

            <section className={blogDeleted?'HideSearchedBlog':'SearchedBlog'}>
                <h1 id='SearchedBlogTitle'>Title of the Blog</h1>
                <div id='SearchedBlogAction'>
                    <FiEdit size="2rem" className='SearchedBlogActionBtn' onClick={() => setEdit(true)}/>
                    <MdDeleteSweep size="2rem" className='SearchedBlogActionBtn' onClick={() => setDeleteAlert(!deleteAlert)}/>
                </div>
            </section>

            <section className={deleteAlert?'Alert':'Hide'}>
                <AiOutlineClose size='2.3rem' className="closeAlert" onClick={() => setDeleteAlert(false)}/>
                <div className={deleteBlogConfirmation?'Hide':'warning'}>
                    <AiFillAlert id='alertIcon' size='6rem' color='red'/>
                    <p className='warningText'>Are you sure?<br/>Changes once made,<br/>CANNOT BE UNDONE!!!</p>
                    <div className='warningConfirmBtns'>
                        <button className='Yes' onClick={() => {
                            setDeleteBlogConfirmation(true);
                            setBlogDeleted(true);
                            }}>Yes!</button>
                        <button className='No' onClick={() => {
                            setDeleteBlogConfirmation(false);
                            setDeleteAlert(false);
                            }}>No!</button>
                    </div>
                </div>
                <div className={deleteBlogConfirmation?'workDone':'Hide'}>
                    <FcApproval size='10rem'/>
                    <p className='workDoneLabel'>Done!</p>
                </div>
            </section>

        </section>
    )
}

export default SearchedBlog;