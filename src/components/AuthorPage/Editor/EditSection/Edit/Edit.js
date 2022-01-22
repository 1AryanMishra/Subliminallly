import { createContext, useState } from 'react';
import uuid from 'react-uuid';
import Text from "./Text/Text";
import Image from "./Image/Image";
import Video from "./Video/Video";
import Append from './Append/Append';

//Icons
import { FiEdit2, FiYoutube } from 'react-icons/fi';
import { MdDoneOutline } from 'react-icons/md';
import { BsImage, BsCardText } from 'react-icons/bs';
import { VscAdd } from 'react-icons/vsc';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { VscClearAll } from 'react-icons/vsc';
import { GrSend } from 'react-icons/gr';

//CSS
import '../../css/CreateSection.css';

//Import CreateNewContext

export const EditContext = createContext();


function Edit(){

    const [cancelEdit, setCancelEdit] = useState(false);
    const [content, setContent] = useState([]);
    const [titleEdit, setTitleEdit] = useState(true);
    const [mainTitle, setMainTitle] = useState('');
    const [final, setFinal] = useState(false);
    const [post, setPost] = useState(false);
    const [append, setAppend] = useState(false);
    const [reset, setReset] = useState(false);

    function addContent(ContentType){
        let newContent = {
            key : uuid(),
            type : ContentType,
            content : ''
        };
        setContent([...content, newContent])
    }

    return(
        <section className={ cancelEdit ? 'hide Playground':'show Playground'}>
            
            <div className='UpdateCancelSection' onClick={() => setCancelEdit(!cancelEdit)}>
                <p className='UpdateLabel'>Update</p>
                <button className='CancelUpdate'>X</button>
            </div>

            <div className="AddTitle">
                <button className="TitleControlBtn" onClick={() => setTitleEdit(!titleEdit)}>{titleEdit?<MdDoneOutline size="1.2rem" />:<FiEdit2 size="1.2rem" />}</button>
                <h1 className={titleEdit?'MainTitleHide':'MainTitle'}>{mainTitle}</h1>
                <input type="text" className={titleEdit?"TitleInput":"TitleInputHide"} placeholder="Title Here..." value={mainTitle} onChange={e => setMainTitle(e.target.value)}></input>
            </div>

            <div className="AddContent">
            
                <p className="ContentLabel">Pen Down</p>

                <EditContext.Provider value={{ content, setContent, append, setAppend}}>
                    <div className="ContentArea">
                        {
                            content.map((c, index) => {
                                if(c){
                                    if(c.type === "p"){
                                        return(
                                            <div className="Content-Append-Area">
                                                <Append ContentID={index} key={uuid()}/>
                                                <Text ContentID={index} key={c.key}/>
                                            </div>
                                        )
                                    }
                                    else if(c.type === "i"){
                                        return(
                                            <div className="Content-Append-Area">
                                                <Append ContentID={index} key={uuid()}/>
                                                <Image ContentID={index} key={c.key}/>
                                            </div>
                                        )
                                    }
                                    else if(c.type === 'v'){
                                        return(
                                            <div className="Content-Append-Area">
                                                <Append ContentID={index} key={uuid()}/>
                                                <Video ContentID={index} key={c.key}/>
                                            </div>
                                        )
                                    }
                                    else if(c.type === 'n'){
                                        return(
                                            <div className="Content-Append-Area" key={uuid()}>
                                                <p>Select Content-Type from Content-Selector Section.</p>
                                            </div>
                                        )
                                    }
                                }
                                return(
                                    <p key={uuid()}>NoContent</p>
                                )
                            })
                        }
                    </div>
                </EditContext.Provider>

                <div className="ContentTypeBtnsArea">
                    <button className="ContentBtn" onClick={() => addContent('p')}><BsCardText size="2rem" /></button>
                    <button className="ContentBtn" onClick={() => addContent('i')}><BsImage size="2rem" /></button>
                    <button className="ContentBtn" onClick={() => addContent('v')}><FiYoutube size="2rem" /></button>
                    <button className='ContentBtn' onClick={() => setAppend(!append)}><VscAdd/>Append</button>

                </div>
            </div>

            <div className="FinalisingBtns">
                <button className={reset?"reset FinalisingBtn":"FinalisingBtn"} onClick={() => setReset(!reset)}><VscClearAll size="2rem"/>Reset</button>
                <button className={final?"Final FinalisingBtn":"FinalisingBtn"} onClick={() => setFinal(!final)}><IoCheckmarkDoneSharp size="2rem"/>Done</button>
                <button className={final?`FinalisingBtn ${post?'Post':''}`:"FinalisingBtnHide"} onClick={() => setPost(!post)}><GrSend size="2rem"/>Post</button>
            </div>

            {reset?<div className='ResetArea'>
                <h1>Are you sure you wan't to Clear All? Once Cleared, CANNOT BE UNDONE!!!</h1>
                <div id="ResetConfirmationBtnsArea">
                    <button id='ResetY' onClick={() => {
                        setContent([]);
                        setReset(!reset);
                    }}>Yes</button>
                    <button id='ResetN' onClick={() => setReset(!reset)}>No</button>
                </div>
            </div>:null}

        </section>
    )
}


export default Edit;