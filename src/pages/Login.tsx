import React from 'react';

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: '', password: '' });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className='p-2 flex flex-col items-center gap-5'>
      <h1 className='text-center text-2xl font-bold'>Sign in to your account</h1>
      <form className='flex flex-col gap-3 w-72' onSubmit={handleSubmit}>
        <input
          className='p-1.5 text-sm outline-none ring-blue-500 focus:ring-2 rounded-sm'
          name='email'
          onChange={handleChange}
          type='email'
          placeholder='Email address'
          value={loginFormData.email}
        />
        <input
          className='p-1.5 text-sm outline-none ring-blue-500 focus:ring-2 rounded-sm'
          name='password'
          onChange={handleChange}
          type='password'
          placeholder='Password'
          value={loginFormData.password}
        />
        <button className='p-1.5 bg-orange-400 text-white font-bold rounded' type='submit'>Log in</button>
      </form>
    </div>
  )
}
