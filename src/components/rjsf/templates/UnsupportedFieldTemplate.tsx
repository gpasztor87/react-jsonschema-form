import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type UnsupportedFieldProps,
} from "@rjsf/utils";

export function UnsupportedFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: UnsupportedFieldProps<T, S, F>) {
  const { schema, reason } = props;

  return (
    <div>
      {reason}
      {schema && <pre>{JSON.stringify(schema, null, 2)}</pre>}
    </div>
  );
}
