import React from 'react';

import './css/dist/app.css';

function App() {
  return (
    <div className="container mx-auto py-5">
      <h1 className='text-5xl mb-5 text-center uppercase'>
        Inventory
      </h1>
      <button type='button' className='bg-blue-700 sm:bg-orange-700 lg:bg-green-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'>
        Hello
      </button>
      <div className='mt-16 p-5 border border-red-500'>
        <p className='text-xl sm:text-xs'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam cupiditate porro qui ipsa minus blanditiis voluptas, rem necessitatibus debitis dolore sunt neque, adipisci ipsum quod placeat fugit laboriosam possimus!
        </p>
      </div>
    </div>
  );
}

export default App;
