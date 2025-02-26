import { UseFormReturn, FormProvider as Form } from "react-hook-form";

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: any;
  className?: string;
  style?: React.CSSProperties;
};

export default function FormProvider({
  children,
  onSubmit,
  className,
  methods,
  style,
}: Props) {
  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={style}
        className={className}
      >
        {children}
      </form>
    </Form>
  );
}
