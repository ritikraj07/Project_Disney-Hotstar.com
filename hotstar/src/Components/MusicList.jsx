import React from 'react';
import '../CSS/musciList.css'
function MusicList({ song, ind, setcurSong }) {
    let name = song.track.name
    let des = song.track.album.name
    let img = song.track.album.images[0].url
    let min = ((song.track.duration_ms / 1000).toFixed(0) / 60).toFixed(0)
    let sec = ((song.track.duration_ms / 1000).toFixed(0) % 60).toFixed(0)
    function widthChecker(word) {
        let str = ''
        for (var i = 0; i < word.length && i<40; i++){
            str += word[i]
            if (i > 30) {
                str = str + '...'
                break;
            }
        }
        return str
    }
    
    return (
        <div className='musicList' key={ind} onClick={() => {
            setcurSong(ind)
        }} >
            <div>{ind+1}</div>
            <div>
                <img src={img} alt='' width='60px' />
            </div>
            <div className='musicNameDex'>
                <h4>{widthChecker(name)}</h4>
                <p>{widthChecker(des)}</p>
            </div>
            <div>
                <p>{min +':'+sec}</p>
            </div>
            <div>
                <button><i className="fa-regular fa-heart"></i></button>
            </div>
            <div>
                <button><i className="fa-solid fa-ellipsis"></i></button>
            </div>
        </div>
    );
}

export default MusicList;