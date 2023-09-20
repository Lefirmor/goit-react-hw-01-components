import PropTypes from 'prop-types';
import css from './UserCard.module.css'
export const Card = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src="https://www.garant.ru/files/5/1/1148915/predlozhenie-drugoy-raboty-pri-sokraschenii-kak-ocenit-otvechaet-li-rabotnik-trebovaniyam-po-vakantnoy-dolzhnosti200.jpg"
          alt={avatar}
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
