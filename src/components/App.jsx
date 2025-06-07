import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Catalogs from "../pages/Catalogs";
import Details from "../pages/Details";
import AppBar from "./AppBar/AppBar";
import css from "./App.module.css";

function App() {
    return (
        <div className={css.box}>
            <AppBar className={css.header} />
            <div className={css.content}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalogs />} />
                        <Route path="/catalog:id" element={<Catalogs />}></Route>
                        <Route path="/details" element={<Details />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}

export default App;
