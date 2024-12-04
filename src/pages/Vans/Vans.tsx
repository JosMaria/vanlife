import {
  Await, defer, Link, LoaderFunctionArgs, useLoaderData, useSearchParams
} from 'react-router-dom';

import { getVans } from '../../api';
import { VanType } from '../../types';
import { requireAuth } from '../../utils';
import React from 'react';

type DeferReturnType = {
  vansPromise: Promise<{ vans: VanType[] }>
};

export async function loader(loaderArgs: LoaderFunctionArgs) {
  await requireAuth(loaderArgs);
  return defer({ vansPromise: getVans() });
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vansDeferred = useLoaderData() as DeferReturnType;

  const typeFilter = searchParams.get('type');

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
      <React.Suspense fallback={<p>Loading...</p>}>
        <Await resolve={vansDeferred.vansPromise}>
          {(vansLoaded: VanType[]) => {
            const displayedVans = typeFilter ? vansLoaded.filter(van => van.type === typeFilter.toLowerCase()) : vansLoaded;

            const vansElements = displayedVans.map(van => (
              <div className='bg-orange-100 p-1.5 leading-tight text-sm' key={van.id}>
                <Link
                  className='flex flex-col gap-1'
                  to={van.id}
                  state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
                >
                  <img src={van.imageUrl} alt={van.name} width={120} />
                  <h3 className='font-bold'>{van.name}</h3>
                  <p className='font-bold'>${van.price}<span className='font-normal'>/day</span></p>
                  <p className={`${van.type === 'simple' ? 'bg-orange-500' : van.type === 'rugged' ? 'bg-emerald-600' : 'bg-slate-600'} font-semibold text-white w-fit px-2 py-0.5 rounded-sm text-xs`}>{van.type}</p>
                </Link>
              </div>
            ));

            return (
              <>
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
                <section className='w-full flex flex-wrap justify-evenly gap-5 p-2'>
                  {vansElements}
                </section>
              </>
            );
          }}
        </Await>
      </React.Suspense>
    </div >
  )
}
