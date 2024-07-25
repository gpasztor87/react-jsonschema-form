import { FocusEvent, useCallback } from "react";

import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type WidgetProps,
  descriptionId,
  getTemplate,
  labelValue,
} from "@rjsf/utils";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const {
    id,
    label,
    hideLabel,
    disabled,
    readonly,
    onBlur,
    onChange,
    onFocus,
    value,
    options,
    registry,
    schema,
    uiSchema,
  } = props;

  const DescriptionFieldTemplate = getTemplate<
    "DescriptionFieldTemplate",
    T,
    S,
    F
  >("DescriptionFieldTemplate", registry, options);

  const handleChange = useCallback(
    (checked: boolean) => onChange(checked),
    [onChange],
  );

  const handleBlur = useCallback(
    ({ target }: FocusEvent<HTMLButtonElement>) => onBlur(id, target.value),
    [id, onBlur],
  );

  const handleFocus = useCallback(
    ({ target }: FocusEvent<HTMLButtonElement>) => onFocus(id, target.value),
    [id, onFocus],
  );

  const description = options.description ?? schema.description;

  return (
    <div className="flex items-start space-x-2">
      <Checkbox
        id={id}
        name={id}
        checked={value}
        disabled={disabled || readonly}
        onCheckedChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <div className="grid">
        <Label htmlFor={id}>{labelValue(label, hideLabel, false)}</Label>
        {!hideLabel && !!description && (
          <DescriptionFieldTemplate
            id={descriptionId<T>(id)}
            description={description}
            schema={schema}
            uiSchema={uiSchema}
            registry={registry}
          />
        )}
      </div>
    </div>
  );
}
