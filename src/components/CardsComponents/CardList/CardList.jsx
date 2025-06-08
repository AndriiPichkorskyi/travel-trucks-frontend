import React from "react";
import Card from "../Card/Card";
import css from "./CardList.module.css";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../../redux/slice";

export default function CardList({ items }) {
    const favorites = useSelector(selectFavorites);
    return (
        <ul className={css.list}>
            {items.map((vehicle) => (
                <li key={vehicle.id} className={css.item}>
                    <Card vehicle={vehicle} />
                </li>
            ))}
        </ul>
    );
}
