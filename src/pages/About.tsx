import { Link } from 'react-router-dom';

import bgImg from '../assets/images/about-hero.png';

export default function About() {
  return (
    <div className='bg-amber-50 py-1'>
      <img src={bgImg} className='about-hero-image' />
      <div className='flex flex-col gap-5 mx-2 my-5 text-sm font-medium'>
        <h1 className='text-xl font-bold leading-tight'>Don't squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>
      <div className='bg-orange-300 p-2 mx-2 flex flex-col gap-2'>
        <h2 className='font-bold text-lg'>Your destination is waiting.<br />Your van is ready.</h2>
        <Link className='bg-black text-white px-5 py-2 font-semibold w-fit rounded-md' to='/vans'>Explore our vans</Link>
      </div>
    </div>
  );
}
