import './index.css';
import './server';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter, createRoutesFromElements, Route, RouterProvider
} from 'react-router-dom';

import Error from './components/Error';
import HostLayout from './components/HostLayout';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './pages/Host/Dashboard';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='about' element={<About />} />
      <Route
        path='vans'
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path='vans/:id'
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={async () => null} />
        <Route path='income' element={<Income />} loader={async () => null} />
        <Route
          path='vans'
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route path='vans/:id' element={<HostVanDetail />} loader={async () => null}>
          <Route index element={<HostVanInfo />} loader={async () => null} />
          <Route path='pricing' element={<HostVanPricing />} loader={async () => null} />
          <Route path='photos' element={<HostVanPhotos />} loader={async () => null} />
        </Route>
        <Route path='reviews' element={<Reviews />} loader={async () => null} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
