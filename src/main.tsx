import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <header className='bg-amber-50 flex justify-between items-center px-2 py-4'>
        <Link className='text-xl font-extrabold' to='/'>#VANLIFE</Link>
        <nav className='text-sm font-medium'><Link to='/about'>About</Link></nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
