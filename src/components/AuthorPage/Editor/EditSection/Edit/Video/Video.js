import { useState, useContext } from "react";

import { EditSectionContext } from "../Edit";


//Icons
import { HiMenuAlt4 } from 'react-icons/hi';
import { FiEdit2 } from 'react-icons/fi';
import { MdDoneOutline } from 'react-icons/md';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { IoArrowUndoOutline } from 'react-icons/io5';


function Video({contents, setContentFn, ContentID}){
    
    const {content, setContent} = useContext(EditSectionContext);
    const [video, setVideo] = useState(content[ContentID].content.video || '');
    const [changeVideo, setChangeVideo] = useState(() => {
        if(video === ''){
            return true;
        }
        return false;
    });
    const [removeVideo, setRemoveVideo] = useState(false);
    const [contentControl, setContentControl] = useState(false);
    const [videoCredit, setVideoCredit] = useState(content[ContentID].content.videoCredit || '');
    const [isVideoCredit, setIsVideoCredit] = useState(() => {
        if(videoCredit === ''){
            return false;
        }
        return true;
    });


    function GetVideoId(link){
        var id = '';
        for(var i = link.length-1; i>0; i--){
            if(link[i] === '/' || link[i] === '='){
                break;
            }
            id += link[i];
        }
        
        var idReverse = '';
        const idLength = id.length;

        for(var j = idLength-1; j>=0; j--){
            idReverse += id[j];
        }

        return idReverse;
    }


    if(removeVideo && video === ''){
        setContent(content.filter(n => content.indexOf(n) !== ContentID));
        return null;
    }
    else if(removeVideo){
        return(
            <div className="VideoInputArea">
                <p className="RemoveContentLabel">Video Removed Temporarily.</p>
                <div className="ContentControlBtnsArea">
                    <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => setVideo('')}><RiDeleteBin4Line size="1rem" /></button>
                    <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                        setContentControl(!contentControl);
                        setRemoveVideo(!removeVideo);
                        }}><IoArrowUndoOutline size="1rem" /></button>
                    <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size="1rem" /></button>
                </div>
            </div>
        )
    }
    else{
        if(changeVideo){
            return(
                <div className="VideoInputArea">
                    <div className="ContentControlBtnsArea">
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setRemoveVideo(!removeVideo);
                            }}><IoMdRemoveCircleOutline size="1rem" /></button>
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setVideo(GetVideoId(video));
                            content[ContentID].content = {
                                video : video,
                                videoCredit : videoCredit
                            };
                            if(videoCredit !== ''){
                                setIsVideoCredit(true);
                            }
                            else{
                                setIsVideoCredit(false);
                            }
                            setContentControl(!contentControl);
                            setChangeVideo(!changeVideo);
                            }}><MdDoneOutline size="1rem" /></button>
                        <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size="1rem" /></button>
                    </div>
                    <input type="text" className="ContentInputArea" placeholder="Place link here..." value={video} onChange={e => setVideo(e.target.value)}></input>
                    <input type="text" placeholder="Wanna give Video-Credit..." value={videoCredit} className={video?'VideoCreditInput':'VideoCreditHide'} onChange={e => setVideoCredit(e.target.value)}></input>
                </div>
            )
        }
        else{
            return(
                <div className="VideoInputArea">
                    <div className="ContentControlBtnsArea">
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setRemoveVideo(!removeVideo);
                            }}><IoMdRemoveCircleOutline size="1rem" /></button>
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setChangeVideo(!changeVideo);
                        }}><FiEdit2 size="1rem" /></button>
                        <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size="1rem" /></button>
                    </div>
                    <iframe className="VideoFrame" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p className={isVideoCredit?"VideoCredit":"VideoCreditHide"}>Source : {content[ContentID].content.videoCredit}</p>
                </div>
            )
        }
    }
}

export default Video;