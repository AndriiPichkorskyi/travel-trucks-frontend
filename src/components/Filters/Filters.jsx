import React, { useCallback, useEffect } from "react";
import Input from "../Input/Input";
import css from "./Filters.module.css";
import { vehicleEquipment } from "../../configs/vehicleEquipment";
import CategoryItem from "../CategoryItem/CategoryItem";
import { vehicleType } from "../../configs/vehicleType";
import { useState } from "react";
import Button from "../Button/Button";

const initialState = {
    location: "",
    ...Object.keys(vehicleEquipment).reduce((prev, key) => {
        prev[key] = false;
        return prev;
    }, {}),
    form: null,
};

export default function Filters({ onSubmit = () => {} }) {
    const [filtersState, setFiltersState] = useState(initialState);

    const handleChange = ({ target }) => {
        setFiltersState((state) => ({
            ...state,
            [target.name]: target.value,
        }));
    };

    const handleEquipment = ({ target }) => {
        setFiltersState((state) => ({
            ...state,
            [target.value]: target.checked,
        }));
    };

    const handleForm = ({ target }) => {
        let { value } = target;

        if (filtersState.form === value) {
            target.checked = false;
            value = null;
        }

        setFiltersState((state) => ({
            ...state,
            form: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(filtersState);
    };

    return (
        <form className={css.container} onSubmit={handleSubmit}>
            <label className={css["location-label"]}>
                Location
                <Input icon="map" className={css.input} name="location" placeholder="Location" onChange={handleChange} />
            </label>

            <p className={css["filters-title"]}>Filters</p>

            <fieldset className={css["equipment-label"]}>
                <legend className={css["equipment-label-title"]}>Vehicle equipment</legend>
                <div className={css["equipment-option-list"]}>
                    {Object.entries(vehicleEquipment).map(([key, { title, icon }]) => {
                        return (
                            <label key={key}>
                                <CategoryItem icon={icon} title={title} isActive={filtersState[key]} />
                                <input type="checkbox" name="equipment" value={key} onChange={handleEquipment} />
                            </label>
                        );
                    })}
                </div>
            </fieldset>

            <fieldset className={css["equipment-label"]}>
                <legend className={css["equipment-label-title"]}>Vehicle type</legend>
                <div className={css["equipment-option-list"]}>
                    {Object.entries(vehicleType).map(([key, { title, icon }]) => {
                        return (
                            <label key={key}>
                                <CategoryItem icon={icon} title={title} isActive={filtersState.form === key} />
                                <input type="radio" name="type" value={key} onClick={handleForm} />
                            </label>
                        );
                    })}
                </div>
            </fieldset>

            <Button type="submit" className={css.submit}>
                Search
            </Button>
        </form>
    );
}
