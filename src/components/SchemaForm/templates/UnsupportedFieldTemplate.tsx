import { type UnsupportedFieldProps } from "@rjsf/utils";

export function UnsupportedFieldTemplate(props: UnsupportedFieldProps) {
  const { schema, reason } = props;

  return (
    <div>
      {reason}
      {schema && <pre>{JSON.stringify(schema, null, 2)}</pre>}
    </div>
  );
}
