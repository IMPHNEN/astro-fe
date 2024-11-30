import type { AxiosError } from 'axios';

export type TResponse<T = unknown> = {
  success?: boolean;
  message?: string;
  current_page?: number;
  data?: T;
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  links?: Array<{
    url?: string | null;
    label?: string;
    active?: boolean;
  }>;
  next_page_url?: string | null;
  path?: string;
  per_page?: number;
  prev_page_url?: string | null;
  to?: number;
  total?: number;
};

export type TResponseError = AxiosError<TResponseItem>;

export type TResponseItem = {
  message?: string;
  success?: boolean;
};