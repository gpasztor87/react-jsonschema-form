import {
  type FieldErrorProps,
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  errorId,
} from "@rjsf/utils";

export function FieldErrorTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldErrorProps<T, S, F>) {
  const { errors, idSchema } = props;

  if (errors === undefined || errors.length === 0) {
    return null;
  }

  const id = errorId<T>(idSchema);
  return (
    <ul className="list-inside list-none" id={id}>
      {errors.map((error, i) => (
        <li key={i} className="m-0 border-0 p-0">
          <small className="text-destructive">{error}</small>
        </li>
      ))}
    </ul>
  );
}
