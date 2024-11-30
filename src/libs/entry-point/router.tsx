import { ROUTE_URL } from '@/entities/constant';
import { LayoutAuth } from '@/pages/auth/_components/layout-auth';
import { LoginPage } from '@/pages/auth/login/_page';
import { RegisterPage } from '@/pages/auth/register/_page';
import { GenerateLayout } from '@/pages/generate/_components/layout';
import { GeneratePage } from '@/pages/generate/_page';
import { GenerateResultPage } from '@/pages/generate/result/_page';
import { createBrowserRouter, redirect } from 'react-router-dom';

export const routes = createBrowserRouter([
  {
    path: ROUTE_URL.ROOT,
    loader: () => redirect(ROUTE_URL.AUTH.LOGIN),
  },
  {
    path: ROUTE_URL.GENERATE.ROOT,
    element: <GenerateLayout />,
    children: [
      {
        path: ROUTE_URL.GENERATE.ROOT,
        element: <GeneratePage />,
      },
    ],
  },
  {
    path: ROUTE_URL.GENERATE.RESULT,
    element: <GenerateResultPage />,
  },
  {
    path: ROUTE_URL.AUTH.ROOT,
    element: <LayoutAuth />,
    children: [
      {
        path: ROUTE_URL.AUTH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_URL.AUTH.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },
]);
