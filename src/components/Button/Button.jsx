import React from "react";
import css from "./Button.module.css";
import clsx from "clsx";

export default function Button({ children, className, onClick = () => {}, type = "button", secondary = false }) {
    const style = clsx(css.button, className, secondary && css.secondary);

    return (
        <button type={type} className={style} onClick={onClick}>
            {children}
        </button>
    );
}
