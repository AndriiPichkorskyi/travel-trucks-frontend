import css from './CardHead.module.css';
import Icon from '../../Icon/Icon';
import { CURRENCY } from '../../../constants/currency';
import ButtonFavorites from '../ButtonFavorites/ButtonFavorites';
import clsx from 'clsx';

export default function CardHead({ vehicle, showFavorite }) {
  const title = vehicle.name || 'Camper';
  const reviews = vehicle.reviews.length || 0;
  const rating = vehicle.rating ? vehicle.rating.toFixed(1) : '0.0';
  const location = vehicle.location || 'Ukraine';
  const price = vehicle.price
    ? CURRENCY + vehicle.price.toFixed(2)
    : 'Contact us to get price';

  const headStyle = clsx(css.head, !showFavorite && css.column);

  return (
    <div className={headStyle}>
      <div className={css['column-1']}>
        <h3 className={css.title}>{title}</h3>
        <div>
          <div className={css.info}>
            <Icon icon="star" size={16} fill="var(--color-rating)" />
            <p>
              {rating}({reviews} Reviews)
            </p>
          </div>
          <div className={css.info}>
            <Icon icon="map" size={16} />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className={css['column-2']}>
        <span className={css.price}>{price}</span>
        {showFavorite && <ButtonFavorites id={vehicle.id} />}
      </div>
    </div>
  );
}
