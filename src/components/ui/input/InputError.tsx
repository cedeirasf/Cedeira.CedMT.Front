import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface Props {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export const InputError = ({ error }: Props) => {
  if (!error) return null;
  return (
    <p className="mt-1 text-sm text-red-500">{error?.message as string}</p>
  );
};
