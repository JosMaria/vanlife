import React from 'react';
import { Await, defer, Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

import { getHostVans } from '../../api';
import { VanType } from '../../types';
import { requireAuth } from '../../utils';

type HostVanType = Pick<VanType, 'id' | 'imageUrl' | 'name' | 'price'>;

type HostVansDeferType = {
  hostVansPromise: Promise<{ hostVans: HostVanType[] }>
};

export async function loader(loaderArgs: LoaderFunctionArgs) {
  await requireAuth(loaderArgs);
  return defer({ hostVansPromise: getHostVans() });
}

export default function HostVans() {
  const hostVansDeferred = useLoaderData() as HostVansDeferType;

  function renderHostVansElems(hostVans: HostVanType[]) {
    const hostVansElems = hostVans.map(van => (
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
      <div className='flex flex-col gap-5'>
        {hostVansElems}
      </div>
    );
  }

  return (
    <section className='p-2 flex flex-col gap-3'>
      <h1 className='font-bold text-xl leading-none'>Your listed vans</h1>
      <React.Suspense fallback={<p>Cargando host van page...</p>}>
        <Await resolve={hostVansDeferred.hostVansPromise}>
          {(hostVans: HostVanType[]) => renderHostVansElems(hostVans)}
        </Await>
      </React.Suspense>
    </section>
  );
}
