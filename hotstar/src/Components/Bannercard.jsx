import Style from "../CSS/Bannercard.module.css"
function Bannercard() {
  const BannerSection = {
    display: "flex",
    gap: "10px",
    background: "black",
    color: "white",
    textAlign: "left"
  };
  return (
    <section style={BannerSection}>
      <div style={{ width: "40%", margin: "auto", padding: "20px" }}>
        <h2>Black Panthar : Wakanda Forever</h2>
        <p>Action : 2022</p>
        <h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          quae vero consectetur corrupti, suscipit quos eos nam minus expedita,
          quod inventore omnis voluptate voluptatem veniam sunt aliquid dicta
          fuga unde.
        </h4>
      </div>
      <div style={{ width: "60%", margin: "auto" }}>
        <img
          src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpantherwakandaforever_lob_mas_mob_04.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    </section>
  );
}
export default Bannercard;