import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Details from "../pages/Details/Details";
import css from "./App.module.css";
import { ROUTER } from "../constants/router";
import Layout from "./Layout/Layout";
import Features from "./DetailsComponents/Features/Features";
import Reviews from "./DetailsComponents/Reviews/Reviews";

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={ROUTER.HOME} element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={ROUTER.CATALOG} element={<Catalog />} />
                    <Route path={`${ROUTER.CATALOG}/:id`} element={<Details />}>
                        <Route path={ROUTER.FEATURES} element={<Features />} />
                        <Route path={ROUTER.REVIEWS} element={<Reviews />} />
                    </Route>
                    <Route path={ROUTER.ALL} element={<Home />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
