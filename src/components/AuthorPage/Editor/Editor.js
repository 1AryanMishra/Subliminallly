import { useState, useContext } from 'react';
import { AuthContext } from '../AuthorPage';

import CreateSection from '../CreateSection/CreateSection';
import UpdateSection from '../UpdateSection/UpdateSection';
import DeleteSection from '../DeleteSection/DeleteSection';


function Editor(){

    const { setSignedIn } = useContext(AuthContext);

    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);


    return(
        <main className="AuthorPage">

            <section className="EditorSection">

                <section id='SignOutSection'>
                    <button onClick={() => setSignedIn(false)}>SignOut</button>
                </section>
                
                <section className="ActivityPane">
                    <button className="Activity" id="Create" onClick={() => {
                        setIsCreateOpen(!isCreateOpen)
                    }}>
                        Create
                    </button>
                    <button className="Activity" id="Update" onClick={() => {
                        setIsUpdateOpen(!isUpdateOpen);
                    }}>
                        Update
                    </button>
                    <button className="Activity" id="Delete" onClick={() => {
                        setIsDeleteOpen(!isDeleteOpen);
                    }}>
                        Delete
                    </button>
                </section>

                <section className="Playground">

                    {isCreateOpen && <CreateSection/>}

                    {isUpdateOpen && <UpdateSection/>}

                    {isDeleteOpen && <DeleteSection/>}
    
                </section>

            
            </section>

        </main>
    )
}

export default Editor;