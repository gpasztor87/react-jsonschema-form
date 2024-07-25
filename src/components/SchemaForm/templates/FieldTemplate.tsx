import { type FieldTemplateProps } from "@rjsf/utils";

import { FormContext } from "@/components/SchemaForm";
import { Label } from "@/components/ui/label";

export function FieldTemplate(props: FieldTemplateProps) {
  const {
    children,
    description,
    displayLabel,
    errors,
    help,
    hidden,
    rawDescription,
  } = props;

  if (hidden) {
    return <div className="hidden">{children}</div>;
  }

  return (
    <div className="block mb-4">
      {displayLabel && <FieldLabel {...props} />}
      {children}
      {displayLabel && rawDescription && (
        <div className="mt-1 block">{description}</div>
      )}
      {errors}
      {help}
    </div>
  );
}

function FieldLabel(props: FieldTemplateProps) {
  const { id, label, required, schema } = props;
  const formContext = props.formContext as FormContext;

  if (label === "") return null;

  return (
    <Label htmlFor={id} className="block mb-2">
      {label}
      {required && <span className="text-destructive">*</span>}
      {formContext.showTypes && (
        <pre className="italic inline-block ml-2 text-muted-foreground">
          [{schema.type}]
        </pre>
      )}
    </Label>
  );
}
