import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MyPagination from "../components/MyPagination";

import loader from "../images/loader-beer.gif";
import beerNotFound from "../images/beer-not-found.jpg";

const AllBeers = ({
  search,
  page,
  setPage,
  abv_gt,
  setAbv_gt,
  abv_lt,
  setAbv_lt,
}) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers?page=${page}&per_page=25`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers?beer_name=${search}&abv_gt=${abv_gt}&abv_lt=${abv_lt}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search, abv_lt, abv_gt]);

  return isLoading ? (
    <div className="container-loader">
      <img className="loader" src={loader} alt="Loader" />
    </div>
  ) : (
    <div className="container-all-beers">
      <div className="hat-beers">
        <p className="important-text">
          😋 If you want to do a search, please make sure to fill in all the
          fields! 😋
        </p>
      </div>
      <div className="top-pagination">
        <MyPagination page={page} setPage={setPage} />
      </div>

      <div className="all-beers">
        {data.map((beer) => {
          const Colors = (ebc) => {
            if (ebc <= 4) {
              return "#FEF399";
            } else if (ebc <= 6) {
              return "#FEE578";
            } else if (ebc <= 8) {
              return "#FED84F";
            } else if (ebc <= 12) {
              return "#FEBA00";
            } else if (ebc <= 16) {
              return "#FDA600";
            } else if (ebc <= 20) {
              return "#FF9000";
            } else if (ebc <= 26) {
              return "#F77B00";
            } else if (ebc <= 33) {
              return "#EB6302";
            } else if (ebc <= 39) {
              return "#DC5100";
            } else if (ebc <= 47) {
              return "#9B2000";
            } else if (ebc <= 57) {
              return "#8E1600";
            } else if (ebc <= 69) {
              return "#750700";
            } else if (ebc <= 79) {
              return "#600400";
            } else if (ebc >= 80) {
              return "#000000";
            }
          };
          const ibu = beer.ibu;
          const ebc = beer.ebc;

          return (
            <Link key={beer.id} to={`/beer/${beer.id}`}>
              <div className="one-beer">
                {beer.image_url ? (
                  <img
                    className="visual-beer"
                    src={beer.image_url}
                    alt="beer"
                  />
                ) : (
                  <img
                    className="beer-not-found"
                    src={beerNotFound}
                    alt="beer not found"
                  />
                )}

                <span className="name-beer">{beer.name}</span>
                <p className="tagline-beer">{beer.tagline}</p>

                <div className="bar-area">
                  {ibu !== null ? (
                    <>
                      <h3 className="title-bar-area">IBU: {ibu} </h3>
                      <div className="progress-bar">
                        <span
                          className="result-bar"
                          style={{ width: `${ibu}%` }}
                        ></span>
                      </div>
                    </>
                  ) : (
                    <span>Unknown IBU</span>
                  )}

                  <div className="color-round">
                    <h3 className="title-bar-area">EBC: {beer.ebc}</h3>
                    <div className="ebc-meter">
                      <span
                        className="result-ebc"
                        style={{ background: Colors(ebc) }}
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="abv-beers">
                  <p>{beer.abv.toFixed(1).replace(".", ",")}%</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <MyPagination page={page} setPage={setPage} />
    </div>
  );
};

export default AllBeers;
