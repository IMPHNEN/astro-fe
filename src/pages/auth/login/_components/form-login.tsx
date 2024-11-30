import { Button } from '@/components/ui/button';
import type { FC, ReactElement } from 'react';
import { useLogin } from '../_hooks/use-login';
import { InputText } from '@/components/ui/inputs/text';
import { Link } from 'react-router-dom';
import { ROUTE_URL } from '@/entities/constant';

export const FormLogin: FC = (): ReactElement => {
  const { handler, isPending, form } = useLogin();
  return (
    <form
      className="gap-y-6 bg-white shadow-sm shadow-gray-100 flex flex-col border-0 sm:border rounded-lg w-full max-w-lg px-0 md:p-6"
      onSubmit={handler.onSubmit}
    >
      <div className="flex flex-col gap-y-1">
        <h1 className="font-semibold text-lg">Welcome Back</h1>
        <p className="text-sm text-gray-600">
          Return to where ideas transform into reality
        </p>
      </div>
      <InputText
        label="Email"
        required
        control={form.control}
        name="email"
        placeholder="your@email.com"
      />
      <InputText
        type="password"
        label="Password"
        required
        placeholder="*********"
        control={form.control}
        name="password"
      />
      <Button
        disabled={
          form.formState.isSubmitting || !form.formState.isValid || isPending
        }
        className="mt-4"
      >
        {isPending ? 'Loading...' : 'Sign in'}
      </Button>
      <p className="text-center text-sm text-gray-400">
        Don&apos;t have an account?{' '}
        <Link to={ROUTE_URL.AUTH.REGISTER} className="text-primary">
          Sign up
        </Link>
      </p>
    </form>
  );
};
