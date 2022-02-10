import { useContext, useState } from "react";
import FileBase from 'react-file-base64';
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
    const [image, setImage] = useState(content[ContentID].content.image || '');
    const [changeImage, setChangeImage] = useState(() => {
        if(image === ''){
            return true;
        }
        return false;
    });
    const [removeImage, setRemoveImage] = useState(false);
    const [contentControl, setContentControl] = useState(false);
    const [ImageCredit, setImageCredit] = useState(content[ContentID].content.imageCredit || '');
    const [isImageCredit, setIsImageCredit] = useState(() => {
        if(ImageCredit === ''){
            return false;
        }
        return true;
    });


    if(removeImage && image === ''){
        setContent(content.filter(n => content.indexOf(n) !== ContentID));
        return null;
    }
    else if(removeImage){
        return(
            <div className="ImageInputArea">
                <p className="RemoveContentLabel">Image Removed Temporarily.</p>
                <div className="ContentControlBtnsArea">
                    <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => setImage('')}><RiDeleteBin4Line size="1rem" /></button>
                    <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                        setContentControl(!contentControl);
                        setRemoveImage(!removeImage);
                        }}><IoArrowUndoOutline size="1rem" /></button>
                    <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size="1rem" /></button>
                </div>
            </div>
        )
    }
    else{
        if(changeImage){
            return(
                <div className="ImageInputArea">
                    <div className="ContentControlBtnsArea">
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setRemoveImage(!removeImage);
                            }}><IoMdRemoveCircleOutline size="1rem" /></button>
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            content[ContentID].content = {
                                image : image,
                                imageCredit : ImageCredit,
                                position : ContentID
                            };
                            if(ImageCredit !== ''){
                                setIsImageCredit(true);
                            }
                            else{
                                setIsImageCredit(false);
                            }
                            setContentControl(!contentControl);
                            setChangeImage(!changeImage);
                        }}><MdDoneOutline size="1rem" /></button>
                        <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size="1rem" /></button>
                    </div>
                    <FileBase
                        className="ContentInputArea"
                        type='file'
                        multiple = {false}
                        onDone = {({base64}) => {
                            setImage(base64)
                        }}
                    />
                    <input type="text" placeholder="Wanna give Pic-Credit..." value={ImageCredit} className={image?'ImageCreditInput':'ImageCreditHide'} onChange={e => setImageCredit(e.target.value)}></input>
                </div>
            )
        }
        else{
            return(
                <div className="ImageInputArea">
                    <div className="ContentControlBtnsArea">
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setRemoveImage(!removeImage);
                            }}><IoMdRemoveCircleOutline size="1rem" /></button>
                        <button className={contentControl?"ContentControlBtn":"ContentControlBtnHide"} onClick={() => {
                            setContentControl(!contentControl);
                            setChangeImage(!changeImage);
                            }}><FiEdit2 size="1rem" /></button>
                        <button className="ContentControlOpen" onClick={() => setContentControl(!contentControl)}><HiMenuAlt4 size="1rem" /></button>
                    </div>
                    <img src={content[ContentID].content.image} className="ImgContent" alt="someImage"></img>
                    <p className={isImageCredit?"ImageCredit":"ImageCreditHide"}>P.S.:{content[ContentID].content.imageCredit}</p>
                </div>
            )
        }
    }
}

export default Image;