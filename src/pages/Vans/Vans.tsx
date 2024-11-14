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
      <Link 
        className='flex flex-col gap-1' 
        to={van.id}
        state={{ search: `?${searchParams.toString()}` }}
      >
        <img src={van.imageUrl} alt={van.name} width={130} />
        <h3 className='font-bold'>{van.name}</h3>
        <p className='font-bold'>${van.price}<span className='font-normal'>/day</span></p>
        <p className={`${van.type === 'simple' ? 'bg-orange-500' : van.type === 'rugged' ? 'bg-emerald-600' : 'bg-slate-600'} font-semibold text-white w-fit px-2 py-0.5 rounded-sm text-xs`}>{van.type}</p>
      </Link>
    </div>
  ));

  function handleFilterChange(key: string, value: string | null) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className='flex flex-col gap-2 p-2'>
      <h1 className='font-bold text-xl'>Explore our van options</h1>
      <div className='font-semibold text-xs flex gap-3'>
        <button
          className={`${typeFilter === 'simple' ? 'bg-orange-500 text-white' : undefined} py-0.5 px-2 rounded`}
          onClick={() => handleFilterChange('type', 'simple')}
        >
          Simple
        </button>
        <button
          className={`${typeFilter === 'luxury' ? 'bg-slate-600 text-white' : undefined} py-0.5 px-2 rounded`}
          onClick={() => handleFilterChange('type', 'luxury')}
        >
          Luxury
        </button>
        <button
          className={`${typeFilter === 'rugged' ? 'bg-emerald-600 text-white' : undefined} py-0.5 px-2 rounded`}
          onClick={() => handleFilterChange('type', 'rugged')}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            className='py-0.5 px-2 rounded underline'
            onClick={() => handleFilterChange('type', null)}
          >
            Clear Filters
          </button>
        )}
      </div>
      <section className='w-full flex flex-wrap justify-between gap-5'>
        {vansElements}
      </section>
    </div>
  )
}
