//CSS
import './css/InputArea.css';


function InputArea(){
    return(
        <div className="InputArea">
            <p>Name</p>
            <input type="text"  className="name" placeholder="Name"></input>
            <p>E-mail</p>
            <input type="text" className="email" placeholder="E-mail"></input>
            <p>Your Precious Opinions Here :</p>
            <textarea className="comment" placeholder="I dont remember asking for your opinion, space given here is just to make it look unbiased..."></textarea>
        </div>
    )
}

export default InputArea;