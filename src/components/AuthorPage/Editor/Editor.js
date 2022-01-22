import { useState, useContext, createContext } from 'react';
import { AuthContext } from '../AuthorPage';

//Icon
import { FiMinimize2, FiEdit } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

import CreateSection from './CreateSection/CreateSection';
import EditSection from './EditSection/EditSection';
import Posts from '../Posts/Posts';

export const CreateNewContext = createContext();


function Editor(){

    const { setSignedIn } = useContext(AuthContext);
    const [createNew, setCreateNew] = useState(false);
    const [searched, setSearched] = useState(false);


    return(
        <main className="AuthorPage">

            <section className="EditorSection">

                <section id='SearchSection'>
                    <div id='SearchBox'>
                        <input type="text" id='SearchText' placeholder='Search with keywords'/>
                        <FaSearch id='Search' size="1.8rem" onClick={() => setSearched(!searched)}/>
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

        </main>
    )
}

export default Editor;