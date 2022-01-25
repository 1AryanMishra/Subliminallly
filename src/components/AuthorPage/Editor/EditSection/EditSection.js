import { useContext } from 'react';

import SearchedBlog from './SearchedBlog/SearchedBlog';
import Edit from './Edit/Edit';
import {EditContext} from '../Editor';


function EditSection(){

    const {edit, editableContent} = useContext(EditContext);

    return(
        <section id='EditSection'>
            {edit?<Edit content={editableContent}/>:<SearchedBlog/>}
        </section>

    )
}

export default EditSection;