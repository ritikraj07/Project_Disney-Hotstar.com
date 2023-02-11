import Styles from "../CSS/Moviedtails.module.css";
function Moviedetails() {
    return (
        <div className={Styles.Container}>
            <div className={Styles.BackgroundImage}>
                <img src="https://wallpaperaccess.com/full/3863501.jpg" alt="" className={Styles.img} />
            </div>
            <div className={Styles.Imagetitle}>
                <h4>Subscriber</h4>
                <h2>Doctor Strange in the Multiverse of Madness</h2>
                <h4>2 hr 6 min - 2022 - Superhero - U/A 13+</h4>
                <h5>When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.</h5>
            <div className={Styles.Control}>
                <div>
                <button>
                    <span>Play</span>
                </button>
                </div>

                <div className={Styles.Controldiv}>
                    <button>
                        <span>Wacth Lsit</span>
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
