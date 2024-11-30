import { Public } from '@/libs/entry-point/is-authenticated';
import type { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { cn } from '@/utils/cn';

export const LayoutAuth: FC = (): ReactElement => {
  return (
    <Public>
      <section className="grid grid-cols-12 container mx-auto h-[calc(100svh-60px)] p-5">
        <div className="hidden lg:flex md:col-span-6">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg borde md:shadow-xl">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl tracking-tighter text-black dark:text-white">
              Idea<span className="font-medium">Go</span>
            </p>
            <br />
            <AnimatedGridPattern
              numSquares={50}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
                'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
              )}
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 h-full flex flex-col w-full justify-around items-cente px-8">
          <Outlet />
        </div>
      </section>
    </Public>
  );
};
