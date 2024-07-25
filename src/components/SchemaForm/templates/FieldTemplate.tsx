import {
  type FieldTemplateProps,
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  getTemplate,
  getUiOptions,
} from "@rjsf/utils";

import { Label } from "@/components/ui/label";

export function FieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldTemplateProps<T, S, F>) {
  const {
    id,
    children,
    label,
    description,
    disabled,
    readonly,
    displayLabel,
    errors,
    help,
    hidden,
    rawDescription,
    onDropPropertyClick,
    onKeyChange,
    registry,
    schema,
    uiSchema,
  } = props;
  const uiOptions = getUiOptions<T, S, F>(uiSchema);

  const WrapIfAdditionalTemplate = getTemplate<
    "WrapIfAdditionalTemplate",
    T,
    S,
    F
  >("WrapIfAdditionalTemplate", registry, uiOptions);

  if (hidden) {
    return <div className="hidden">{children}</div>;
  }

  return (
    <WrapIfAdditionalTemplate
      id={id}
      label={label}
      disabled={disabled}
      readonly={readonly}
      onDropPropertyClick={onDropPropertyClick}
      onKeyChange={onKeyChange}
      schema={schema}
      uiSchema={uiSchema}
      registry={registry}
    >
      <div className="block mb-4">
        {displayLabel && <FieldLabel {...props} />}
        {children}
        {displayLabel && rawDescription && (
          <div className="mt-1 block">{description}</div>
        )}
        {errors}
        {help}
      </div>
    </WrapIfAdditionalTemplate>
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
