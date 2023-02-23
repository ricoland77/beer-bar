import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo-beer.png";

const Header = ({
  search,
  setSearch,
  abv_gt,
  setAbv_gt,
  abv_lt,
  setAbv_lt,
}) => {
  const [, setData] = useState("");
  const [, setIsLoading] = useState(true);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

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

  return (
    <div className="header">
      <div className="container">
        <div className="all-header">
          <div className="logo-search">
            <Link to="/">
              <img className="logo-beer" src={logo} alt="Logo Beer" />
            </Link>
            <div className="top-menu">
              <nav>
                <ul className="nav-menu">
                  <li>
                    <Link
                      className="click-menu"
                      to="/"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="click-menu"
                      to="/beers"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Beers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="click-menu"
                      to="/caves"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Caves
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="all-filters">
              <input
                className="filter-search"
                value={search}
                type="search"
                name="search"
                placeholder="Search a beer"
                onChange={handleSearchChange}
              />
              <div className="filters">
                <div className="filter-abv">
                  <p>ABV greater than :</p>
                  <span>
                    <input
                      className="input-abv"
                      type="text"
                      value={abv_gt}
                      placeholder="…"
                      onChange={(event) => {
                        setAbv_gt(event.target.value);
                      }}
                    />
                  </span>
                </div>
                <div className="filter-abv">
                  <p>ABV less than :</p>
                  <span>
                    <input
                      className="input-abv"
                      type="text"
                      value={abv_lt}
                      placeholder="…"
                      onChange={(event) => {
                        setAbv_lt(event.target.value);
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/random"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <button className="random-beer" onClick={fetchData}>
              Random beer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
