import Styles from "../CSS/Moviedtails.module.css";
function Moviedetails({data}) {
    return (
        <div className={Styles.Container}>
            <div className={Styles.BackgroundImage}>
            <img className={Styles.img} src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`} alt=""/>
            </div>
            <div className={Styles.Imagetitle}>
                <h4>Subscriber</h4>
                <h2>{data.title}</h2>
                <h4>{(data.runtime/60).toFixed(0) +" hr "+ data.runtime%60 + " mins"} </h4>
                <h5>{data.overview}</h5>
            <div className={Styles.Control}>
                <div>
                <button>
                    <span>Play</span>
                </button>
                </div>

                <div className={Styles.Controldiv}>
                    <button className={Styles.btn}>
                        <span>Wacth List</span>
                    </button>
                    <button>
                        <span>Share</span>
                    </button>
                </div>
                </div>
                
                <div className={Styles.lang}>
                    <div className={Styles.wrapper}>
                        <button className={Styles.button}>English</button>
                    </div>
                    <div><button className={Styles.button}>தமிழ்</button></div>
                    <div><button className={Styles.button}>हिंदी</button></div>
                    <div><button className={Styles.button}>తెలుగు</button></div>
                    <div><button className={Styles.button}>ಕನ್ನಡ</button></div>
                </div>



            </div>
            
        </div>
    )
}

export default Moviedetails;
