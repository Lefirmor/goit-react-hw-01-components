import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <div className={isOnline ? css.isOnline : css.isOffline}></div>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};