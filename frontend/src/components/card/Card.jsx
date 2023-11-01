import "./Card.scss";
import PropTypes, { shape } from "prop-types";

function Card({ systeme, closeCard }) {
  return (
    <section id="card">
      <div className="card__body">
        <img
          className="card__img"
          src={`${import.meta.env.VITE_BACKEND_URL}${systeme[0].image}`}
          alt={systeme[0].french_name}
        />
        <div className="card__description">
          <h1 className="card__description__h1">{systeme[0].french_name} </h1>
          <p className="card__description__p"> {systeme[0].description} </p>
        </div>
        <section className="card__button">
          <button
            type="button"
            className="card__button__closed"
            onClick={closeCard}
          >
            X
          </button>
          <button type="button" className="card__button__moreInfos">
            More Infos
          </button>
        </section>
      </div>
    </section>
  );
}

Card.propTypes = {
  systeme: PropTypes.arrayOf(
    shape({
      french_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      periode_de_revolution: PropTypes.string.isRequired,
      vitesse_rotation_equateur: PropTypes.string.isRequired,
      type_de_planete: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  closeCard: PropTypes.func.isRequired,
};
export default Card;
