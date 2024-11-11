import { NavLink, Outlet } from 'react-router-dom';

export default function HostLayout() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  };

  return (
    <>
      <nav className='flex gap-5 text-sm font-medium p-2'>
        <NavLink
          to='/host'
          end
          style={({ isActive }) => isActive ? activeStyles : undefined}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='/host/income'
          style={({ isActive }) => isActive ? activeStyles : undefined}
        >
          Income
        </NavLink>
        <NavLink
          to='/host/vans'
          style={({ isActive }) => isActive ? activeStyles : undefined}
        >
          Vans
        </NavLink>
        <NavLink
          to='/host/reviews'
          style={({ isActive }) => isActive ? activeStyles : undefined}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
