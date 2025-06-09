import css from "./Loader.module.css";
import clsx from "clsx";
import animationGif from "../../assets/Animation-1749468747635.json";
// import animationGif from "../../assets/Animation-1749468747635.lottie";
import Lottie from "lottie-react";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/slice";

export default function Loader() {
    // const loading = true;
    const loading = useSelector(selectLoading);
    const className = clsx(css["loader-wrapper"], loading && css.visible);

    return (
        <div className={className}>
            <Lottie className={css.loader} animationData={animationGif} style={{ width: 300, height: 300, background: "transparent" }} loop={true} autoplay={loading} />
        </div>
    );
}
