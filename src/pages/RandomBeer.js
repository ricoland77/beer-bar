import axios from "axios";
import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import arrow from "../images/arrow-back.png";
import beerNotFound from "../images/beer-not-found.jpg";
import loader from "../images/loader-beer.gif";
import refresh from "../images/refresh.png";

const RandomBeer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const refreshPage = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers/random`
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
              {beer.image_url ? (
                <img
                  className="detail-visual"
                  src={beer.image_url}
                  alt="beer"
                />
              ) : (
                <img className="big-beer-not-found" src={beerNotFound} alt="" />
              )}
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
              <Link to="/beers">
                <div className="arrow-back">
                  <img src={arrow} alt="Arrow back" />
                </div>
              </Link>
              <div className="arrow-refresh" onClick={refreshPage}>
                <img src={refresh} alt="Arrow refresh" />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RandomBeer;
