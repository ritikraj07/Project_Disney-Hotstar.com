import React, { useEffect, useState } from 'react';
import MusicPlayer from '../Components/MusicPlayer';
import MusicPlayingList from '../Components/MusicPlayingList';
import { getTrack, refreshToken, getAllSearchResults } from '../Utils/musicApi';

function Mymusic() {
    const [musicData, setmusicData] = useState();
    const [curSong, setcurSong] = useState(0)
    const [input, setinput] = useState()
    const [secData, setsecData] = useState([])

    var spotify_token = localStorage.getItem("spotify_token")
    let token_timer = localStorage.getItem('token_timer', "time") || 0
    const today = new Date();
    let time = today.toTimeString()[0] + today.toTimeString()[1]

    setInterval(function () {
        time = today.toTimeString()[0] + today.toTimeString()[1];
    }, 3000)

    if (token_timer === "0" || time != token_timer || spotify_token == undefined || spotify_token == null) {
        localStorage.setItem('token_timer', time)
        localStorage.removeItem("spotify_token");
        refreshToken()
        console.log("Your new generated token is this", spotify_token)
    }
    
    useEffect(() => {
        getTrack("37i9dQZF1DXccgHpuP6BCs", spotify_token)
            .then((res) => {
                console.log("tra", res.items)
                setmusicData(res.items)
            })
    }, [])
    useEffect(() => {
        getAllSearchResults(input, "track,artist", "50", spotify_token)
            .then((res) => {
                let track_items_ = res.tracks.items
                // console.log("sea", track_items_)
                console.log(input)
                console.log(track_items_[curSong].album.images[0].url)
                
                if (input != undefined || input != null) {
                    setsecData(track_items_)
                }
                
            })
    }, [input])
    
    if (musicData == undefined) {
        return <></>
    }
    return (
        <div style={{ marginTop: '100px', display:'flex', justifyContent:'space-between' }}>
            <MusicPlayer musicData={musicData} curSong={curSong} setcurSong={setcurSong} />
            <MusicPlayingList
                musicData={musicData}
                setcurSong={setcurSong}
                curSong={curSong} 
                setinput={setinput}
                secData={secData}
                />
        </div>
    );
}

export default Mymusic;