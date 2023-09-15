import React from 'react';
import SinglePromise from './SinglePromise';

function PlansStatus() {
  return (
    <div className='pl-5 max-w-2xl mt-20 text-sm md:text-base'>
      <div className='flex items-center  justify-between px-6 py-3  border-b border-white'>
        <p className='text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white'>
          Pending Promises
        </p>
      </div>
      <div className=' pt-6'>
        <table className='md:whitespace-nowrap whitespace-normal space-x-4'>
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
  );
}

export default PlansStatus;
