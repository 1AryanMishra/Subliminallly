import { useState, createContext } from 'react';

import SearchedBlog from './SearchedBlog/SearchedBlog';
import Edit from './Edit/Edit';

export const EditContext = createContext();


function EditSection(){

    const [edit, setEdit] = useState(false);


    return(
        <section id='EditSection'>

            <EditContext.Provider value={{setEdit}}>
                {edit?<Edit/>:<SearchedBlog/>}
            </EditContext.Provider>
        </section>

    )
}

export default EditSection;