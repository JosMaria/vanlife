import { Link, useLoaderData } from 'react-router-dom';

import { getHostVans } from '../../api';
import { VanType } from '../../types';
import { requireAuth } from '../../utils';

export async function loader() {
  console.log('before required auth');
  await requireAuth();
  console.log('after required auth');
  return getHostVans();
}

export default function HostVans() {
  const vans = useLoaderData() as Pick<VanType, 'id' | 'imageUrl' | 'name' | 'price'>[];

  const hostVansEls = vans.map(van => (
    <Link
      className='flex items-center gap-3 p-1 bg-white'
      key={van.id}
      to={van.id}
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
      <div className='flex flex-col gap-5'>
        {hostVansEls}
      </div>
    </section>
  );
}
