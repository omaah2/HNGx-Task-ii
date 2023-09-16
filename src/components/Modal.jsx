import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import axios from "axios";

const Modal = ({ movieId, onClose }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const apiKey = "b026b102cd6eb469a20000b5f5fd2cab"; 

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
      )
      .then((response) => {
        const results = response.data.results;
        const trailer = results.find((video) => video.type === "Trailer");

        if (trailer) {
          setTrailerKey(trailer.key);
        }
      })
      .catch((error) => {
        console.error("Error fetching video data from TMDB:", error);
      });
  }, [movieId]);

  return (
    <ReactModal
      isOpen={trailerKey !== null}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <button onClick={onClose} className="close-button">
        Close
      </button>
      {trailerKey && (
        <iframe
          title="Trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </ReactModal>
  );
};

Modal.propTypes = {
  movieId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
