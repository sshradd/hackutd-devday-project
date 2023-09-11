function VideoCard(props){
    return (
        <div className = "relative m-8 h-[299px] w-[180px] bg-secondary rounded-md overflow-hidden">
            <img className = "w-full h-full" src = {props.thumbnailURL} alt={props.title}></img>
            <div className="absolute w-full h-2/5 bottom-0 rounded-md bg-gradient-to-t from-black to-transparent"></div>
            <h1 className= "absolute left-4 bottom-5 font-semibold">
                {props.title}
            </h1>
        </div>
    )
}

export default VideoCard;