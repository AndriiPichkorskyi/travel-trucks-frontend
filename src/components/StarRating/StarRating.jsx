import React from "react";
import css from "./StarRating.module.css";
import Icon from "../Icon/Icon";

export default function StarRating({ rating = "0.0", size = 16 }) {
    const value = Math.round(Number(rating));
    const markup = [];
    for (let i = 0; i < 5; i++) {
        markup.push(
            <li key={i}>
                <Icon size={size} icon={"star"} fill={i < value ? "var(--color-rating)" : "var(--color-badges)"} />
            </li>
        );
    }

    return <ul className={css.list}>{markup}</ul>;
}
