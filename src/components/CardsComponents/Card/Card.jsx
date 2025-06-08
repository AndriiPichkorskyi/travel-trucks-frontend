import css from "./Card.module.css";
import CardHead from "../CardHead/CardHead";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../constants/router";
import Thumb from "../../Thumb/Thumb";
import EquipmentList from "../EquipmentList/EquipmentList";

export default function Card({ vehicle }) {
    return (
        <div className={css.card}>
            <Thumb thumb={vehicle.gallery[0].thumb} />
            <div className={css.details}>
                <CardHead vehicle={vehicle} showFavorite />
                <p className={css.description}>{vehicle.description}</p>
                <EquipmentList vehicle={vehicle} />
                <Link className={css.link} to={ROUTER.CATALOG + "/" + vehicle.id}>
                    <Button>Show more</Button>
                </Link>
            </div>
        </div>
    );
}
