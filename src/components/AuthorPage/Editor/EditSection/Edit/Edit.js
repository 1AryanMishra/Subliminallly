import { createContext, useState, useContext } from 'react';
import uuid from 'react-uuid';
import Text from "./Text/Text";
import Image from "./Image/Image";
import Video from "./Video/Video";
import Append from './Append/Append';

//Edit Context from Up File
import { EditContext } from '../../Editor';

//Icons
import { FiEdit2, FiYoutube } from 'react-icons/fi';
import { MdDoneOutline } from 'react-icons/md';
import { BsImage, BsCardText } from 'react-icons/bs';
import { VscAdd } from 'react-icons/vsc';
import { GrSend } from 'react-icons/gr';
import { TiCancelOutline } from 'react-icons/ti';

//CSS
import '../../css/CreateSection.css';

//Import CreateNewContext

export const EditSectionContext = createContext();


function Edit(props){

    const { setEdit } = useContext(EditContext);

    const [content, setContent] = useState(props.content || []);
    const [titleEdit, setTitleEdit] = useState(true);
    const [mainTitle, setMainTitle] = useState('');
    const [post, setPost] = useState(false);
    const [append, setAppend] = useState(false);

    function addContent(ContentType){
        let newContent = {
            key : uuid(),
            type : ContentType,
            content : ''
        };
        setContent([...content, newContent])
    }

    return(
        <section className='Playground'>
            
            <div className='UpdateCancelSection' onClick={() => setEdit(false)}>
                <p className='UpdateLabel'>Update</p>
                <TiCancelOutline size="2rem" className='UpdateToggler' onClick={() => setEdit(false)}/>
            </div>

            <div className="AddTitle">
                <button className="TitleControlBtn" onClick={() => setTitleEdit(!titleEdit)}>{titleEdit?<MdDoneOutline size="1.2rem" />:<FiEdit2 size="1.2rem" />}</button>
                <h1 className={titleEdit?'MainTitleHide':'MainTitle'}>{mainTitle}</h1>
                <input type="text" className={titleEdit?"TitleInput":"TitleInputHide"} placeholder="Title Here..." value={mainTitle} onChange={e => setMainTitle(e.target.value)}></input>
            </div>

            <div className="AddContent">
            
                <p className="ContentLabel">Pen Down</p>

                <EditSectionContext.Provider value={{ content, setContent, append, setAppend}}>
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
                </EditSectionContext.Provider>

                <div className="ContentTypeBtnsArea">
                    <button className="ContentBtn" onClick={() => addContent('p')}><BsCardText size="2rem" /></button>
                    <button className="ContentBtn" onClick={() => addContent('i')}><BsImage size="2rem" /></button>
                    <button className="ContentBtn" onClick={() => addContent('v')}><FiYoutube size="2rem" /></button>
                    <button className='ContentBtn' onClick={() => setAppend(!append)}><VscAdd/>Append</button>

                </div>
            </div>

            <div className="FinalisingBtns">
                <button className='FinalisingBtn' onClick={() => setPost(!post)}><GrSend size="2rem"/>Update</button>
            </div>

        </section>
    )
}


export default Edit;