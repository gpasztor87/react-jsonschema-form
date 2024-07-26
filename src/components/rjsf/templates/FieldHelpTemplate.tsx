import {
  type FieldHelpProps,
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  helpId,
} from "@rjsf/utils";

export function FieldHelpTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldHelpProps<T, S, F>) {
  const { help, idSchema } = props;

  if (help === undefined) {
    return null;
  }

  const id = helpId<T>(idSchema);
  return (
    <p id={id} className="text-sm text-muted-foreground">
      {help}
    </p>
  );
}
