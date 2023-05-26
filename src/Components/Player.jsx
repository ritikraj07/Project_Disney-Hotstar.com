import React from 'react';
import ReactPlayer from "react-player/lazy";
function Player({ id, onclick }) {
    // console.log(key)
    let x = window.innerHeight;
    // Hj1vP05HGOg
    return (
        <div style={{marginTop:'80px'}}>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                style={{ backgroundColor: "black" }}
                height="500px"
                width="100%"
                controls={true}
                playing={true}
            // light={true}
            // playIcon=<img src="https://www.aha.video/play.bfd6bfa5f9cb261c361e.svg" />
            />
            <button style={{
                position: 'absolute', top: '0px', right: '0px', opacity: '0.3', cursor: 'pointer',
                zIndex:'12345'
            }}
                onClick={()=>{onclick(false)}}
            >X</button>
        </div>
    );
}

export default Player;