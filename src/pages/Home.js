import Jouwen from "../images/jouwen-wang.jpg";
import ibu from "../images/IBU.svg";
import ebc from "../images/EBC.svg";
import abv from "../images/ABV.svg";

const Home = () => {
  return (
    <>
      <section className="container-home">
        <div>
          <img className="img-top-home" src={Jouwen} alt="beers" />
        </div>
      </section>
      <section className="container-home">
        <div className="presentation-home">
          <div className="hat-home">
            <p className="shadow-hat">
              Welcome to this website, which references some beers based on Punk
              API.
            </p>
            <p className="important-text">
              😋 If you want to do a search, please make sure to fill in all the
              fields! 😋
            </p>
          </div>

          <div className="all-legends">
            <h1 className="title-home">Legend</h1>
            <div className="legend">
              <img className="pictos-legende" src={abv} alt="picto ABV" />
              <p className="text-home">
                <span className="bold-text">
                  • ABV : (or Alcohol By Volume)
                </span>{" "}
                is the international unit for measuring the{" "}
                <span className="bold-text">amount of alcohol</span> in a beer.
                It is expressed in %ABV where the percentage is equal to the
                same degree of alcohol. For example, our Ale Pas d'Chinook which
                has a 7% ABV will be indicated at 7° on its label.
              </p>
            </div>
            <div className="legend">
              <img className="pictos-legende" src={ibu} alt="picto IBU" />

              <p className="text-home">
                <span className="bold-text">
                  • IBU: The IBU, for "International Biathlon Union"
                </span>{" "}
                could be of interest to those who practice at a high level the
                elbow raising associated with their favorite sport. We can
                immediately imagine what it can give and we formally advise you
                not to pursue in this direction. The famous IBU that interests
                us here is the one that refers to the International Bitterness
                Unit.
              </p>
              <p className="text-home">
                It is the measure that allows us to evaluate the{" "}
                <span className="bold-text">bitterness</span> of a beer in a
                uniform way throughout the world. As you can easily imagine, it
                is difficult to judge the bitterness of a beer between two
                palates, especially if the owners of these palates come from two
                very different cultures! This IBU scale tries to put everyone in
                agreement.
              </p>
              <p className="text-home">
                The higher the IBU value, the stronger the bitterness. The scale
                goes from 1 to about 150. Beyond that, it's too much for the
                palate to interpret and detect! It must be said that in
                practice, a beer rarely exceeds 90 IBU, so as not to saturate
                the uninitiated palate.
              </p>
              <p className="text-home">
                As an example, the most standard lagers have a IBU between 15
                and 17. If you don't like bitterness, you will be seduced by
                spontaneous fermentation beers, which are generally not very
                bitter (about 10 IBU). On the contrary, if bitterness is your
                thing, the IPA style is for you!
              </p>
            </div>
            <div className="legend">
              <img className="pictos-legende" src={ebc} alt="picto EBC" />
              <p className="text-home">
                <span className="bold-text">
                  • EBC: The EBC, for European Brewery Convention"
                </span>{" "}
                (or SRM for our North American friends), is the scale that
                classifies beers according to their{" "}
                <span className="bold-text">color </span>. From 1 to 140, the
                EBC gradually declines all possible shades, from the lightest
                Pale Ale, to the darkest Stout.
              </p>
              <p className="text-home">
                The darker the beer, the higher the EBC. This beer acronym is
                used to finally put words (or rather numbers) on the color of
                your beer.
              </p>
              <div className="all-rounds">
                <div className="firts-round">EBC</div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ backgroundColor: "#FEF399" }}
                  >
                    4
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ backgroundColor: "#FEE578" }}
                  >
                    6
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ backgroundColor: "#FED84F" }}
                  >
                    8
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ backgroundColor: "#FEBA00" }}
                  >
                    12
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ backgroundColor: "#FDA600" }}
                  >
                    16
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ backgroundColor: "#FF9000" }}
                  >
                    20
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ backgroundColor: "#F77B00" }}
                  >
                    26
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ color: "white", backgroundColor: "#EB6302" }}
                  >
                    33
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ color: "white", backgroundColor: "#DC5100" }}
                  >
                    39
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ color: "white", backgroundColor: "#9B2000" }}
                  >
                    47
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ color: "white", backgroundColor: "#8E1600" }}
                  >
                    57
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ color: "white", backgroundColor: "#750700" }}
                  >
                    69
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ color: "white", backgroundColor: "#600400" }}
                  >
                    79
                  </div>
                </div>
                <div className="firts-round">
                  <div
                    className="second-round"
                    style={{ color: "white", backgroundColor: "#000000" }}
                  >
                    140
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
