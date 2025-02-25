import type { StepsProps } from "@/types/component/steps.component.types";
import { cn } from "@/lib/utils";

export const Steps = ({ steps, currentStep, className }: StepsProps) => {
  return (
    <div className={cn("flex justify-between", className)}>
      {steps.map((step, index) => (
        <div key={step.title} className="flex flex-col items-center">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
              index + 1 <= currentStep
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {index + 1}
          </div>
          <div className="text-center mt-2">
            <p className="text-sm font-medium">{step.title}</p>
            <p className="text-xs text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
