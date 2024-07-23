import { type FieldErrorProps, errorId } from "@rjsf/utils";

import { FormMessage } from "@/components/ui/form";

export function FieldErrorTemplate(props: FieldErrorProps) {
  const { errors, idSchema } = props;

  if (errors === undefined || errors.length === 0) return null;
  const id = errorId(idSchema);
  return (
    <div id={id}>
      {errors.map((error, i) => (
        <FormMessage key={i} id={`${id}-${i}`}>
          {error}
        </FormMessage>
      ))}
    </div>
  );
}
