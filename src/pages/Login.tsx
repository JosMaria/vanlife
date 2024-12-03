import {
    ActionFunctionArgs, Form, LoaderFunctionArgs, redirect, useActionData, useLoaderData,
    useNavigation
} from 'react-router-dom';

import { loginUser } from '../api';

export function loader({ request }: LoaderFunctionArgs) {
  return new URL(request.url).searchParams.get('message');
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const pathname = new URL(request.url).searchParams.get('redirectTo') ?? '/host';
  
  try {
    await loginUser({ email, password });
    localStorage.setItem('loggedin', 'true');
    return redirect(pathname);

  } catch (err) {
    const errorResp = err as { message: string }
    return errorResp.message;
  }
}

export default function Login() {
  const errorMessage = useActionData() as string;
  const message = useLoaderData() as string;
  const navigation = useNavigation();

  return (
    <div className='p-2 flex flex-col items-center gap-5'>
      <h1 className='text-center text-2xl font-bold'>Sign in to your account</h1>
      {message && <h2 className='font-semibold text-lg text-red-500'>{message}</h2>}
      {errorMessage && <h3 className='font-semibold text-lg text-red-500'>{errorMessage}</h3>}
      <Form className='flex flex-col gap-3 w-72' method='post' replace>
        <input
          className='p-1.5 text-sm outline-none ring-blue-500 focus:ring-2 rounded-sm'
          name='email'
          type='email'
          placeholder='Email address'
        />
        <input
          className='p-1.5 text-sm outline-none ring-blue-500 focus:ring-2 rounded-sm'
          name='password'
          type='password'
          placeholder='Password'
        />
        <button
          className={`p-1.5 bg-orange-400 text-white font-bold rounded ${navigation.state === 'submitting' && 'cursor-wait bg-orange-600'}`}
          type='submit'
          disabled={status === 'submitting'}
        >
          {navigation.state === 'submitting' ? 'Log in...' : 'Log in'}
        </button>
      </Form>
    </div>
  )
}
