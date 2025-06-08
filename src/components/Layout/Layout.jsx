import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout() {
    return (
        <div className={css.box}>
            <AppBar className={css.header} />
            <main className={css.content}>
                <Outlet />
            </main>
        </div>
    );
}
