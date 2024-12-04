import { useRouteError } from 'react-router-dom';

type ErrorType = {
  message: string;
  statusText: string;
  status: number;
};

export default function Error() {
  const error = useRouteError() as ErrorType;

  return (
    <div className='flex flex-col items-center gap-3 p-2'>
      <h1 className='text-xl font-bold text-center'>Error: {error.message}</h1>
      <pre>{error.status} - {error.statusText}</pre>
    </div>
  )
}