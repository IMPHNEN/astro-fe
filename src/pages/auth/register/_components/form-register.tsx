import { Button } from '@/components/ui/button';
import type { FC, ReactElement } from 'react';
import { useRegister } from '../_hooks/use-register';
import { InputText } from '@/components/ui/inputs/text';
import { Link } from 'react-router-dom';
import { ROUTE_URL } from '@/entities/constant';
import { Select } from '@/components/ui/inputs/select';

export const FormRegister: FC = (): ReactElement => {
  const { handler, options, form } = useRegister();
  return (
    <form
      className="gap-y-6 bg-white shadow-sm shadow-gray-100 flex flex-col border-0 sm:border rounded-lg w-full max-w-lg px-0 md:p-6"
      onSubmit={handler.onSubmit}
    >
      <div className="flex flex-col gap-y-1">
        <h1 className="font-semibold text-lg">Welcome</h1>
        <p className="text-sm text-gray-600">
          <strong className="text-black">Join IdeaGo</strong> - Where ideas meet
          great opportunities reality
        </p>
      </div>
      <div className="flex w-full gap-x-4">
        <InputText
          label="First Name"
          required
          control={form.control}
          name="first_name"
          placeholder="First"
        />
        <InputText
          type="text"
          label="Last Name"
          required
          placeholder="Last"
          control={form.control}
          name="last_name"
        />
      </div>
      <InputText
        label="Username"
        required
        control={form.control}
        name="username"
        placeholder="yourusername"
      />
      <InputText
        type="email"
        label="Email"
        required
        control={form.control}
        name="email"
        placeholder="your@email.com"
      />
      <Select
        label="Role"
        required
        control={form.control}
        name="role"
        options={options.roleOptions}
      />
      <InputText
        type="password"
        label="Password"
        required
        placeholder="*********"
        control={form.control}
        name="password"
      />
      <InputText
        type="password"
        label="Confirm Password"
        required
        placeholder="*********"
        control={form.control}
        name="password_confirmation"
      />

      <Button
        disabled={form.formState.isSubmitting || !form.formState.isValid}
        className="mt-4"
      >
        Sign Up
      </Button>
      <p className="text-center text-sm text-gray-400">
        Already have account?{' '}
        <Link to={ROUTE_URL.AUTH.LOGIN} className="text-primary">
          Sign In
        </Link>
      </p>
    </form>
  );
};
