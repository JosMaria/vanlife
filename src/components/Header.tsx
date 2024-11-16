import { Link, NavLink } from 'react-router-dom';

import imageUrl from '../assets/images/avatar-icon.png';

export default function Header() {
  return (
    <header className='flex justify-between items-center px-2 py-4'>
      <Link className='text-xl font-extrabold' to='/'>#VANLIFE</Link>
      <nav className='text-sm font-medium flex items-center gap-4'>
        <NavLink to='host' className={({ isActive }) => isActive ? 'underline underline-offset-4 font-bold' : undefined}>Host</NavLink>
        <NavLink to='about' className={({ isActive }) => isActive ? 'underline underline-offset-4 font-bold' : undefined}>About</NavLink>
        <NavLink to='vans' className={({ isActive }) => isActive ? 'underline underline-offset-4 font-bold' : undefined}>Vans</NavLink>
        <Link to='login'>
          <img src={imageUrl} alt="" width={16} />
        </Link>
      </nav>
    </header>
  );
}
