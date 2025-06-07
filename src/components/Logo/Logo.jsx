import React from "react";
import css from "./Logo.module.css";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";

export default function Logo({ fontSize = 16, className }) {
    const aspectRation = 8.5;
    const height = fontSize;
    const width = height * aspectRation;

    const style = clsx(css.icon, className);
    return (
        <svg className={style} width={width} height={height}>
            <use xlinkHref={sprite + "#logo"}></use>
        </svg>
    );
}
