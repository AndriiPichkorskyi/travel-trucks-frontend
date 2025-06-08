import React from "react";
import sprite from "../../assets/sprite.svg";
import css from "./Icon.module.css";

export default function Icon({ icon = "tv", fill, stroke, size = 24 }) {
    return (
        <div
            style={{
                width: size + "px",
                height: size + "px",
                fill: fill,
                stroke: stroke,
            }}
            className={css.wrapper}
        >
            <svg className={css.icon}>
                <use xlinkHref={sprite + "#" + icon}></use>
            </svg>
        </div>
    );
}
