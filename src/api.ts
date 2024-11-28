import { VanType } from './types';

type VansResponseType = {
  vans: VanType[];
}

export async function getVans(id: string | null = null) {
  const url = id ? `/api/vans/${id}` : '/api/vans';
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data: VansResponseType = await res.json();
  return data.vans;
}
