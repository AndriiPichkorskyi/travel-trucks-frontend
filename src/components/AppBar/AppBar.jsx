import React from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import css from "./AppBar.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function AppBar({ className }) {
    const style = clsx(css.header, className);

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };

    return (
        <header className={style}>
            <Container className={css["header-container"]}>
                <nav className={css.nav}>
                    <NavLink to="/" className={css.logo}>
                        <Logo />
                    </NavLink>
                    <ul className={css.navigation}>
                        <li>
                            <NavLink to="/" className={buildLinkClass}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="catalogs" className={buildLinkClass}>
                                Catalog
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
