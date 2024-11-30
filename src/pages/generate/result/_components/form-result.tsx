import type { TGenerateResponse } from '@/api/generate/type';
import type { FC, ReactElement } from 'react';
import { InputText } from '@/components/ui/inputs/text';
import { useForm } from 'react-hook-form';

import { Plus, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InputField } from '../../_components/input-field';

export const FormResult: FC = (): ReactElement => {
  const form = useForm<TGenerateResponse>();
  console.log(form.watch());
  return (
    <div className="w-full sm:w-9/12 mx-auto rounded-none md:rounded-md p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form className="my-8" method="POST">
        <div className="mb-4 max-w-3xl">
          <InputText
            label="Project Name"
            required
            control={form.control}
            name="project_name"
            placeholder="What is your project name?"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Project Description</label>
          <InputField
            required
            control={form.control}
            name="project_description"
            placeholder="Type your project description here..."
          />
        </div>
        <div className="mb-4">
          <InputText
            label="Project Duration"
            required
            control={form.control}
            name="project_duration"
          />
        </div>
        <div className="mb-4">
          <InputText
            label="Project Budget"
            required
            control={form.control}
            name="project_budget"
            className="w-fit"
          />
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-row items-baseline justify-between">
          <h2 className="font-semibold text-lg mt-6 text-neutral-800 dark:text-neutral-200">
            Talents required
          </h2>
          <Button type="button" onClick={() => {}}>
            <Plus /> Add Talent
          </Button>
        </div>

        <section className="border px-4 rounded-md my-4">
          <div className="flex flex-row items-baseline justify-between">
            <h2 className="font-semibold text-base my-4 text-neutral-800 dark:text-neutral-200">
              Job title
            </h2>
            <div>
              <Button type="button" onClick={() => {}} size={'sm'}>
                <Trash /> Delete
              </Button>
            </div>
          </div>
          <div className="mb-4">
            <InputText
              label="Budget Allocation"
              required
              control={form.control}
              name="talents_required.0.budget_allocation"
            />
          </div>
          <div className="mb-4">
            <InputText
              label="Scope of work"
              required
              control={form.control}
              name="talents_required.0.scope_of_work"
            />
          </div>
        </section>

        <Button
          disabled={form.formState.isSubmitting || !form.formState.isValid}
          className="mt-4"
        >
          Submit
        </Button>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] my-8"
          type="submit"
        >
          Create project
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
};
