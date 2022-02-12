//CSS
import './css/Video.css';


function Video({video, source}){
    var isVideoCredit;
    if(source === ''){
        isVideoCredit = false;
    }
    else{
        isVideoCredit = true;
    }
    return (
        <div className='VideoContent'>
            <iframe className="VideoFrame" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className={isVideoCredit?"VideoCredit":"VideoCreditHide"}>Source : {source}</p>
        </div>
    )
}


export default Video;