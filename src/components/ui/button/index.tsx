import type { FC, ReactElement } from 'react';
import type { TButton } from './type';
import { clsx } from 'clsx';
import { cn } from '@/utils/cn';

export const Button: FC<TButton> = (props): ReactElement => {
  const { variant = 'primary', className, ...rest } = props;
  const classNameQuery = clsx(
    'py-3 px-4 w-full text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-md',
    {
      'bg-black text-white': variant === 'primary',
      'bg-secondary text-black': variant === 'secondary',
    }
  );
  return <button className={cn(classNameQuery, className)} {...rest}></button>;
};
