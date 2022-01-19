//CSS
import './css/App.css';


import Header from '../Header/Header';
import About from '../About/About';
import Main from '../Main/Main';
import AuthorPage from '../AuthorPage/AuthorPage';
import Footer from '../Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App(){
    return(
        <BrowserRouter>
            <div className="App">
                <Header/>
                
                <Switch>
                    <Route path="/" exact>
                        <Main/>
                    </Route>
                    <Route path="/AuthorPage">
                        <AuthorPage/>
                    </Route>
                    <Route path="/About">
                        <About/>
                    </Route>
                </Switch>
                
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;