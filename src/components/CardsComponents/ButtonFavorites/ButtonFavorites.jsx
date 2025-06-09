import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from '../../../redux/favoriteSlice';
import Icon from '../../Icon/Icon';
import css from './ButtonFavorites.module.css';

export default function ButtonFavorites({ id }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);
  const handleClick = () => {
    if (!isFavorite) dispatch(addToFavorites(id));
    else dispatch(removeFromFavorites(id));
  };

  const color = isFavorite && 'var(--color-button)';
  return (
    <button type="button" onClick={handleClick} className={css.button}>
      <Icon icon="heart" size={26} stroke={color} fill={color} />
    </button>
  );
}
