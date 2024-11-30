import type { TGenerateResponse } from '@/api/generate/type';
import { useEffect, type FC, type ReactElement } from 'react';
import { InputText } from '@/components/ui/inputs/text';
import { useFieldArray, useForm } from 'react-hook-form';

import { Plus, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InputField } from '../../_components/input-field';
import { localStorageGenerateResult } from '@/libs/local-storage/generate-result';
import { usePostCreateProject } from '@/api/projects/hooks/use-post-create-project';
import type { TProjectCreateRequest } from '@/api/projects/type';
import { ROUTE_URL } from '@/entities/constant';
import { useNavigate } from 'react-router-dom';

export const FormResult: FC = (): ReactElement => {
  const navigate = useNavigate();
  const form = useForm<TGenerateResponse>();

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: 'talents_required',
  });

  const { mutate } = usePostCreateProject();

  useEffect(() => {
    if (!localStorageGenerateResult.getGenerateResult()) return;
    form.reset(localStorageGenerateResult.getGenerateResult());
  }, []);

  const onSubmit = form.handleSubmit((data) => {
    const payload: TProjectCreateRequest = {
      project_name: data.project_name,
      budget: String(data.project_budget),
      deadline: data.project_duration,
      description: data.project_description,
      proposal: new File([], 'proposal.pdf'),
      requirements: new File([], 'requirements.pdf'),
    };
    navigate(ROUTE_URL.PROJECTS.ROOT);
    mutate(payload, {
      onSuccess: () => {
        navigate(ROUTE_URL.PROJECTS.ROOT);
      },
    });
  });

  return (
    <div className="w-full sm:w-9/12 mx-auto rounded-none md:rounded-md p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form onSubmit={onSubmit} className="my-8" method="POST">
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

        <div className="flex flex-row items-baseline justify-between w-auto gap-x-6">
          <h2 className="font-semibold w-full max-w-fit text-lg mt-6 text-neutral-800 dark:text-neutral-200">
            Talents required
          </h2>
          <Button
            type="button"
            onClick={() =>
              append({
                budget_allocation: 0,
                scope_of_work: '',
                job_title: '',
                url_redirect: '',
              })
            }
          >
            <Plus /> Add Talent
          </Button>
        </div>

        {fields?.map((field, index) => (
          <section key={field.id} className="border px-4 rounded-md my-4">
            <div className="flex flex-row items-baseline justify-between">
              <h2 className="font-semibold text-base my-4 text-neutral-800 dark:text-neutral-200">
                Job title
              </h2>
              <div>
                <Button type="button" onClick={() => remove(index)} size={'sm'}>
                  <Trash /> Delete
                </Button>
              </div>
            </div>
            <div className="mb-4">
              <InputText
                key={field.id}
                label="Budget Allocation"
                required
                control={form.control}
                name={`talents_required.${index}.budget_allocation`}
              />
            </div>
            <div className="mb-4">
              <InputText
                label="Scope of work"
                required
                control={form.control}
                name={`talents_required.${index}.scope_of_work`}
              />
            </div>
          </section>
        ))}
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
