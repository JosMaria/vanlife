import { NavLink, Outlet } from 'react-router-dom';

const activeStyles = {
  fontWeight: 'bold',
  textDecoration: 'underline',
  color: '#161616'
};

export default function HostLayout() {
  return (
    <>
      <nav className='flex gap-5 text-sm font-medium p-2'>
        <NavLink
          to='.'
          end
          style={({ isActive }) => isActive ? activeStyles : undefined}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='income'
          style={({ isActive }) => isActive ? activeStyles : undefined}
        >
          Income
        </NavLink>
        <NavLink
          to='vans'
          style={({ isActive }) => isActive ? activeStyles : undefined}
        >
          Vans
        </NavLink>
        <NavLink
          to='reviews'
          style={({ isActive }) => isActive ? activeStyles : undefined}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
