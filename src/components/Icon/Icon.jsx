import sprite from '../../assets/sprite.svg';
import css from './Icon.module.css';
import clsx from 'clsx';

export default function Icon({
  icon = 'tv',
  fill,
  stroke,
  size = 24,
  className,
}) {
  const style = clsx(css.wrapper, className);
  return (
    <div
      style={{
        width: size + 'px',
        height: size + 'px',
        fill: fill,
        stroke: stroke,
      }}
      className={style}
    >
      <svg className={css.icon}>
        <use xlinkHref={sprite + '#' + icon}></use>
      </svg>
    </div>
  );
}
