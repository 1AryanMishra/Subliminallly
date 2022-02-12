import { useContext } from 'react';

import SearchedBlog from './SearchedBlog/SearchedBlog';
import Edit from './Edit/Edit';
import {EditContext} from '../Editor';


function EditSection(){

    const { edit } = useContext(EditContext);

    return(
        <section id='EditSection'>
            {edit?<Edit/>:<SearchedBlog/>}
        </section>

    )
}

export default EditSection;