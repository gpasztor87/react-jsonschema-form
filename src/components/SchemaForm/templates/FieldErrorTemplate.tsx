import { type FieldErrorProps, errorId } from "@rjsf/utils";

export function FieldErrorTemplate(props: FieldErrorProps) {
  const { errors, idSchema } = props;

  if (errors === undefined || errors.length === 0) return null;
  const id = errorId(idSchema);
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
