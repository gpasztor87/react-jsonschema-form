import { type FieldHelpProps, helpId } from "@rjsf/utils";

export function FieldHelpTemplate(props: FieldHelpProps) {
  const { help, idSchema } = props;

  if (help === undefined) {
    return null;
  }

  const id = helpId(idSchema);
  return (
    <p id={id} className="text-sm text-muted-foreground">
      {help}
    </p>
  );
}
