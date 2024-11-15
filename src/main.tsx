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
import HostVans from './pages/Host/HostVans';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import NotFound from './pages/NotFound';
import VanDetail from './pages/Vans/VanDetail';
import Vans, { loader as vansPageLoader } from './pages/Vans/Vans';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />} loader={vansPageLoader} errorElement={<Error />} />
      <Route path='vans/:id' element={<VanDetail />} />
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='vans' element={<HostVans />} />
        <Route path='vans/:id' element={<HostVanDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path='pricing' element={<HostVanPricing />} />
          <Route path='photos' element={<HostVanPhotos />} />
        </Route>
        <Route path='reviews' element={<Reviews />} />
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
