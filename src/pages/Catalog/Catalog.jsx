import React, { useEffect } from 'react';
import Filters from '../../components/Filters/Filters';
import CardList from '../../components/CardsComponents/CardList/CardList';
import css from './Catalog.module.css';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilters,
  selectLimit,
  selectPage,
  selectTotal,
  selectVehicleItems,
  setFilters,
} from '../../redux/vehicleSlice';
import { fetchVehicle } from '../../redux/operations';

export default function Catalog() {
  const dispatch = useDispatch();

  const items = useSelector(selectVehicleItems);
  const filters = useSelector(selectFilters);
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const error = useSelector(selectError);

  useEffect(() => {
    loadData();
  }, [filters]);

  const loadData = async function () {
    dispatch(fetchVehicle({ filters, page, limit }));
  };

  const handleSearch = data => {
    const newFilters = Object.entries(data).reduce((filters, [key, val]) => {
      if (val) {
        if (key === 'transmission') filters['transmission'] = 'automatic';
        else filters[key] = val;
      }
      return filters;
    }, {});

    dispatch(setFilters(newFilters));
  };

  const showLoadMore = Boolean(total) && (page - 1) * limit < total;

  return (
    <Container className={css.catalog}>
      <Filters onSubmit={handleSearch} />
      <div>
        {error && <p className={css.error}>No Results Found</p>}
        <CardList items={items} />
        {showLoadMore && (
          <Button secondary onClick={loadData} className={css.button}>
            Load More
          </Button>
        )}
      </div>
    </Container>
  );
}
