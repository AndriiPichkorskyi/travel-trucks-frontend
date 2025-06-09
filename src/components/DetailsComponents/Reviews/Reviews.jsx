import css from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectVehicleItems } from '../../../redux/vehicleSlice';
import ReviewItem from '../ReviewItem/ReviewItem';

export default function Reviews() {
  const { id } = useParams();
  const vehicleItems = useSelector(selectVehicleItems);
  const vehicle = vehicleItems.find(item => item.id === id);

  const { reviews } = vehicle;

  if (reviews.length === 0) return <p>No Reviews</p>;

  return (
    <ul className={css.list}>
      {reviews.map((review, i) => {
        return (
          <li className={css.item} key={i}>
            <ReviewItem review={review} />
          </li>
        );
      })}
    </ul>
  );
}
