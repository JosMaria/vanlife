import React from 'react';

import { VanType } from '../../types';
import { Link } from 'react-router-dom';

type CardType = Pick<VanType, 'id' | 'imageUrl' | 'name' | 'price'>

export default function HostVans() {
  const [vans, setVans] = React.useState<CardType[]>([]);

  React.useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then((data: { vans: CardType[] }) => setVans(data.vans));
  }, []);

  const hostVansEls = vans.map(van => (
    <Link 
      className='flex items-center gap-3 p-1 bg-white' 
      key={van.id}
      to={`/host/vans/${van.id}`}
    >
      <img className='w-20 rounded' src={van.imageUrl} alt={van.name} />
      <div>
        <h2 className='font-bold'>{van.name}</h2>
        <p className='font-bold'>${van.price}<span className='font-normal'>/day</span></p>
      </div>
    </Link>
  ));

  return (
    <section className='p-2 flex flex-col gap-3'>
      <h1 className='font-bold text-xl leading-none'>Your listed vans</h1>
        {vans.length > 0 ?
(          <div className='flex flex-col gap-5'>
            {hostVansEls}
          </div>
        ) : <h2>Loading...</h2>
        }
    </section>
  );
}
