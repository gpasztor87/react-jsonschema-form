import type { FieldErrorProps } from "@rjsf/utils";

import { FormMessage } from "@/components/ui/form";

export function FieldErrorTemplate(props: FieldErrorProps) {
  const { errors } = props;

  if (errors === undefined || errors.length === 0) return null;

  return (
    <>
      {errors.map((error, i) => (
        <FormMessage key={i}>{error}</FormMessage>
      ))}
    </>
  );
}
