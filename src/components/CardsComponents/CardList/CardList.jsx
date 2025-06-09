import Card from '../Card/Card';
import css from './CardList.module.css';

export default function CardList({ items }) {
  return (
    <ul className={css.list}>
      {items.map(vehicle => (
        <li key={vehicle.id} className={css.item}>
          <Card vehicle={vehicle} />
        </li>
      ))}
    </ul>
  );
}
