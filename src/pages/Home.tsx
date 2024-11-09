import { Link } from 'react-router-dom';

import bgImg from '../assets/images/home-hero.jpg';

export default function Home() {
  return (
    <div className='text-white bg-contain bg-center flex flex-col gap-5 py-10 px-3' style={{ backgroundImage: `url(${bgImg})` }}>
      <h1 className='text-2xl font-extrabold'>You got the travel plans, we got the travel vans.</h1>
      <p className='text-sm font-medium text-justify'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Link className='bg-orange-400 text-sm font-semibold text-center py-2 rounded-md' to='vans'>Find your van</Link>
    </div>
  )
}
