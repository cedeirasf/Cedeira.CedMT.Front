export interface Step {
  title: string;
  description: string;
}

export interface StepsProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}
