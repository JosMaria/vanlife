import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function HostLayout() {
  return (
    <>
      <nav className='flex gap-4 text-sm font-medium p-2'>
        <Link to='/host'>Dashboard</Link>
        <Link to='/host/income'>Income</Link>
        <Link to='/host/reviews'>Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
}
