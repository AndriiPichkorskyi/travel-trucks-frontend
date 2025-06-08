import React from "react";
import css from "./EquipmentList.module.css";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
import { vehicleEquipment } from "../../../configs/vehicleEquipment";
import clsx from "clsx";

export default function EquipmentList({ vehicle, className }) {
    const equipment = Object.keys(vehicleEquipment).reduce((equipment, key) => {
        if (vehicle[key]) equipment.push(key);
        return equipment;
    }, []);

    const style = clsx(css.list, className);

    return (
        <ul className={style}>
            {equipment.map((key) => (
                <li key={key}>
                    <EquipmentItem type={key} />
                </li>
            ))}
        </ul>
    );
}
