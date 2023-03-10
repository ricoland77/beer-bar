import axios from "axios";
import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import arrow from "../images/arrow-back.png";
import beerNotFound from "../images/beer-not-found.jpg";
import loader from "../images/loader-beer.gif";

const Beer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="container-loader">
      <img className="loader" src={loader} alt="Gif de chargement" />
    </div>
  ) : (
    <div>
      <ul className="beers">
        {data.map((beer) => {
          return (
            <div key={beer.id} className="detail-beer">
              <div className="left-image">
                {beer.image_url ? (
                  <img
                    className="detail-visual"
                    src={beer.image_url}
                    alt="beer"
                  />
                ) : (
                  <img
                    className="big-beer-not-found"
                    src={beerNotFound}
                    alt="replacement visual"
                  />
                )}
              </div>
              <div className="all-detail-text">
                <div className="detail-title">
                  <h1 className="detail-name">{beer.name}</h1>
                  <p className="detail-tagline">{beer.tagline}</p>
                  <span className="degrees">{beer.abv}%</span>
                </div>
                <div className="all-description">
                  <div className="description">
                    <div className="left-section">
                      <p>First brewed:</p>
                    </div>
                    <div className="right-section">
                      <p>{beer.first_brewed}</p>
                    </div>
                  </div>
                  <div className="description">
                    <div className="left-section">
                      <p>Brewer tip:</p>
                    </div>
                    <div className="right-section">
                      <p>{beer.brewers_tips}</p>
                    </div>
                  </div>
                  <div className="description">
                    <div className="left-section">
                      <p>Description:</p>
                    </div>
                    <div className="right-section">
                      <p>{beer.description}</p>
                    </div>
                  </div>
                  <div className="description">
                    <div className="left-section">
                      <p>Food pairing:</p>
                    </div>
                    <div className="right-section">
                      <p>{beer.food_pairing.join(" - ")}</p>
                    </div>
                  </div>
                  <div className="description">
                    <div className="left-section">
                      <p>Yeast:</p>
                    </div>
                    <div key={beer.id} className="right-section">
                      {beer.ingredients.yeast}
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/beers"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="arrow-back">
                  <img src={arrow} alt="Arrow back" />
                </div>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Beer;
