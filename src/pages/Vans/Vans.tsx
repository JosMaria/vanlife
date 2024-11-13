import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { VanType } from '../../types';

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = React.useState<VanType[]>([]);

  const typeFilter = searchParams.get('type');

  React.useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then((data: { vans: VanType[] }) => setVans(data.vans));
  }, []);


  const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter.toLowerCase()) : vans;

  const vansElements = displayedVans.map(van => (
    <div className='bg-orange-100 p-1.5 leading-tight text-sm' key={van.id}>
      <Link to={`/vans/${van.id}`} className='flex flex-col gap-1'>
        <img src={van.imageUrl} alt={van.name} width={130} />
        <h3 className='font-bold'>{van.name}</h3>
        <p className='font-bold'>${van.price}<span className='font-normal'>/day</span></p>
        <p className={`${van.type === 'simple' ? 'bg-orange-500' : van.type === 'rugged' ? 'bg-emerald-600' : 'bg-slate-600'} font-semibold text-white w-fit px-2 py-0.5 rounded-sm text-xs`}>{van.type}</p>
      </Link>
    </div>
  ));

  return (
    <div className='flex flex-col gap-2 p-2'>
      <h1 className='font-bold text-xl'>Explore our van options</h1>
      <div className='text-xs flex gap-3'>
        <button onClick={() => setSearchParams({ type: 'simple' })}>Simple</button>
        <button onClick={() => setSearchParams({ type: 'luxury' })}>Luxury</button>
        <button onClick={() => setSearchParams({ typ: 'rugged' })}>Rugged</button>
        <button onClick={() => setSearchParams({})}>Clear Filters</button>
      </div>
      <section className='w-full flex flex-wrap justify-between gap-5'>
        {vansElements}
      </section>
    </div>
  )
}
