import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex justify-between items-center px-2 py-4'>
      <Link className='text-xl font-extrabold' to='/'>#VANLIFE</Link>
      <nav className='text-sm font-medium flex gap-5'>
        <NavLink to='/host' className={({ isActive }) => isActive ? 'underline underline-offset-4 font-bold' : undefined}>Host</NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'underline underline-offset-4 font-bold' : undefined}>About</NavLink>
        <NavLink to='/vans' className={({ isActive }) => isActive ? 'underline underline-offset-4 font-bold' : undefined}>Vans</NavLink>
      </nav>
    </header>
  );
}
