import { useContext } from 'react';

//Importing Main Blog Context
import { DataContext } from '../../App/App';


//CSS
import './css/TopicArea.css';

//Importing Blod Display Component
import BlogDisplay from '../../BlogDisplay/BlogDisplay';


function TopicArea(){

    const { mainBlogData } = useContext(DataContext);

    if(mainBlogData.length !== 0){
        return(
            <article className="TopicArea">
                
                {mainBlogData ? <BlogDisplay isMainTopic = {true} title={mainBlogData[0].title} content={mainBlogData[0].content} interactions={mainBlogData[0].interactions}/> : null}
    
            </article>
        )
    }
    return (
        <article className="TopicArea">
            <h1 className='NoBlogs'>
                Please select from one of the Blogs to Read!
            </h1>
        </article>
    );
}

export default TopicArea;