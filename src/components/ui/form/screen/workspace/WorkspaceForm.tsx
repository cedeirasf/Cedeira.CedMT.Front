import type { IWorkspaceForm } from "@/types/form/workspace.form.types";
import { useForm } from "react-hook-form";
import { SchemaWorkspaceForm } from "@/lib/validation/workspace.validation.lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Steps } from "@/components/ui/steps/Steps";
import { useState } from "react";
import { WorkspaceStepOneForm } from "./WorkspaceStepOneForm";
import { Button } from "mtch-ui";
import { WorkspaceStepTwoForm } from "./WorkspaceStepTwoForm";
import FormProvider from "../../FormProvider";

interface Props {
  form: IWorkspaceForm;
  closeModal: () => void;
}

const steps = [
  {
    title: "Selección",
    description: "Proporcione los detalles del workspace",
  },
  { title: "Confirmación", description: "Revise y confirme su selección" },
];

export const WorkspaceForm = ({ form, closeModal }: Props) => {
  const [step, setStep] = useState(1);

  const methods = useForm<z.infer<typeof SchemaWorkspaceForm>>({
    defaultValues: form,
    resolver: zodResolver(SchemaWorkspaceForm),
  });

  const onSubmit = () => {
    nextStep();
  };

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  const onConfirm = () => {
    closeModal();
    // TODO: Implementar lógica de creación del workspace
    // NAVIGATE TO /dashboard/$entity/workspace/$hash
  };

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Steps currentStep={step} steps={steps} className="mb-8" />
      {step === 1 ? <WorkspaceStepOneForm /> : <WorkspaceStepTwoForm />}
      <div className="mt-4 flex justify-between">
        {step > 1 && (
          <Button type="button" variant="outline" onClick={prevStep}>
            Anterior
          </Button>
        )}
        {step < 2 ? (
          <Button type="submit" disabled={!methods.formState.isDirty}>
            Siguiente
          </Button>
        ) : (
          <Button onClick={onConfirm}>Confirmar</Button>
        )}
      </div>
    </FormProvider>
  );
};
