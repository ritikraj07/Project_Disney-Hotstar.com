import React, { useEffect, useState } from 'react';
import MusicPlayer from '../Components/MusicPlayer';
import MusicPlayingList from '../Components/MusicPlayingList';
import { getTrack, getPlaylists, refreshToken } from '../Utils/musicApi';

function Mymusic() {
    const [musicData, setmusicData] = useState();
    const [curSong, setcurSong] = useState(0)

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
                setmusicData(res.items)
            })
    },[])
    
    if (musicData == undefined) {
        return <></>
    }
    return (
        <div style={{ marginTop: '100px', display:'flex', justifyContent:'space-between' }}>
            <MusicPlayer musicData={musicData} curSong={curSong} setcurSong={setcurSong} />
            <MusicPlayingList musicData={musicData} setcurSong={setcurSong} curSong={curSong} />
        </div>
    );
}

export default Mymusic;