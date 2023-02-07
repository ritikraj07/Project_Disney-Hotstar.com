import Style from "../CSS/Bannercard.module.css"
function Bannercard() {
    return (
      <div className={Style.Container}>
        <div className={Style.child}>
          <h2>Black Panther : Wakanda Forever</h2> 
          <p>Actio : 2022</p>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, sint autem sapiente quasi natus atque ratione quam, totam veritatis animi est odit minima. Distinctio perferendis repellendus iste sapiente nostrum quod?</h3>
            </div>
            <div className={Style.child2}>
                {/* <img src="https://images7.alphacoders.com/128/1280283.jpg" alt="" className={ Style.Container} /> */}
            </div>    
      </div>

  );
}
export default Bannercard;