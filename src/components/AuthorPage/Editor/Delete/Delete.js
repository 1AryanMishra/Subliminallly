import axios from 'axios';
import { useState } from 'react';


//CSS
import './css/Delete.css';

//Icons
import { AiFillAlert, AiOutlineClose } from 'react-icons/ai';
import { FcApproval } from 'react-icons/fc';



function Delete({DeleteBlogFn, title, DeleteAlertFn}){

    const [deleteBlogConfirmation, setDeleteBlogConfirmation] = useState(false);



    return(
        <section className='Alert'>
            <section className='InsideAlert'>
                <AiOutlineClose size='2rem' className="closeAlert" onClick={() => DeleteAlertFn(false)}/>
                <div className={deleteBlogConfirmation?'Hide':'warning'}>
                    <AiFillAlert id='alertIcon' size='6rem' color='red'/>
                    <p className='warningText'>Are you sure?<br/>Changes once made,<br/>CANNOT BE UNDONE!!!</p>
                    <div className='warningConfirmBtns'>
                        <button className='Yes' onClick={() => {
                            const url = `https://subliminally.herokuapp.com/AuthorPage/delete/${title}`;
                            //const url = `http://localhost:5000/AuthorPage/delete/${title}`;
                            axios.delete(url)
                            .then(res => {
                                setDeleteBlogConfirmation(true);
                                DeleteBlogFn(true);
                            })
                            .catch(err => console.log(err))
                            }}>Yes!</button>
                        <button className='No' onClick={() => {
                            setDeleteBlogConfirmation(false);
                            DeleteAlertFn(false);
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

export default Delete;