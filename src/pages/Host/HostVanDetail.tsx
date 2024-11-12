import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

import { VanType } from '../../types';

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState<VanType | null>(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then((data: { vans: VanType }) => setCurrentVan(data.vans))
  }, [id]);

  if (!currentVan) {
    return <p>Loading...</p>
  }

  return (
    <>
      {<div className='bg-white p-3 flex flex-col gap-4'>
        <article className='flex items-center gap-5'>
          <img className='w-28' src={currentVan.imageUrl} alt={currentVan.name} />
          <div className='flex flex-col gap-1'>
            <p className={`${currentVan.type === 'simple' ? 'bg-orange-500' : currentVan.type === 'rugged' ? 'bg-emerald-600' : 'bg-slate-600'} font-semibold text-white w-fit px-3 py-1 rounded-sm text-xs`}>{currentVan.type}</p>
            <h2 className='text-lg font-bold'>{currentVan.name}</h2>
            <p className='text-sm font-bold'>${currentVan.price}<span className='font-normal'>/day</span></p>
          </div>
        </article>
        <nav className='flex gap-5 text-sm font-medium text-slate-500'>
          <NavLink
            to={`/host/vans/${id}/details`}
            className={({ isActive }) => isActive ? 'text-black underline' : undefined}
          >
            Details
          </NavLink>
          <NavLink
            to={`/host/vans/${id}/pricing`}
            className={({ isActive }) => isActive ? 'text-black underline' : undefined}
          >
            Pricing
          </NavLink>
          <NavLink
            to={`/host/vans/${id}/photos`}
            className={({ isActive }) => isActive ? 'text-black underline' : undefined}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet />
      </div>
      }
    </>
  );
}
