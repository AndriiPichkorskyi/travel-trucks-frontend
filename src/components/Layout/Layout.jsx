import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
import clsx from "clsx";

export default function Layout() {
    const location = useLocation();
    const mainStyle = clsx(location.pathname === "/" ? css.main : css.main);
    return (
        <div className={css.box}>
            <AppBar className={css.header} />
            <main className={mainStyle}>
                <Outlet />
            </main>
        </div>
    );
}
