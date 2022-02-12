import { createContext, useState, useContext } from 'react';
import axios from 'axios';

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
import { FcApproval, FcLink } from 'react-icons/fc';
import { MdError } from 'react-icons/md';
import { GiEmptyWoodBucketHandle } from 'react-icons/gi';
import { TiCancelOutline } from 'react-icons/ti';

//CSS
import '../../css/CreateSection.css';

//Import CreateNewContext

export const EditSectionContext = createContext();


function Edit(){

    const { setEdit, editableContent } = useContext(EditContext);

    const [content, setContent] = useState(editableContent.content);
    const [titleEdit, setTitleEdit] = useState(true);
    const [mainTitle, setMainTitle] = useState(editableContent.title);
    const [post, setPost] = useState(false);
    const [posted, setPosted] = useState(false);
    const [append, setAppend] = useState(false);
    const [reset, setReset] = useState(false);
    const [retry, setRetry] = useState(false);
    const [emptyBlog, setEmptyBlog] = useState(false);
    const [blogLink, setBlogLink] = useState('');
    const [linkCopied, setLinkCopied] = useState(false);
    const [uploadPercentage, setUploadPercentage] = useState(0);

    function addContent(ContentType){
        let newContent = {
            key : uuid(),
            type : ContentType,
            content : ''
        };
        setContent([...content, newContent])
    }



    async function PostToServer(){
        if(content.length === 0){
            setEmptyBlog(true);
            return;
        }
        setRetry(false);
        setPost(true);
        setEmptyBlog(false);

        

        try{
            const url = 'https://subliminally.herokuapp.com/AuthorPage/updateBlog';
            //const url = 'http://localhost:5000/AuthorPage/updateBlog';
            const res = await axios.post(url, {
                title : editableContent.title,
                newTitle : mainTitle,
                content : content
            }, {
                onUploadProgress : progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
            }});

            if (res.data.updated) {
                setBlogLink(res.data.blogLink);
                setPosted(true);
            }
            else{
                setBlogLink('');
                setPost(false);
                setRetry(true);
            }
        }
        catch(err){
            console.log(err);
            setPost(false);
            setRetry(true);    
        }
    }





    return(
        <section className='Playground'>
            
            <div className='UpdateCancelSection' onClick={() => setEdit(false)}>
                <p className='UpdateLabel'>Update</p>
                <TiCancelOutline size="2rem" className='UpdateToggler' onClick={() => setEdit(false)}/>
            </div>

            <div className='BlogContent'>

                {posted ? <div className="PostedBanner">
                    <FcApproval id='PostedIcon' size="7rem" color='green'/>
                    <h1>Updated!!</h1>
                </div> : null}


                <div className="AddTitle">
                    <button className="TitleControlBtn" onClick={() => setTitleEdit(!titleEdit)}>{titleEdit?<MdDoneOutline size="1.2rem" />:<FiEdit2 size="1.2rem" />}</button>
                    <h1 className={titleEdit?'MainTitleHide':'MainTitle'}>{mainTitle}</h1>
                    <input type="text" className={titleEdit?"TitleInput":"TitleInputHide"} placeholder="Title Here..." value={mainTitle} onChange={e => setMainTitle(e.target.value)} />
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
                                                <div key={uuid()} className="Content-Append-Area">
                                                    <Append ContentID={index} key={uuid()}/>
                                                    <Text ContentID={index} key={c.key}/>
                                                </div>
                                            )
                                        }
                                        else if(c.type === "i"){
                                            return(
                                                <div className="Content-Append-Area" key={uuid()}>
                                                    <Append ContentID={index} key={uuid()}/>
                                                    <Image ContentID={index} key={c.key}/>
                                                </div>
                                            )
                                        }
                                        else if(c.type === 'v'){
                                            return(
                                                <div className="Content-Append-Area" key={uuid()}>
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
                    
            </div>



            <section className='ContentControlMsgArea'>
                {retry ? <div id='RetryMsgArea' className='MsgArea'>
                    <MdError size='5rem' className='MsgIcon'/>
                    <p className='msg'>Some error Occurred!, Please Retry.</p>
                </div> : null}

                {emptyBlog?<div className="MsgArea" id='EmptyBlogArea'>
                    <GiEmptyWoodBucketHandle size="5rem" id='EmptyBlogIcon' className='MsgIcon'/>
                    <p className='msg'>Can't Post Empty Blog. Please Write Something!</p>
                </div> : null}

                {reset?<div className='ResetArea'>
                    <h1>Are you sure you wan't to Clear All? Once Cleared, CANNOT BE UNDONE!!!</h1>
                    <div id="ResetConfirmationBtnsArea">
                        <button id='ResetY' onClick={() => {
                            setContent([]);
                            setReset(!reset);
                            setRetry(false);
                            setEmptyBlog(false);
                            setMainTitle('');
                            setTitleEdit(true);
                        }}>Yes</button>
                        <button id='ResetN' onClick={() => setReset(!reset)}>No</button>
                    </div>
                </div>:null}
                
                {posted?<div className='MsgArea' id='ShareBlog'>
                    <p className='msg' id='ShareBlogMsg'>
                        Share your blog.
                    </p>
                    <button className='MsgIcon' id='ShareBlogButton' onClick={() => {
                        navigator.clipboard.writeText(blogLink);
                        setLinkCopied(true);
                    }}><FcLink size='3rem'/>{linkCopied?"Copied":"Link"}</button>
                </div> : null}

                {post ? <div className='MsgArea' id='UploadedArea'>
                    <p className='msg' id='UploadPercentage'>Uploaded {posted ? 100 : uploadPercentage}%</p>
                </div> : null}

            </section>

            <div className="FinalisingBtns">
                <button className='FinalisingBtn' onClick={() => PostToServer()}><GrSend size="2rem" id='UpdateBtnIcon'/>{retry ? "Retry" : post?(posted?"Updated!":"Updating..."):"Update"}</button>
            </div>

        </section>
    )
}


export default Edit;