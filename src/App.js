import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// PAGES
import AllBeers from "./pages/AllBeers";
import Beer from "./pages/Beer";
import Home from "./pages/Home";
import Header from "./components/Header";
import RandomBeer from "./pages/RandomBeer";
import Caves from "./pages/Caves";
import Footer from "./components/Footer";

function App() {
  // STATES
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [abv_gt, setAbv_gt] = useState("");
  const [abv_lt, setAbv_lt] = useState("");

  return (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        abv_gt={abv_gt}
        setAbv_gt={setAbv_gt}
        abv_lt={abv_lt}
        setAbv_lt={setAbv_lt}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beers"
          element={
            <AllBeers
              search={search}
              page={page}
              setPage={setPage}
              abv_gt={abv_gt}
              setAbv_gt={setAbv_gt}
              abv_lt={abv_lt}
              setAbv_lt={setAbv_lt}
            />
          }
        />
        <Route path="/beer/:id" element={<Beer />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/caves" element={<Caves />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
