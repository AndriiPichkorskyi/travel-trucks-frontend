import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTER } from '../constants/router';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Details = lazy(() => import('../pages/Details/Details'));
const Features = lazy(() => import('./DetailsComponents/Features/Features'));
const Reviews = lazy(() => import('./DetailsComponents/Reviews/Reviews'));

import { ToastContainer } from 'react-toastify';
import Loader from './Loader/Loader';

function App() {
  return (
    <>
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

      <Loader />
      <ToastContainer />
    </>
  );
}

export default App;
