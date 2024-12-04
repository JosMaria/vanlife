import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className='m-7 flex flex-col gap-5 font-bold'>
      <h1 className='text-2xl'>Sorry, the page you were looking for was not found.</h1>
      <Link className='px-2 py-2 text-center bg-black text-white rounded' to='/'>Return to Home</Link>
    </section>
  );
}
