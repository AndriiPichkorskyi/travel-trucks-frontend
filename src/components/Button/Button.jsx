import React from "react";
import css from "./Button.module.css";
import clsx from "clsx";

export default function Button({ children, className, onClick = () => {} }) {
    const style = clsx(css.button, className);

    return (
        <button type="button" className={style} onClick={onClick}>
            {children}
        </button>
    );
}
