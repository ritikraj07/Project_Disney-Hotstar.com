import React, { useEffect, useState } from 'react';
import '../CSS/MusciPlayer.css'

function MusicPlayer({ musicData, curSong, setcurSong}) {
    const [audio, setAudio] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setAudio(new Audio(musicData[curSong].track.preview_url))
    },[curSong])
    // useEffect(()=>{
    //     // handlePlayPause()
    // },[])
    
    const handlePlayPause = () => {
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    };
    // console.log(curSong)
    let name = musicData[curSong].track.name
    let des = musicData[curSong].track.album.name
    let img = musicData[curSong].track.album.images[0].url
    let random = Math.floor(Math.random() * 50);
    function widthChecker(word) {
        let str = ''
        for (var i = 0; i < word.length && i < 20; i++) {
            str += word[i]
            if (i > 15) {
                str = str + '...'
                break;
            }
        }
        return str
    }
    return (
        <div className='musicPlayer'>
            <div>
                <div>
                    <img src={img} />
                </div>
            </div>

            <div className='musicplayerDec'>
                <div>
                    <h2>{widthChecker(name)}</h2>
                    <h4>{widthChecker(des)}</h4>
                </div>
                <div className='musicController'>
                    <div>
                        <button
                            onClick={() => {setcurSong(0)}}
                        ><i className="fa-solid fa-rotate-right"></i></button>
                    </div>
                    <div>
                        <button disabled={curSong==0} onClick={() => { 
                            audio.pause()
                            setcurSong(curSong - 1) 
                        }} style={curSong == 0 ? { color: 'black' } : { color: 'white' }}><i className="fa-solid fa-backward"></i></button>
                        <button onClick={() => handlePlayPause()}><i className={isPlaying ?"fa-solid fa-pause":"fa-solid fa-play"}></i></button>
                        <button onClick={()=>{
                            audio.pause()
                            setcurSong(curSong+1)
                            setIsPlaying(false)
                            }
                            } ><i className="fa-solid fa-forward"></i></button>
                    </div>
                    <div>
                        <button
                        onClick={()=>{setcurSong(random)} }
                        ><i className="fa-solid fa-shuffle"></i></button>
                    </div>
                </div>
            </div>
            

        </div>
    );
}

export default MusicPlayer;