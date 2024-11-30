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

export async function getHostVans(vanId: string | null = null) {
  const url = vanId ? `/api/host/vans/${vanId}` : '/api/host/vans';
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: 'Failed to fetch host vans',
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data: VansResponseType = await res.json();
  return data.vans;
}

export async function loginUser(creds: { email: string; password: string }) {
  const res = await fetch('/api/login', { method: "post", body: JSON.stringify(creds) });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statustext: res.statusText,
      status: res.status
    }
  }

  return data;
}
