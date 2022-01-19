function Comment({n, view}){
    return(
        <div className="Comment">
            
            <div className="UserInfo">
                <div className="UserDP"></div>
                <div className="UserName">Aryan Mishra {n}</div>
            </div>

            <p className="UserComment">
                {view}
            </p>

        </div>
    )
}

export default Comment;