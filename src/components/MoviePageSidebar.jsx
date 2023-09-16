/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "./Logo";
import home from "../assets/Home.svg";
import movies from "../assets/Movie.svg";
import tvShow from "../assets/TVShow.svg";
import upcoming from "../assets/Calendar.svg";
import logout from "../assets/Logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Quiz from "./Quiz";

// eslint-disable-next-line no-unused-vars
const MoviePageSidebar = ({ id }) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const navigate = useNavigate();

  const handleQuizClick = () => {
    setIsQuizOpen(!isQuizOpen);
  };

  const handleTvShowClick = () => {
    navigate("/comingsoon");
  };

  const handleMoviesClick = () => {
    navigate("/movies");
  };

  return (
    <div className="fixed">
      <div className="overflow-hidden min-w-[226px] bg-white rounded-r-[45px] h-full border border-black border-opacity-30 md:flex flex-col gap-9 hidden ">
        <div className="p-5">
          <Logo color="black" />
        </div>
        <div className="flex flex-col select-none">
          <NavLink
            exact
            to="/"
            activeClassName="bg-rose-700 bg-opacity-10"
            className="hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer"
          >
            <img src={home} alt="home" className="inline-block w-6 h-6 mr-2" />
            Home
          </NavLink>
          <NavLink
            exact
            to="/movies"
            activeClassName="bg-rose-700 bg-opacity-10"
            className="hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer"
            onClick={handleMoviesClick}
          >
            <img
              src={movies}
              alt="movies"
              className="inline-block w-6 h-6 mr-2"
            />
            Movies
          </NavLink>
          <NavLink
            to="/comingsoon"
            activeClassName="bg-rose-700 bg-opacity-10"
            className="hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer"
            onClick={handleTvShowClick}
          >
            <img
              src={tvShow}
              alt="tvShow"
              className="inline-block w-6 h-6 mr-2"
            />
            Tv Series
          </NavLink>
          <NavLink
            to="/comingsoon"
            activeClassName="bg-rose-700 bg-opacity-10"
            className="hover:bg-rose-700 hover:bg-opacity-10 active:bg-rose-700 active:bg-opacity-10 p-6 cursor-pointer"
          >
            <img
              src={upcoming}
              alt="upcoming"
              className="inline-block w-6 h-6 mr-2"
            />
            Upcoming
          </NavLink>
        </div>
        <div
          onClick={handleQuizClick}
          className="w-[170px] p-4 pt-9 flex flex-col gap-2 bg-pink-50 transition-all hover:bg-pink-100 bg-opacity-40 rounded-[20px] border border-rose-700 border-opacity-70 mx-6 cursor-pointer"
        >
          <div className="text-zinc-800 text-opacity-80 text-[15px] font-semibold">
            Play movie quizzes and earn free tickets
          </div>
          <div className="text-stone-500 text-xs font-medium">
            50k people are playing now
          </div>
          <div className="text-xs font-medium bg-rose-700 text-center bg-opacity-20 rounded-[30px] px-4 py-1">
            Start playing
          </div>
        </div>
        <NavLink
          to="/logout"
          activeClassName="bg-rose-700 bg-opacity-10"
          className="flex hover:bg-rose-700 hover-bg-opacity-10 active:bg-rose-700 active-bg-opacity-10 p-6 cursor-pointer"
        >
          <img className="shadow" src={logout} alt="logout" />
          Log out
        </NavLink>
      </div>
      {isQuizOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <Quiz />
          <button
            className="absolute top-4 right-4 text-gray-900"
            onClick={handleQuizClick}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default MoviePageSidebar;
