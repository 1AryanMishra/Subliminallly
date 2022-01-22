import { useState, createContext } from 'react';

import SearchedBlog from './SearchedBlog/SearchedBlog';
import Edit from './Edit/Edit';

export const EditContextMain = createContext();


function EditSection(){

    const [edit, setEdit] = useState(false);


    return(
        <section id='EditSection'>

            <EditContextMain.Provider value={{ setEdit }}>
                {edit?<Edit/>:<SearchedBlog/>}
            </EditContextMain.Provider>
        </section>

    )
}

export default EditSection;