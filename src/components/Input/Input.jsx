import clsx from "clsx";
import React from "react";
import css from "./Input.module.css";
import Icon from "../Icon/Icon";

export default function Input({ onChange = () => {}, icon, placeholder = "Name", name = "name", className }) {
    const style = clsx(css.wrapper, className);

    const IconComponent = icon ? (
        <div className={css.icon}>
            <Icon icon={icon} size={20} />{" "}
        </div>
    ) : null;
    return (
        <div className={style}>
            <input className={css.input} onChange={onChange} placeholder={placeholder} name={name} />
            {IconComponent}
        </div>
    );
}
