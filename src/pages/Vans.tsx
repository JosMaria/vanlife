import React from 'react';
import { Link } from 'react-router-dom';

import { VanType } from '../types';

export default function Vans() {
  const [vans, setVans] = React.useState<VanType[]>([]);

  React.useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then((data: { vans: VanType[] }) => setVans(data.vans));
  }, []);

  const vansElements = vans.map(van => (
    <div className='bg-orange-100 max-w-32 p-1.5 leading-tight text-sm' key={van.id}>
      <Link to={`/vans/${van.id}`} className='flex flex-col gap-1'>
        <img src={van.imageUrl} alt={van.name} />
        <h3 className='font-bold'>{van.name}</h3>
        <p className='font-bold'>${van.price}<span className='font-normal'>/day</span></p>
        <p className={`${van.type === 'simple' ? 'bg-orange-500' : van.type === 'rugged' ? 'bg-emerald-600' : 'bg-slate-600'} font-semibold text-white w-fit px-3 py-1 rounded-sm`}>{van.type}</p>
      </Link>
    </div>
  ));

  return (
    <div className='flex flex-col gap-2 p-2'>
      <h1 className='font-bold text-xl'>Explore our van options</h1>
      <section className='w-full flex flex-wrap justify-around gap-5'>
        {vansElements}
      </section>
    </div>
  )
}
