import css from './EquipmentItem.module.css';
import { vehicleEquipment } from '../../../configs/vehicleEquipment';
import Icon from '../../Icon/Icon';

export default function EquipmentItem({ type = 'TV' }) {
  const configuration = vehicleEquipment[type];
  if (!configuration) return;

  const { title, icon } = configuration;

  return (
    <div className={css.container}>
      <Icon icon={icon} size={20} />
      {title}
    </div>
  );
}
