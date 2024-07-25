import {
  type FieldTemplateProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";

import { Label } from "@/components/ui/label";

export function FieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldTemplateProps<T, S, F>) {
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

function FieldLabel<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldTemplateProps<T, S, F>) {
  const { id, label, required, formContext, schema } = props;

  if (label === "") {
    return null;
  }

  return (
    <Label htmlFor={id} className="block mb-2">
      {label}
      {required && <span className="text-destructive">*</span>}
      {formContext && formContext.showTypes && (
        <pre className="italic inline-block ml-2 text-muted-foreground">
          [{schema.type}]
        </pre>
      )}
    </Label>
  );
}
