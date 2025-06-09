import css from './Features.module.css';
import EquipmentList from '../../CardsComponents/EquipmentList/EquipmentList';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectVehicleItems } from '../../../redux/vehicleSlice';

const detailsKeys = [
  'form',
  'length',
  'width',
  'height',
  'tank',
  'consumption',
];

export default function Features() {
  const { id } = useParams();
  const vehicleItems = useSelector(selectVehicleItems);
  const vehicle = vehicleItems.find(item => item.id === id);

  const Details = detailsKeys.reduce((components, key) => {
    if (vehicle[key])
      components.push(
        <li key={key} className={css['details-item']}>
          <p>{key}</p>
          <p>{vehicle[key]}</p>
        </li>
      );
    return components;
  }, []);

  return (
    <div className={css.container}>
      <EquipmentList vehicle={vehicle} />
      {Details.length > 0 && (
        <div className={css['details-container']}>
          <h3 className={css.title}>Vehicle details</h3>
          <ul className={css['details-list']}>{Details}</ul>
        </div>
      )}
    </div>
  );
}
