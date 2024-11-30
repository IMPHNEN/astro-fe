import type { FC, ReactElement, ReactNode } from 'react';

export type TInputWrap = {
  label: string;
  children: ReactNode;
  message?: string | undefined;
  required?: boolean;
};

export const InputWrap: FC<TInputWrap> = (props): ReactElement => {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <label className="text-sm font-medium text-gray-600">
        {props.required ? (
          <>
            {props.label}
            <span className="text-red-400"> *</span>
          </>
        ) : (
          props.label
        )}
      </label>
      {props.children}
      {props.message ? (
        <span className="text-red-400 text-xs mt-[-4px]">{props.message}</span>
      ) : null}
    </div>
  );
};
