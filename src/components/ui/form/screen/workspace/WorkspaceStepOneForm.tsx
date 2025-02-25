import type { IWorkspaceForm } from "@/types/form/workspace.form.types";
import { CalendarRangeInput } from "@/components/ui/input/CalendarRangeInput";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { WorkspaceLoadTypeEnum } from "@/types/enum/WorkspaceLoadTypeEnum";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Input } from "mtch-ui";
import { Controller, useFormContext } from "react-hook-form";
import { InputError } from "@/components/ui/input/InputError";

export const WorkspaceStepOneForm = () => {
  const { control, setValue, watch } = useFormContext<IWorkspaceForm>();

  const loadType = watch("loadType");

  const onChangeHash = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('hash',e.target.value)

    // Validar hash con llamado a la api con un debouce de 0.5s. Mientras la api responde, mostrar un spinner/bloquear input.
  }

  return (
    <div className="space-y-2">
      <Controller
        name="loadType"
        control={control}
        render={({ field: { value, onChange } }) => (
          <div className="flex flex-col gap-2">
            <RadioGroup
              value={value}
              onValueChange={onChange}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value={WorkspaceLoadTypeEnum.CUSTOM}
                  id="custom"
                />
                <Label htmlFor="custom">Período Personalizado</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={WorkspaceLoadTypeEnum.HASH} id="hash" />
                <Label htmlFor="hash">Utilizar Hash</Label>
              </div>
            </RadioGroup>
          </div>
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Input label="Nombre:" value={value} onChange={onChange} />
            <InputError error={error} />
          </>
        )}
      />
      {loadType === WorkspaceLoadTypeEnum.CUSTOM && (
        <CalendarRangeInput label="Período:" name="period" />
      )}
      {loadType === WorkspaceLoadTypeEnum.HASH && (
        <Controller
          control={control}
          name="hash"
          render={({ field: { value }, fieldState: { error } }) => (
            <>
              <Input label="Hash:" value={value} onChange={onChangeHash} />
              <InputError error={error} />
            </>
          )}
        />
      )}
    </div>
  );
};
