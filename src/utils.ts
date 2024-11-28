import { redirect } from 'react-router-dom';

export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    console.log('fuiste redireccionado?')
    return redirect('/login');
  }

  return null;
}
