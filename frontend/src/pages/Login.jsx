import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-[400px] m-auto mt-14 gap-4 text-gray-800 border border-gray-300  shadow-md p-6'>
      <div className='inline-flex items-center gap-2 mb-2'>
        <p className='text-3xl font-semibold prata-regular'>{state === 'Sign Up' ? 'Sign Up' : 'Login'}</p>
        <hr className='w-8 h-[1.5px] border-none bg-gray-800'/>
      </div>
        
      {
        state === 'Sign Up'
        &&
        <input className='border border-gray-300 w-full p-2 mt-1 focus:border-gray-500' type="text" placeholder='Full Name' 
          onChange={(e) => setName(e.target.value)} value={name} required/>
      }

      <input className='border border-gray-300 w-full p-2 mt-1 focus:border-gray-500' type="email" placeholder='Email' 
        onChange={(e) => setEmail(e.target.value)} value={email} required/>
    
      <input className='border border-gray-300 w-full p-2 mt-1 focus:border-gray-500' type="password" placeholder='Password' 
        onChange={(e) => setPassword(e.target.value)} value={password} required/>
    
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
        state === 'Sign Up'
        ?
        <p onClick={() => setState('Login')} className='cursor-pointer'>Login here</p>
        :
        <p onClick={() => setState('Sign Up')} className='cursor-pointer'>Create account</p>
        }
      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>

    </form>
  )
}

export default Login;
