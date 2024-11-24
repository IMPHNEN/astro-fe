"use client"
import React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Plus, Trash } from "lucide-react"
import projectData from "@/data/projects.json"

export default function ResultForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = "/project-list"
  }

  const project = projectData.projects[0]

  return (
    <div className="w-full sm:w-9/12 mx-auto rounded-none md:rounded-md p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form className="my-8" onSubmit={handleSubmit} method="POST">
        <LabelInputContainer className="mb-4 max-w-3xl">
          <Label htmlFor="project_name">Project Name</Label>
          <Input
            id="project_name"
            name="project_name"
            type="text"
            placeholder="What is your project name?"
            showAnimation={false}
            defaultValue={project.project_name}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="project_description">Project Description</Label>
          <Textarea
            placeholder="Type your project description here..."
            rows={6}
            className="flex w-full border bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           "
            defaultValue={project.project_description}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Project Duration</Label>
          <Input
            id="project_duration"
            name="project_duration"
            type="text"
            showAnimation={false}
            className="inline max-w-[150px]"
            min={0}
            defaultValue={project.project_duration}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="project_budget">Project Budget</Label>
          <div className="flex flex-row gap-2">
            <span className="self-center text-sm">$</span>
            <Input
              id="project_budget"
              name="project_budget"
              type="number"
              showAnimation={false}
              className="inline max-w-[200px]"
              min={0}
              defaultValue={project.project_budget}
            />
          </div>
        </LabelInputContainer>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-row items-baseline justify-between">
          <h2 className="font-semibold text-lg mt-6 text-neutral-800 dark:text-neutral-200">
            Talents required
          </h2>
          <Button type="button" onClick={() => {}} size={"sm"} className="pe-4">
            <Plus /> Add Talent
          </Button>
        </div>
        {project.talents_required.map((talent, index) => (
          <section className="border px-4 rounded-md my-4">
            <div className="flex flex-row items-baseline justify-between">
              <h2 className="font-semibold text-base my-4 text-neutral-800 dark:text-neutral-200">
                {talent.job_title}
              </h2>
              <div>
                <Button
                  type="button"
                  onClick={() => {}}
                  variant={"destructive"}
                  size={"sm"}
                >
                  <Trash /> Delete
                </Button>
              </div>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Budget Allocation</Label>
              <div className="flex flex-row gap-2">
                <span className="self-center text-sm">$</span>
                <Input
                  id="budget_allocation"
                  name="budget_allocation"
                  type="number"
                  showAnimation={false}
                  className="inline max-w-[200px]"
                  min={0}
                  defaultValue={talent.budget_allocation}
                />
              </div>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="scope_of_work">Scope of work</Label>
              <Textarea
                placeholder="Scope of work for this position..."
                rows={3}
                className="flex w-full border bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           "
                defaultValue={talent.scope_of_work}
              />
            </LabelInputContainer>
          </section>
        ))}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] my-8"
          type="submit"
        >
          Create project
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  )
}
