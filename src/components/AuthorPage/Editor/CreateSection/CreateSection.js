import { createContext, useState, useContext } from 'react';


import axios from 'axios';
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
import { FcApproval, FcLink } from 'react-icons/fc';
import { MdError } from 'react-icons/md';
import { GiEmptyWoodBucketHandle } from 'react-icons/gi';

//CSS
import '../css/CreateSection.css';

//Import CreateNewContext
import { CreateNewContext } from '../Editor';

export const CreateContext = createContext();


function CreateSection(){

    const { createNew } = useContext(CreateNewContext);

    const [content, setContent] = useState([]);
    const [titleEdit, setTitleEdit] = useState(true);
    const [mainTitle, setMainTitle] = useState('');
    const [final, setFinal] = useState(false);
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


    //Posting to the Server
    async function PostToServer(){
        if(content.length === 0){
            setEmptyBlog(true);
            return;
        }
        setRetry(false);
        setPost(true);
        setEmptyBlog(false);

        

        try{
            const res = await axios.post('https://subliminally.herokuapp.com/AuthorPage/newBlog', {
                title : mainTitle,
                content : content
            }, {
                onUploadProgress : progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
            }});

            if (res.data.posted) {
                setBlogLink(res.data.blogLink);
                setPosted(true);
            }
        }
        catch(err){
            console.log(err);
            setPost(false);
            setRetry(true);    
        }
    }




    return(
        <section className={createNew ? 'Playground':'Playground hide'}>

            <div className='BlogContent'>

                {posted ? <div className="PostedBanner">
                    <FcApproval id='PostedIcon' size="7rem" color='green'/>
                    <h1>Posted</h1>
                </div> : null}

                <div className="AddTitle">
                    <button className="TitleControlBtn" onClick={() => setTitleEdit(!titleEdit)}>{titleEdit?<MdDoneOutline size="1.2rem" />:<FiEdit2 size="1.2rem" />}</button>
                    <h1 className={titleEdit?'MainTitleHide':'MainTitle'}>{mainTitle}</h1>
                    <input type="text" className={titleEdit?"TitleInput":"TitleInputHide"} placeholder="Title Here..." value={mainTitle} onChange={e => setMainTitle(e.target.value)}></input>
                </div>

                <div className="AddContent">
                
                    <p className="ContentLabel">Pen Down</p>

                    <CreateContext.Provider value={{ content, setContent, append, setAppend }}>
                        <div className="ContentArea">
                            {
                                content.map((c, index) => {
                                    if(c){
                                        if(c.type === "p"){
                                            return(
                                                <div className="Content-Append-Area" key={uuid()}>
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
                    </CreateContext.Provider>

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
                            setFinal(false);
                            setMainTitle('');
                            setTitleEdit(true);
                            setPost(false);
                            setPosted(false);
                            setUploadPercentage(0);
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
                <button className={reset?"reset FinalisingBtn":"FinalisingBtn"} onClick={() => setReset(!reset)}><VscClearAll id='ResetBtnIcon' size="2rem"/>Reset</button>
                <button className={final?"Final FinalisingBtn":"FinalisingBtn"} onClick={() => {
                    setFinal(!final);
                    setPost(false);
                    setPosted(false);
                    setRetry(false);
                    }}><IoCheckmarkDoneSharp id='DoneBtnIcon' size="2rem"/>Done</button>
                <button className={final?`FinalisingBtn ${post?'Post':''}`:"FinalisingBtnHide"} onClick={() => PostToServer()}><GrSend id='SendBtnIcon' size="2rem"/>{retry ? "Retry" : post?(posted?"Posted":"Posting"):"Post"}</button>
            </div>

        </section>
    )
}


export default CreateSection;