import { Outlet } from 'react-router-dom';

import Header from './Header';

export default function Layout() {
  return (
    <div className='bg-amber-50'>
      <Header />
      <Outlet />
    </div>
  );
}
