//CSS
import './css/App.css';
import { useState, useEffect, createContext } from 'react';

import axios from 'axios';

//Importing Components
import Header from '../Header/Header';
import About from '../About/About';
import Main from '../Main/Main';
import AuthorPage from '../AuthorPage/AuthorPage';
import Footer from '../Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Creating Data Context to be Shared among Components
export const DataContext = createContext();


function App(){

    const [BlogsSnippets, setBlogsSnippets] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const mainBlog = urlParams.get('blog');
    const [mainBlogData, setMainBlogData] = useState([]);

    useEffect(() => {


        //Fetching Data for Main Blog
        if(mainBlog){
            //Creating Title String for query
            var titleString = '?blog=';
            for(let i = 0; i<mainBlog.length; i++){
                if(mainBlog[i] === ' '){
                    titleString = titleString + '+';
                }
                else{
                    titleString = titleString + mainBlog[i];
                }
            }
            const url = `https://subliminally.herokuapp.com/blog/${titleString}`;
            //const url = `http://localhost:5000/blog/${mainBlog}`;
            axios.get(url)
            .then(res => {
                setMainBlogData(res.data)
            })
            .catch(err => console.error(err))
        }


        //Fetching Data for More Topics Area
        
        const url = 'https://subliminally.herokuapp.com';
        //const url = 'http://localhost:5000';
        axios.get(url).then(res => setBlogsSnippets(res.data)).catch(err => console.error(err));
    }, [mainBlog])

    return(
        <BrowserRouter>
            <div className="App">
                <Header/>
                
                <DataContext.Provider value={{BlogsSnippets, mainBlogData}}>
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
                </DataContext.Provider>
                
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;