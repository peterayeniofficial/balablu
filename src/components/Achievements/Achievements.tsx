import React from 'react';
import Image from 'next/image';

function Achievements() {
  return (
    <div className='container my-24 mx-auto md:px-6'>
      <section className='mb-32'>
        <h2 className='mb-16 text-center text-2xl font-bold'>
          Latest Achievements
        </h2>

        <div className='mb-16 flex flex-wrap'>
          <div className='mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6'>
            <div
              className='ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <Image
                src='https://img.freepik.com/free-photo/empty-hallway-background_23-2149408813.jpg?w=1480&t=st=1694084287~exp=1694084887~hmac=b3a8d1c13847ea98e2701858c9051ed7f302e14e3fc84eed235fb5f9b757ecd5'
                className='w-full'
                alt='Louvre'
                width={200}
                height={200}
              />
              <a href='#!'>
                <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
              </a>
            </div>
          </div>

          <div className='w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6'>
            <h3 className='mb-4 text-2xl font-bold'>
              Building 1000 schools all over the country
            </h3>
            <div className='mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='2'
                stroke='currentColor'
                className='mr-2 h-5 w-5'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25'
                />
              </svg>
              construction
            </div>
            <p className='mb-6 text-sm text-neutral-500 dark:text-neutral-400'>
              Published <u>14.01.2022</u> by
              <a href='#!'>Lisa McCartney</a>
            </p>
            <p className='mb-6 text-neutral-500 dark:text-neutral-300'>
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p>
            <p className='text-neutral-500 dark:text-neutral-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
              nulla saepe rerum aspernatur odio amet perferendis tempora
              mollitia? Ratione unde magni omnis quaerat blanditiis cumque
              dolore placeat rem dignissimos?
            </p>
          </div>
        </div>

        <div className='mb-16 flex flex-wrap lg:flex-row-reverse'>
          <div className='mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6'>
            <div
              className='ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <Image
                src='https://img.freepik.com/free-vector/job-hunting_23-2147503011.jpg?w=1060&t=st=1694085124~exp=1694085724~hmac=daaf215a957f36f5e0c6126f66a20cb809f5e2a5f3ecb5d281acfbfc0e94453c'
                className='w-full'
                alt='Louvre'
                width={200}
                height={200}
              />
              <a href='#!'>
                <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
              </a>
            </div>
          </div>

          <div className='w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6'>
            <h3 className='mb-4 text-2xl font-bold'>100K Job opportunities</h3>
            <div className='mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='mr-2 h-5 w-5'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
                />
              </svg>
              Job opportunities
            </div>
            <p className='mb-6 text-sm text-neutral-500 dark:text-neutral-400'>
              Published <u>12.01.2022</u> by
              <a href='#!'>Anna Doe</a>
            </p>
            <p className='text-neutral-500 dark:text-neutral-300'>
              Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
              dui, sit amet rutrum enim massa in ante. Curabitur in justo at
              lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi
              vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus
              vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
              tortor finibus, a eleifend lectus dictum. Cras tempor convallis
              magna id rhoncus. Suspendisse potenti. Nam mattis faucibus
              imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus
              at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
              felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
              iaculis est vehicula ut.
            </p>
          </div>
        </div>

        <div className='flex flex-wrap'>
          <div className='mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6'>
            <div
              className='ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              <Image
                src='https://img.freepik.com/free-vector/graph-chart-with-moving-up-arrow-stock-market-financial-investment-diagram-blue-background_56104-1814.jpg?w=1800&t=st=1694084588~exp=1694085188~hmac=56c744e2fa38c4ced7cb2c0d49bffe92031c64ac6b4d81e57f049b860ec001fb'
                className='w-full'
                alt='Louvre'
                width={200}
                height={200}
              />
              <a href='#!'>
                <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
              </a>
            </div>
          </div>

          <div className='w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6'>
            <h3 className='mb-4 text-2xl font-bold'>
              70% Growth in the country&apos;s economy
            </h3>
            <div className='mb-4 flex items-center text-sm font-medium text-yellow-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='2'
                stroke='currentColor'
                className='mr-2 h-5 w-5'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
                />
              </svg>
              Business and Economics
            </div>
            <p className='mb-6 text-sm text-neutral-500 dark:text-neutral-400'>
              Published <u>10.01.2022</u> by
              <a href='#!'>Joe Svan</a>
            </p>
            <p className='text-neutral-500 dark:text-neutral-300'>
              Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
              tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
              Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
              augue ornare. Proin ac dui vel lectus eleifend vestibulum et
              lobortis risus. Nullam in commodo sapien.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Achievements;
