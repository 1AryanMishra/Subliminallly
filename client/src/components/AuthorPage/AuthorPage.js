import { createContext, useState } from 'react';

//CSS
import './css/AuthorPage.css';

import Auth from './Auth/Auth';
import Editor from './Editor/Editor';

export const AuthContext = createContext();


function AuthorPage(){

    const [signedIn, setSignedIn] = useState(false);

    return(
        <AuthContext.Provider value={{setSignedIn}}>
            {signedIn?<Editor/>:<Auth/>}
        </AuthContext.Provider>
    )

}

export default AuthorPage;