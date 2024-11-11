import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-amber-50 flex justify-between items-center px-2 py-4'>
      <Link className='text-xl font-extrabold' to='/'>#VANLIFE</Link>
      <nav className='text-sm font-medium flex gap-5'>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </nav>
    </header>
  );
}
