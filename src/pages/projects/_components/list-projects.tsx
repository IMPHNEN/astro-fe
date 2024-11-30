import { useGetAllProjects } from '@/api/projects/hooks/use-get-all-projects';
import type { FC, ReactElement } from 'react';

export const ListProjects: FC = (): ReactElement => {
  const { data } = useGetAllProjects();
  console.log(data);
  return <div>ListProjects</div>;
};
