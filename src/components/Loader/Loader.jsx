import css from './Loader.module.css';
import clsx from 'clsx';
import animationGif from '../../assets/Animation-1749468747635.json';
import Lottie from 'lottie-react';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/vehicleSlice';
import { useEffect, useRef } from 'react';

export default function Loader({ visible }) {
  const lottieRef = useRef();
  const loading = useSelector(selectLoading);
  const className = clsx(
    css['loader-wrapper'],
    (loading || visible) && css.visible
  );

  useEffect(() => {
    if (loading || visible) lottieRef.current?.play();
    else lottieRef.current?.pause();
  }, [loading, visible, lottieRef.current]);

  return (
    <div className={className}>
      <Lottie
        lottieRef={lottieRef}
        className={css.loader}
        animationData={animationGif}
        style={{ width: 300, height: 300, background: 'transparent' }}
        loop={true}
        autoplay={loading || visible}
      />
    </div>
  );
}
