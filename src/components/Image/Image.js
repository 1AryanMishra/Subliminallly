//CSS
import './css/Image.css';



function Image({image, credit}) {
    var isImageCredit;
    if (credit === ''){
        isImageCredit = false;
    }
    else{
        isImageCredit = true;
    }
    return(
        <div className="ImageContentArea">
            <img src={image} className="ImgContent" alt="someImage"></img>
            <p className={isImageCredit?"ImageCredit":"ImageCreditHide"}>Source : {credit}</p>
        </div>
    )
}

export default Image;