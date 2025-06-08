import React from "react";
import css from "./Card.module.css";
import CardHead from "../CardHead/CardHead";
import { vehicleEquipment } from "../../../configs/vehicleEquipment";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

export default function Card({ vehicle }) {
    const equipment = Object.keys(vehicleEquipment).reduce((equipment, key) => {
        if (vehicle[key]) equipment.push(key);
        return equipment;
    }, []);

    return (
        <div className={css.card}>
            <div className={css["image-wrapper"]}>
                <img src={vehicle.gallery[0].thumb} alt="" />
            </div>
            <div className={css.details}>
                <CardHead vehicle={vehicle} />
                <p className={css.description}>{vehicle.description}</p>
                <ul className={css["equipment-list"]}>
                    {equipment.map((key) => (
                        <li key={key}>
                            <EquipmentItem type={key} />
                        </li>
                    ))}
                </ul>
                <Link className={css.link}>
                    <Button>Show more</Button>
                </Link>
            </div>
        </div>
    );
}
