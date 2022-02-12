import { useContext } from 'react';


//Importing Blog Display Component
import BlogDisplay from '../../BlogDisplay/BlogDisplay';


//Importing Data Context
import { DataContext } from '../../App/App';

//CSS
import './css/MoreTopicsArea.css';




function MoreTopicsArea(){

    const { BlogsSnippets } = useContext(DataContext);


    if(BlogsSnippets.lenght === 0){
        return null;
    }
    return(
        <section className="MoreTopicsArea">
            
            <h3>More Topics:</h3>

            <div className="MidLine"></div>

            <div className="ShortLine"></div>

            <div className="TopicsArea">
                {
                    BlogsSnippets.map(blog => <BlogDisplay isMainTopic={false} key={blog._id} title={blog.title} content={blog.snippet} interactions={blog.interactions}/>)
                }
            </div>
            
            <div className="ShortLine"></div>

        </section>
    )
}

export default MoreTopicsArea;