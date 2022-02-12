//CSS
import './css/ContentDisplay.css';

//Importing Components
import Image from '../Image/Image';
import Video from '../Video/Video';
import Text from '../Text/Text';


function ContentDisplay({content}){
    return (
        <div className='ContentDisplayArea'>
            {
                content.map(c => {
                    if(c.type === 'i'){
                        return (<Image key={c.key} image={c.content.image} credit = {c.content.imageCredit}/>);
                    }
                    else if(c.type === 'v'){
                        return (<Video key={c.key} video = {c.content.video} source = {c.content.videoCredit}/>);
                    }
                    else{
                        return (<Text key={c.key} content={c.content}/>);
                    }
                })
            }
        </div>
    )
}

export default ContentDisplay;