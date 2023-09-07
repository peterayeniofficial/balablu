import React from 'react';
import SinglePromise from './SinglePromise';

function PlansStatus() {
  return (
    <div className='w-full max-w-2xl px-4'>
      <div className=' rounded-lg border pb-6 border-gray-200'>
        <div className='flex items-center border-b border-gray-200 justify-between px-6 py-3'>
          <p className='text-sm lg:text-xl font-semibold leading-tight text-gray-800'>
            Pending Promises
          </p>
          <div className='flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-gray-100'>
            <p className='text-xs md:text-sm leading-none text-gray-600'>
              Filter by: Latest
            </p>
          </div>
        </div>
        <div className='px-6 pt-6 overflow-x-auto'>
          <table className='w-full whitespace-nowrap'>
            <tbody>
              <SinglePromise
                title='Affordable Healthcare for All'
                date={new Date()}
                desciption='Ensuring quality healthcare accessible to every citizen.'
                state='Pending'
                vote='2000 votes'
              />
              <SinglePromise
                title='Green Energy Revolution'
                date={new Date()}
                desciption='Transitioning to 100% clean energy, creating green jobs.'
                state='Completed'
                vote='2000 votes'
              />
              <SinglePromise
                title='Stronger Economy, Better Jobs'
                date={new Date()}
                desciption='Promoting small businesses and job growth.'
                state='Completed'
                vote='2000 votes'
              />
              <SinglePromise
                title='Safer Communities, Criminal Justice Reform'
                date={new Date()}
                desciption='Equitable law enforcement and prison system reform.'
                state='Completed'
                vote='2000 votes'
              />
              <SinglePromise
                title='Stronger Economy, Better Jobs'
                date={new Date()}
                desciption='Promoting small businesses and job growth.'
                state='Closed'
                vote='2000 votes'
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlansStatus;
