import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import MoviePage from "./components/MoviePages";
import ErrorPage from "./components/ErrorPage";
import MovieSearch from "./components/MovieSearch";
import ComingSoon from "./components/ComingSoon";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              searchQuery={searchQuery}
              onSearchInputChange={handleSearchInputChange}
            />
          }
        />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route
          path="/search/:query"
          element={
            <MovieSearch
              searchQuery={searchQuery}
              onSearchInputChange={handleSearchInputChange}
            />
          }
        />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
