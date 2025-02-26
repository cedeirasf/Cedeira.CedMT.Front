import { Controller, useFormContext } from "react-hook-form";
import { InputError } from "./InputError";
import { cn } from "@/lib/utils";
import { CalendarDatePicker } from "@/components/calendar-date-picker";

interface Props<T> {
  label: string;
  name: keyof T;
}

export function CalendarRangeInput<T>({ label, name }: Props<T>) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name as string}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="periodo"
            className={cn(
              "text-sm font-medium text-foreground",
              error && "text-destructive"
            )}
          >
            {label}
          </label>
          <CalendarDatePicker date={value} onDateSelect={onChange} />
          <InputError error={error} />
        </div>
      )}
    />
  );
}
