import { useContext } from 'react';
import { EditContext } from '../EditSection';

import { MdDeleteSweep } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';


function SearchedBlog(){

    const { setEdit } = useContext(EditContext);

    return(
        <section id='SearchedBlog'>
            <h1 id='SearchedBlogTitle'>Title of the Blog</h1>
            <div id='SearchedBlogAction'>
                <FiEdit size="2rem" className='SearchedBlogActionBtn' onClick={() => setEdit(true)}/>
                <MdDeleteSweep size="2rem" className='SearchedBlogActionBtn'/>
            </div>
        </section>
    )
}

export default SearchedBlog;