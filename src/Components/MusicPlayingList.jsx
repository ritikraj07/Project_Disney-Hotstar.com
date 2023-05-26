import React, { useEffect, useState } from 'react';
import '../CSS/musicPlayingList.css'
import MusicList from './MusicList';

function MusicPlayingList({ musicData, setcurSong, curSong, setinput, secData }) {
    

    function Mic_search() {
        window.SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new window.SpeechRecognition();
        recognition.interimResults = true;
        recognition.addEventListener("result", (e) => {
            const text = Array.from(e.results)
                .map((result) => result[0])
                .map((result) => result.transcript)
                .join("");
            console.log(text)
            setinput(text)
        });
        recognition.start();
    }


    return (
        <div className='MusicPlayerListBox'  >
            <div className='MusicListHeading'>
                <div><h2>My Music</h2></div>
                <div>
                    {/* <button onClick={Mic_search}
                    ><i className="fa-regular fa-bell"></i></button>

                    <input placeholder='Search song'

                        onChange={(e) => setinput(e.target.value)
                        }
                    /> */}
                </div>
            </div>
            <div className='MusicbannerImage'>
                <img src={musicData[curSong].track.album.images[0].url}
                    alt=''
                    
                />
            </div>
            <div className='musiclistCreter'>
                <div>
                    <h3>Trending right now</h3>
                    <h4>See all</h4>
                </div>


                <div >
                    {musicData?.map((song, ind) => {
                        return <MusicList
                            song={song}
                            ind={ind}
                            setcurSong={setcurSong} />
                    })}
                </div>


            </div>

        </div>
    );
}

export default MusicPlayingList;