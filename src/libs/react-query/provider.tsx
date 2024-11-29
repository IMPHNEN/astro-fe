import { QueryClientProvider } from '@tanstack/react-query';
import type { FC, PropsWithChildren, ReactElement } from 'react';
import { queryClient } from './client';

export const ReactQueryProvider: FC<PropsWithChildren> = (
  props
): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};
