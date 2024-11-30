export type TGenerateRequest = {
  prompt: string;
};

export type TGenerateResponse = {
  project_name: string;
  project_description: string;
  project_duration: string;
  project_budget: number;
  talents_required: Array<{
    job_title: string;
    budget_allocation: number;
    scope_of_work: string;
    url_redirect: string;
  }>;
};
