import { useContext } from 'react';
import { AuthContext } from '../AuthorPage';

function Auth(){

    const { setSignedIn } = useContext(AuthContext);

    function SignInFn(){
        setTimeout(() => {
            console.log("Fetching Firebase Google SignIn");
            setSignedIn(true);
        }, 2000);
    }

    return(
        <main className="AuthorPage">
            <div className="NotSignedIn">
                <h1 className="SignInReminder">
                    Please Sign In as Admin to perform any kind of operation.
                </h1>

                <button className="SignInBtn" onClick={SignInFn}>
                    Sign In
                </button>

                <h3>
                    If you want to write on this site, Please contanct the Admin.
                    Contact details are available in the About Us page of this site.
                </h3>
            </div>
        </main>
    )
}

export default Auth;