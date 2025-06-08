import React from "react";
import css from "./CategoryItem.module.css";
import Icon from "../Icon/Icon";
import clsx from "clsx";

export default function CategoryItem({ icon = "tv", title = "TV", isActive = false }) {
    const style = clsx(css.item, isActive && css.active);
    return (
        <div className={style}>
            <Icon icon={icon} size={32} />
            {title}
        </div>
    );
}
