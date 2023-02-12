import React, { useEffect, useState } from 'react';
import '../CSS/musicPlayingList.css'
import MusicList from './MusicList';

function MusicPlayingList({ musicData, setcurSong, curSong, setinput, secData }) {
    // const [sticky, setSticky] = useState(false);
    
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const navbar = document.querySelector("#navbar");
    //         const div = document.querySelector("#sticky-div");
    //         console.log(window.scrollY, navbar.offsetTop, navbar.offsetHeight)
    //         if (window.scrollY >= navbar.offsetTop + navbar.offsetHeight+ 380) {
    //             div.style.top = `${navbar.offsetHeight}px`;
    //             div.style.position = "fixed";
    //             setSticky(true);
    //         } else {
    //             div.style.top = "0";
    //             div.style.position = "relative";
    //             setSticky(false);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);
    // id = "sticky-div" style = {{ top: sticky ? "0" : "0", position: sticky ? "fixed" : "relative" }}

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
        <div className='MusicPlayerListBox' >
            <div className='MusicListHeading'>
                <div><h2>My Music</h2></div>
                <div>
                    <button onClick={Mic_search}
                    ><i className="fa-regular fa-bell"></i></button>

                    <input placeholder='Search song'

                        onChange={(e) => setinput(e.target.value)
                        }
                    />
                </div>
            </div>
            <div className='MusicbannerImage'>
                <img src={secData.length != 0 ? secData[curSong].album.images[0].url : musicData[curSong].track.album.images[0].url} alt='' width='100%' height='200px' />
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