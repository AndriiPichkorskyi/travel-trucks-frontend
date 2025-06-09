import css from './Thumb.module.css';
import clsx from 'clsx';

export default function Thumb({ thumb, className }) {
  const style = clsx(css['image-wrapper'], className);
  return (
    <div className={style}>
      <img src={thumb} alt="Image of vehicle" />
    </div>
  );
}
