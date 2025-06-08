import React, { useEffect, useState } from "react";
import Filters from "../components/Filters/Filters";
import { db } from "../configs/items";
import CardList from "../components/CardsComponents/CardList/CardList";
import css from "./Catalog.module.css";
import Container from "../components/Container/Container";
import camperAPI from "../api/campersAPI";

export default function Catalog() {
    const [filters, setFilters] = useState({});
    const [items, setItems] = useState(db.items);

    useEffect(() => {
        console.log("filters :>> ", filters);
        async function doFetch() {
            try {
                const response = await camperAPI.getFiltering(filters);
                setItems(response.data.items);
            } catch (error) {
                setItems([]);
                console.error(error);
            }
            // console.log("response :>> ", response);
        }
        doFetch();
    }, [filters]);

    const handleSearch = (data) => {
        const newFilters = Object.entries(data).reduce((filters, [key, val]) => {
            if (val) {
                if (key === "transmission") filters["transmission"] = "automatic";
                else filters[key] = val;
            }
            return filters;
        }, {});

        setFilters(newFilters);
    };

    // useEffect(() => {
    //     first;

    //     return () => {
    //         second;
    //     };
    // }, [third]);

    return (
        <Container className={css.catalog}>
            <Filters onSubmit={handleSearch} />
            <CardList items={items} />
        </Container>
    );
}
