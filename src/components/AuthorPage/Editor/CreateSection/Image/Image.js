import { useContext, useState } from "react";

import { CreateContext } from "../CreateSection";


//Icons
import { HiMenuAlt4 } from 'react-icons/hi';
import { FiEdit2 } from 'react-icons/fi';
import { MdDoneOutline } from 'react-icons/md';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { IoArrowUndoOutline } from 'react-icons/io5';


function Image({ContentID}){
    const {content, setContent} = useContext(CreateContext);
    const [imageSrc, setImageSrc] = useState(content[ContentID].content.imageSrc || '')
    const [changeImageSrc, setChangeImageSrc] = useState(() => {
        if(imageSrc === ''){
            return true;
        }
        return false;
    });
    const [removeImageSrc, setRemoveImageSrc] = useState(false);
    const [contentControl, setContentControl] = useState(false);
    const [ImageCredit, setImageCredit] = useState(content[ContentID].content.imageCredit || '');
    const [isImageCredit, setIsImageCredit] = useState(() => {
        if(ImageCredit === ''){
            return false;
        }
        return true;
    });


    if(removeImageSrc && imageSrc === ''){
        setContent(content.filter(n => content.indexOf(n) !== ContentID));
        return null;
    }
    else if(removeImageSrc){
        return(
            <div className="ImageInputArea">
                <p className="RemoveContentLabel">Image Removed Temporarily.</p>
                <div className="ContentControlBtnsArea">
                    <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => setImageSrc('')}><RiDeleteBin4Line size="1rem" /></button>
                    <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                        setContentControl(!contentControl);
                        setRemoveImageSrc(!removeImageSrc);
                        }}><IoArrowUndoOutline size="1rem" /></button>
                    <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size="1rem" /></button>
                </div>
            </div>
        )
    }
    else{
        if(changeImageSrc){
            return(
                <div className="ImageInputArea">
                    <div className="ContentControlBtnsArea">
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setRemoveImageSrc(!removeImageSrc);
                            }}><IoMdRemoveCircleOutline size="1rem" /></button>
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            content[ContentID].content = {
                                imageSrc : imageSrc,
                                imageCredit : ImageCredit
                            };
                            if(ImageCredit !== ''){
                                setIsImageCredit(true);
                            }
                            else{
                                setIsImageCredit(false);
                            }
                            setContentControl(!contentControl);
                            setChangeImageSrc(!changeImageSrc);
                        }}><MdDoneOutline size="1rem" /></button>
                        <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size="1rem" /></button>
                    </div>
                    <input className="ContentInputArea" type="file" onChange={(e) => {
                        const reader = new FileReader();
                        reader.onload = () => {
                            if(reader.readyState === 2){
                                setImageSrc(reader.result);
                            }
                        }
                        reader.readAsDataURL(e.target.files[0]);
                    }}></input>
                    <input type="text" placeholder="Wanna give Pic-Credit..." value={ImageCredit} className={imageSrc?'ImageCreditInput':'ImageCreditHide'} onChange={e => setImageCredit(e.target.value)}></input>
                </div>
            )
        }
        else{
            return(
                <div className="ImageInputArea">
                    <div className="ContentControlBtnsArea">
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setRemoveImageSrc(!removeImageSrc);
                            }}><IoMdRemoveCircleOutline size="1rem" /></button>
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setChangeImageSrc(!changeImageSrc);
                            }}><FiEdit2 size="1rem" /></button>
                        <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size="1rem" /></button>
                    </div>
                    <img src={content[ContentID].content.imageSrc} className="ImgContent" alt="someImage"></img>
                    <p className={isImageCredit?"ImageCredit":"ImageCreditHide"}>P.S.:{content[ContentID].content.imageCredit}</p>
                </div>
            )
        }
    }
}

export default Image;