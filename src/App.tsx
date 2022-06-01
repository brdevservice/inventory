import React from 'react';

import './css/dist/app.css';

import Isologo from './assets/isologo.png';

function App() {
  return (
    <div className="mx-auto py-5">
      <img src={ Isologo } alt='GRAPPS' className='w-48 my-5 mx-auto' />
      <div className='p-6'>
        <h4 className="uppercase text-2xl text-center font-bold mb-4">
          Login
        </h4>
        <div className="w-4/12 mx-auto px-3 py-6 bg-gray-800 text-white">
          <form className='flex flex-col items-center'>
            <div className="relative">
              <label htmlFor="">User or Email</label>
              <input className='w-100 block' type="text" name="" id="" />
            </div>
            <div className="relative">
              <label htmlFor="">Password</label>
              <input className='w-100 block' type="password" name="" id="" />
            </div>
          </form>
        </div>
        <button type='button' className='bg-blue-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded'>
          Hello World
        </button>
        <div className='mt-16 p-5 border border-red-500 shadow-xl'>
          <p className='text-xl sm:text-xs break-all'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam cupiditate porro qui ipsa minus blanditiis voluptas, rem necessitatibus debitis dolore sunt neque, adipisci ipsum quod placeat fugit laboriosam possimus!
          </p>
        </div>
        <div className='grid grid-cols-3 gap-4 my-5'>
          <div className="bg-red-500">
            1
          </div>
          <div className="bg-red-500">
            2
          </div>
          <div className="bg-red-500">
            3
          </div>
          <div className="bg-red-500">
            4
          </div>
        </div>
        <div className='grid grid-cols-1 min:grid-cols-3 gap-4 my-5'>
          <div className="bg-blue-500">
            1
          </div>
          <div className="bg-blue-500">
            2
          </div>
          <div className="bg-blue-500">
            3
          </div>
          <div className="bg-blue-500">
            4
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4 my-5'>
          <div className="bg-green-500 col-span-2">
            1
          </div>
          <div className="bg-green-500">
            2
          </div>
          <div className="bg-green-500">
            3
          </div>
          <div className="bg-green-500 col-span-4">
            4
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
