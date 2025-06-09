import css from './ReviewItem.module.css';
import StarRating from '../../StarRating/StarRating';

export default function ReviewItem({ review }) {
  const name = review.reviewer_name || 'Anonymous';
  const rating = review.reviewer_rating?.toFixed(1) || '0.0';
  const comment = review.comment;

  return (
    <div>
      <div className={css.head}>
        <div className={css.avatar}>{name[0]}</div>
        <div className={css['title-rating-container']}>
          <p className={css.name}>{name}</p>
          <div className={css.rating}>
            <StarRating rating={rating} size={16} />
          </div>
        </div>
      </div>
      {comment && <p className={css.comment}>{comment}</p>}
    </div>
  );
}
