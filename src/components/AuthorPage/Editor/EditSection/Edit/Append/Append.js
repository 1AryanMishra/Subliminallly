import { useContext, useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import {EditContext} from '../Edit';
import uuid from 'react-uuid';

import MiniContentPane from './MiniContentPane';

function Append({ContentID}){

    const { append } = useContext(EditContext);

    const [isAddContent, setIsAddContent] = useState(append);
    const [ContentType, setContentType] = useState(false);

    return(
        <div className='BtnsGrp'>
            {isAddContent?<button className='AppendBtn' onClick={() => {
                setContentType(!ContentType);
                setIsAddContent(!isAddContent);
            }} key={uuid()}><VscAdd size='2rem'/></button>:null}
            {ContentType?<MiniContentPane position={ContentID} addContentFn={setContentType} key={uuid()}/>:null}
        </div>
    )
}

export default Append;