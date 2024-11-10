import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { VanType } from '../types';

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState<VanType | null>(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then((data: { vans: VanType }) => setVan(data.vans));

  }, [params.id]);

  return (
    <div className='p-3'>
      {
        van ? (
          <div className='flex flex-col gap-5'>
            <img src={van.imageUrl} alt={van.name} />
            <article className='flex flex-col gap-3'>
              <p className={`${van.type === 'simple' ? 'bg-orange-500' : van.type === 'rugged' ? 'bg-emerald-600' : 'bg-slate-700'} text-sm font-semibold text-white w-fit px-3 py-1 rounded`}>{van.type}</p>
              <h1 className='text-2xl font-bold'>{van.name}</h1>
              <p className='font-bold'>${van.price}<span className='font-normal'>/day</span></p>
              <p className='text-sm font-medium'>{van.description}</p>
              <button className='p-1.5 bg-orange-500 text-white font-semibold w-full'>Rent this van</button>
            </article>


          </div>
        ) : <h2>Loading...</h2>
      }

    </div>
  );
}
