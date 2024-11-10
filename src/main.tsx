import './index.css';
import './server';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Vans from './pages/Vans';

function App() {
  return (
    <BrowserRouter>
      <header className='bg-amber-50 flex justify-between items-center px-2 py-4'>
        <Link className='text-xl font-extrabold' to='/'>#VANLIFE</Link>
        <nav className='text-sm font-medium flex gap-5'>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
