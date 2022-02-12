//Importing CSS
import './css/BlogDisplay.css';

//Importing Content Display Component
import ContentDisplay from '../ContentDisplay/ContentDisplay';

//Importing Interaction Component
import Interact from './Interact/Interact';


function BlogDisplay({title, content, interactions, isMainTopic}){

    //Creating Title String for query
    var titleString = '?blog=';
    for(let i = 0; i<title.length; i++){
        if(title[i] === ' '){
            titleString = titleString + '+';
        }
        else{
            titleString = titleString + title[i];
        }
    }

    return(
        <article className='BlogContent'>
            <h3 className='BlogTitle'>{title}</h3>
            <ContentDisplay content={content}/>
            {
                isMainTopic ? null : <button className='ReadMoreBtn' onClick={() => {
                    if ('URLSearchParams' in window) {
                        var searchParams = new URLSearchParams(window.location.search);
                        searchParams.set("blog", `${title}`);
                        window.location.search = searchParams.toString();
                    }
                }}>Continue...</button>
            }
            <Interact likes={interactions.likes} dislikes={interactions.dislikes}/>
        </article>
    )
}


export default BlogDisplay;