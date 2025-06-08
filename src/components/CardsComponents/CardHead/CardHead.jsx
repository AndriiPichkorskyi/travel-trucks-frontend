import React from "react";
import css from "./CardHead.module.css";
import Icon from "../../Icon/Icon";
import { CARRENCY } from "../../../constants/currency";
import ButtonFavorites from "../ButtonFavorites/ButtonFavorites";

export default function CardHead({ vehicle }) {
    const title = vehicle.name || "Camper";
    const reviews = vehicle.reviews.length || 0;
    const rating = vehicle.rating ? vehicle.rating.toFixed(1) : "0.0";
    const location = vehicle.location || "Ukraine";
    const price = vehicle.price ? CARRENCY + vehicle.price.toFixed(2) : "Contact us to get price";

    return (
        <div className={css.head}>
            <div className={css["column-1"]}>
                <h3 className={css.title}>{title}</h3>
                <div>
                    <div className={css.info}>
                        <Icon icon="star" size={16} fill="var(--color-rating)" />
                        <p>
                            {rating}({reviews} Reviews)
                        </p>
                    </div>
                    <div className={css.info}>
                        <Icon icon="map" size={16} />
                        <p>{location}</p>
                    </div>
                </div>
            </div>
            <div className={css["column-2"]}>
                <span className={css.price}>{price}</span>
                <ButtonFavorites id={vehicle.id} />
                {/* <Icon icon="heart" size={26} /> */}
            </div>
        </div>
    );
}
