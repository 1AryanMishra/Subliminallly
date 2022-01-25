import { useContext } from 'react';
import { CreateContext } from '../CreateSection';
import uuid from 'react-uuid';
 
//Icons
import { FiYoutube } from 'react-icons/fi';
import { BsImage, BsCardText } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

function MiniContentPane({position, addContentFn}){

    const {content, setContent, setAppend} = useContext(CreateContext);

    function appendContent(type){
        let NewContent = {
            key : uuid(),
            type : type,
            content : '',
        }
        setContent([...content.slice(0, position), NewContent, ...content.slice(position)]);
        addContentFn(false);
        setAppend(false);
        return null;
    }
    return(
        <div className="MiniContentPane">
            <BsCardText size='2rem' className="MiniContentPaneElements" onClick={() => appendContent('p')}/>
            <BsImage size='2rem' className="MiniContentPaneElements" onClick={() => appendContent('i')}/>
            <FiYoutube size='2rem' className="MiniContentPaneElements" onClick={() => appendContent('v')}/>
            <AiOutlineClose size='2rem' className="MiniContentPaneElement" onClick={() => addContentFn(false)}/>
        </div>
    )
}

export default MiniContentPane;