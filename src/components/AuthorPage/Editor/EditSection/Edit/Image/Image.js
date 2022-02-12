import { useContext, useState } from "react";
import FileBase from 'react-file-base64';
import { EditSectionContext } from '../Edit';

//Importing Image Display Component
import ImageComponent from '../../../../../Image/Image';




//Icons
import { HiMenuAlt4 } from 'react-icons/hi';
import { FiEdit2 } from 'react-icons/fi';
import { MdDoneOutline } from 'react-icons/md';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { IoArrowUndoOutline } from 'react-icons/io5';


function Image({ContentID}){
    const {content, setContent} = useContext(EditSectionContext);
    const [image, setImage] = useState(content[ContentID].content.image || '')
    const [changeImage, setChangeImage] = useState(() => {
        if(image === ''){
            return true;
        }
        return false;
    });
    const [removeImage, setRemoveImage] = useState(false);
    const [contentControl, setContentControl] = useState(false);
    const [ImageCredit, setImageCredit] = useState(content[ContentID].content.imageCredit || '');


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
                                imageCredit : ImageCredit
                            };
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
                    <ImageComponent image = {content[ContentID].content.image} credit = {content[ContentID].content.imageCredit}/>
                </div>
            )
        }
    }
}

export default Image;