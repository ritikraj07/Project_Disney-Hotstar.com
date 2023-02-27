import Style from "../CSS/Bannercard.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
function Bannercard() {
  return (
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <div className={Style.container}>
          <div className={Style.gradiant}></div>
          <div className={Style.BackgroundImage}>
            <img
              src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/black-panther-wakanda-forever-movie-review-002.jpg"
              alt=""
              className={Style.img}
            />
          </div>
          <div className={Style.Imagetitle}>
            <h2>Black Panther : Wakanda Forever</h2>
            <p>Action : 2022</p>
            <h3>
              The Wakandans face the fight of their life against an enemy that
              has remained hidden from them, Namor and the Talokan nation.
            </h3>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className={Style.container}>
          <div className={Style.gradiant}></div>
          <div className={Style.BackgroundImage}>
            <img
              src="https://th-i.thgim.com/public/entertainment/movies/article23269343.ece/alternates/FREE_1200/Raid"
              alt=""
              className={Style.img}
            />
          </div>
          <div className={Style.Imagetitle}>
            <h2>Raid</h2>
            <p>Hindi-Crime-2018</p>
            <h3>
              Fearless Income tax officer Amay Patnaik carries out a risky raid
              at the mension of the most powerful man in Lucknow. Insired by
              real Life story
            </h3>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className={Style.container}>
          <div className={Style.gradiant}></div>
          <div className={Style.BackgroundImage}>
            <img
              src="https://dl.moviesr.net/images/KzaT7.jpg"
              alt=""
              className={Style.img}
            />
          </div>
          <div className={Style.Imagetitle}>
            <h2>Fursat</h2>
            <p>Hindi-Musical-2023</p>
            <h3>
              A young man discovers an ancient relic that allows him to glimpse
              into the future. He becomes obsessed with trying to control what
              he sees, and ultimately risks losing everything important to him
              in the present
            </h3>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className={Style.container}>
          <div className={Style.gradiant}></div>
          <div className={Style.BackgroundImage}>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h"
              alt=""
              className={Style.img}
            />
          </div>
          <div className={Style.Imagetitle}>
            <h2>MS Dhoni: The Untold Story</h2>
            <p>Hindi-Biopic-2016</p>
            <h3>
              A tell-all tale about the life and times of Indian cricketer
              Mahendra Singh Dhoni, mapping his journey from a ticket collector
              to a celebrated sportsman
            </h3>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className={Style.container}>
          <div className={Style.gradiant}></div>
          <div className={Style.BackgroundImage}>
            <img
              src="https://static.joonsite.com/seelatest/2212161837414825.png"
              alt=""
              className={Style.img}
            />
          </div>
          <div className={Style.Imagetitle}>
            <h2>Sembi</h2>
            <p>Drama-2022</p>
            <h3>
              The quiet life of Veerathayi is upended when her grandchild Sembi
              gets assaulted. Enraged, she races against the time and takes an
              extreme step to seek justice.
            </h3>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
}
export default Bannercard;
