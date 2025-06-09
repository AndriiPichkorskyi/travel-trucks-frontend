import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectVehicleItems } from "../../redux/slice";
import { fetchOneVehicle } from "../../redux/operations";
import css from "./Details.module.css";
import CardHead from "../../components/CardsComponents/CardHead/CardHead";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import Thumb from "../../components/Thumb/Thumb";
import { ROUTER } from "../../constants/router";
import clsx from "clsx";

export default function Details() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const vehicleItems = useSelector(selectVehicleItems);

    const vehicle = vehicleItems.find((item) => item.id === id);

    useEffect(() => {
        if (!vehicle) dispatch(fetchOneVehicle(id));
    }, [vehicle]);

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };

    if (!vehicle) return <p>Loading...</p>;

    return (
        <Container className={css.details}>
            <CardHead vehicle={vehicle} />
            <ul className={css.gallery}>
                {vehicle.gallery.map((image) => (
                    <Thumb thumb={image.thumb} />
                ))}
            </ul>
            <p className={css.description}>{vehicle.description}</p>

            <ul className={css.tabs}>
                <li className={css["link"]} key="features">
                    <NavLink to={ROUTER.FEATURES} className={buildLinkClass}>
                        Features
                    </NavLink>
                </li>
                <li className={css["link"]} key="reviews">
                    <NavLink to={ROUTER.REVIEWS} className={buildLinkClass}>
                        Reviews
                    </NavLink>
                </li>
            </ul>
            <Outlet />
        </Container>
    );
}
