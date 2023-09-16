import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MovieList from "./MovieList";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import Footer from "./Footer";

const Homepage = ({ searchQuery, onSearchInputChange, onHandleSearch }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const apiKey = "b026b102cd6eb469a20000b5f5fd2cab";
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

  axios
    .get(apiUrl)
    .then((response) => {
      setMovies(response.data.results);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      const errorMessage = error;
      setError(errorMessage);
      console.error("Error fetching movie data:", error);
    });
}, []);


  return (
    <div className="relative">
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <Navbar
            searchQuery={searchQuery}
            onSearchInputChange={onSearchInputChange}
            onHandleSearch={onHandleSearch}
          />
          <Hero heroMovies={movies} />
          <MovieList movieList={movies} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Homepage;
