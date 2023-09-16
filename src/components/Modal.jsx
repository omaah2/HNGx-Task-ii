import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import axios from "axios";

const Modal = ({ movieIds, onClose }) => {
  const [trailerKeys, setTrailerKeys] = useState([]);

  useEffect(() => {
    const apiKey = "b026b102cd6eb469a20000b5f5fd2cab";

    // Fetch trailers for all movie IDs
    Promise.all(
      movieIds.map((movieId) =>
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
          )
          .then((response) => {
            const results = response.data.results;
            const trailer = results.find((video) => video.type === "Trailer");
            return trailer ? trailer.key : null;
          })
          .catch((error) => {
            console.error(
              `Error fetching video data for movie ID ${movieId}:`,
              error
            );
            return null;
          })
      )
    ).then((trailerKeys) => {
      // Filter out null values (movies without trailers)
      const validTrailerKeys = trailerKeys.filter((key) => key !== null);
      setTrailerKeys(validTrailerKeys);
    });
  }, [movieIds]);

  return (
    <ReactModal
      isOpen={trailerKeys.length > 0}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <button onClick={onClose} className="close-button">
        Close
      </button>
      {trailerKeys.map((trailerKey, index) => (
        <div key={index}>
          {trailerKey && (
            <iframe
              title={`Trailer ${index + 1}`}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
      ))}
    </ReactModal>
  );
};

Modal.propTypes = {
  movieIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
