import clsx from 'clsx';

import css from './Input.module.css';
import Icon from '../Icon/Icon';

export default function Input({
  onChange = () => {},
  icon,
  placeholder = 'Name',
  name = 'name',
  className,
}) {
  const style = clsx(css.wrapper, className);

  return (
    <div className={style}>
      <input
        className={css.input}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
      {icon && <Icon icon={icon} size={20} className={css.icon} />}
    </div>
  );
}
