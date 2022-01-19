//CSS
import './css/AboutAuthorArea.css';

function AboutAuthorArea(){
    return(
        <section className="AboutAuthorArea">

            <h1>About the Author : </h1>

            <div className="MidLine"></div>

            <div className="AuthorIntro">
                <h3 className="AuthorName">Aryan Mishra</h3>
                <div className="AuthorDP"></div>
            </div>

            <p className="AuthorDescription">
                Some Details about the author as mentioned in bio or if the author wants AuthorDescription can change in every topic showing author backGround on the topic.
            </p>

            <button className="AuthorMoreInfo">More Info</button>

        </section>
    )
}

export default AboutAuthorArea;