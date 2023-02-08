import React from 'react';
import nv from '../CSS/Navbar.module.css'
function Navbar(props) {
    return (
        <div className={nv.navbar}>
            <div>
                <div>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div>
                    <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" />
                </div>
                <div>
                    <button>TV</button>
                </div>
                <div>
                    <button>Movie</button>
                </div>
                <div>
                    <button>Sports</button>
                </div>
                <div>
                    <img src="https://snipboard.io/vngDdt.jpg" />
                </div>
                <div>
                    Music <i style={{marginLeft:"10px"}} class="fa-solid fa-music"></i>
                </div>


            </div>
            <div>
                <div>
                    <div>
                        <input placeholder='Search' />
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                <div>
                    <button>SUBSCRIBE</button>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
