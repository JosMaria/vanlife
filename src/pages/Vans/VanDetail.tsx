import { Link, LoaderFunctionArgs, useLoaderData, useLocation } from 'react-router-dom';

import { getVans } from '../../api';
import { VanType } from '../../types';

export function loader({ params }: LoaderFunctionArgs) {
  return getVans(params.id);
}

export default function VanDetail() {
  const { state } = useLocation();
  const van = useLoaderData() as Omit<VanType, 'hostId'>;

  return (
    <div className='flex flex-col gap-5 p-2'>
      <Link
        className='flex items-baseline gap-0.5'
        relative='path'
        to={`..${state.search}`}
      >
        <span className='text-xl font-bold leading-none'>&larr;</span>
        <span className='text-sm font-medium underline active:text-slate-600'>
          Back to {state?.type || 'all'} vans
        </span>
      </Link>
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
    </div>
  );
}
