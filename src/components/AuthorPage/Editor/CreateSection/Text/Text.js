import { useContext, useState } from "react";

import { CreateContext } from "../CreateSection";

//Icons
import { HiMenuAlt4 } from 'react-icons/hi';
import { FiEdit2 } from 'react-icons/fi';
import { MdDoneOutline } from 'react-icons/md';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { IoArrowUndoOutline } from 'react-icons/io5';


function Text({ContentID}){
    const {content, setContent} = useContext(CreateContext);
    const [para, setPara] = useState(content[ContentID].content || '');
    const [changePara, setChangePara] = useState(() => {
        if(para === ''){
            return true;
        }
        return false;
    });
    const [removePara, setRemovePara] = useState(false);
    const [contentControl, setContentControl] = useState(false);


    
    if(removePara && para === ''){
        setContent(content.filter(n => content.indexOf(n) !== ContentID));
        return null;
    }
    else if(removePara){
        return(
            <div className="TextInputArea" key={ContentID}>
                <p className="RemoveContentLabel">Para Removed Temporarily.</p>
                <div className="ContentControlBtnsArea">
                    <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => setPara('')}><RiDeleteBin4Line size='1rem' /></button>
                    <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                        setContentControl(!contentControl);
                        setRemovePara(!removePara);
                    }}><IoArrowUndoOutline size='1rem' /></button>
                    <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size='1rem' /></button>
                </div>
            </div>
        )
    }
    else{
        if(changePara){
            return(
                <div className="TextInputArea" key={ContentID}>
                    <div className="ContentControlBtnsArea">
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setRemovePara(!removePara);
                            }}><IoMdRemoveCircleOutline size='1rem' /></button>
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            content[ContentID].content = para;
                            setContentControl(!contentControl);
                            setChangePara(!changePara);
                            }}><MdDoneOutline size='1rem' /></button>
                        <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size='1rem' /></button>
                    </div>
                    <textarea className="ContentInputArea" placeholder="Write here..." value={para} onChange={e => setPara(e.target.value)}></textarea>
                </div>
            )
        }
        else{
            return(
                <div className="TextInputArea" key={ContentID}>
                    <div className="ContentControlBtnsArea">
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setRemovePara(!removePara);
                            }}><IoMdRemoveCircleOutline size='1rem' /></button>
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setChangePara(!changePara);
                        }}><FiEdit2 size='1rem' /></button>
                        <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size='1rem' /></button>
                    </div>
                    <p className="ParaContent">{content[ContentID].content}</p>
                </div>
            )
        }
    }
}

export default Text;