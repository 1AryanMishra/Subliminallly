import { useState, useContext, createContext, useEffect } from 'react';
import { AuthContext } from '../AuthorPage';

//Icon
import { FiMinimize2, FiEdit } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

import CreateSection from './CreateSection/CreateSection';
import EditSection from './EditSection/EditSection';
import Posts from '../Posts/Posts';

export const CreateNewContext = createContext();
export const EditContext = createContext();


function Editor(){

    const { setSignedIn } = useContext(AuthContext);
    const [createNew, setCreateNew] = useState(false);
    const [searched, setSearched] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editableContent, setEditableContent] = useState([]);


    useEffect(() => window.scrollTo(0, 0), []);


    return(
        <main className="AuthorPage">

                <section className='justPlaceholder'>
                    <div className='justPlaceholderNavArea'>
                        <p>Link 1</p>
                        <p>Link 2</p>
                        <p>Link 3</p>
                        <p>Link 4</p>
                    </div>
                </section>

            <EditContext.Provider value={{edit, setEdit, editableContent, setEditableContent }}>

                <section className="EditorSection">

                    <section id='SearchSection'>
                        <div id='SearchBox'>
                            <input type="text" id='SearchText' placeholder='Search with keywords'/>
                            <FaSearch id='Search' size="2rem" onClick={() => setSearched(!searched)}/>
                        </div>
                        <button onClick={() => setSignedIn(false)} id='SignOut'>SignOut</button>
                    </section>

                    {searched ? <EditSection/>:null}
                    
                    <section id='CreateNewSection'>
                        <div id='CreateBtnArea' onClick={() => setCreateNew(!createNew)}>
                            <p id='CreateLabel'>Create</p>
                            {createNew ? <FiMinimize2 className='CreateToggler' onClick={() => setCreateNew(!createNew)}  size="2rem"/> : <FiEdit className='CreateToggler' onClick={() => setCreateNew(!createNew)} size="2rem"/>}
                        </div>
                        <CreateNewContext.Provider value={{createNew}}>
                            <CreateSection/>
                        </CreateNewContext.Provider>
                    </section>
        
                    <Posts/>
                
                </section>

            </EditContext.Provider>

        </main>
    )
}

export default Editor;