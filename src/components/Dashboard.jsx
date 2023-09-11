import {useState, useEffect} from 'react'; //functions already in react which is why we're importing
import {fetchAllVideos} from '../api'; //this is from api, it fetches videos
import VideoCard from './VideoCard';

function Dashboard(){
    const [videos, setVideos] = useState([]);

    async function fetchData(){
        const data = await fetchAllVideos();
        setVideos(data);
    }
    useEffect(() => {fetchData();
    },[]);
    return(
        <ul className= "flex flex-wrap gap-32">
            {videos.map((video) => (
                <VideoCard 
                    key={video.id} 
                    id={video.id} 
                    title={video.title} 
                    thumbnailURL= {video.thumbnailUrl}
                />
            ))}
        </ul>
    )
}

export default Dashboard; 
