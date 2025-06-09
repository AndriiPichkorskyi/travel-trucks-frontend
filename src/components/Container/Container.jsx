import css from './Container.module.css';
import clsx from 'clsx';

export default function Container({ children, className }) {
  const style = clsx(css.container, className);

  return <div className={style}>{children}</div>;
}
